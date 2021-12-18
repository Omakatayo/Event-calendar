package com.ironhack.eventservice.controller.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.ironhack.eventservice.dao.Event;
import com.ironhack.eventservice.enums.Category;
import com.ironhack.eventservice.repository.EventRepository;
import com.ironhack.eventservice.utils.Address;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.context.WebApplicationContext;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class EventControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private EventRepository eventRepository;
    private Event event1;
    private Event event2;
    private Address address;

    private MockMvc mockMvc;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        address = new Address("Long Street", "01-234", "Barcelona", "Spain");
        event1 = new Event("Test event", "Description", LocalDate.now(), "10:00",
                LocalDate.now(), "13:00", address, 20, 0, new BigDecimal("15"),
                Category.MEN_CIRCLES, "Omakatayo");
        event2 = new Event("Test event 2", "Description", LocalDate.now(), "10:00",
                LocalDate.now(), "13:00", address, 0, 20, new BigDecimal("15"),
                Category.MEN_CIRCLES, "Omakatayo");

        eventRepository.save(event1);
        eventRepository.save(event2);
    }

    @AfterEach
    void tearDown() {
        eventRepository.delete(event1);
        eventRepository.delete(event2);
    }

    @Test
    void getAllEvents() throws Exception {
        MvcResult result = mockMvc.perform(
                get("/api/events/all")
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("Omakatayo"));
        assertFalse(result.getResponse().getContentAsString().contains("Brutus"));

    }

    @Test
    void getAllOpenEvents() throws Exception {
        MvcResult result = mockMvc.perform(
                get("/api/events/allopen")
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("2022-01-21"));
        assertFalse(result.getResponse().getContentAsString().contains("2020-10-12"));

    }

    @Test
    void getAllEventsByName() throws Exception{
        MvcResult result = mockMvc.perform(
                get("/api/events/byname/" + event1.getEventName())
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("Test event"));
        assertFalse(result.getResponse().getContentAsString().contains("Different"));
    }

    @Test
    void getAllEventsByStartDate() throws Exception{
        MvcResult result = mockMvc.perform(
                get("/api/events/bydate/" + LocalDate.now())
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("2022-01-21"));
        assertFalse(result.getResponse().getContentAsString().contains("2020-10-12"));
    }

    @Test
    void getAllEventsByAvailability() throws Exception{
        MvcResult result = mockMvc.perform(
                get("/api/events/isavailable")
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("Test event"));
        assertFalse(result.getResponse().getContentAsString().contains("Test event 2"));
    }

    @Test
    void getEventNameById() throws Exception {
        MvcResult result = mockMvc.perform(
                get("/api/events/namebyid/" + event1.getId())
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("Test event"));
        assertFalse(result.getResponse().getContentAsString().contains("Test event 2"));
    }

    @Test
    void getEventById() throws Exception {
        MvcResult result = mockMvc.perform(
                get("/api/events/" + event1.getId())
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("Test event"));
        assertFalse(result.getResponse().getContentAsString().contains("Test event 2"));
    }

    @Test
    void addNewEvent() throws Exception{
        LocalDate date = LocalDate.of(2022,01,21);
        Event event = new Event("Test event 4", "Different description", date, "10:00",
                date, "13:00", address, 0, 20, new BigDecimal("15"),
                Category.MEN_CIRCLES, "Omakatayo");

        ObjectMapper objectMapperJ = JsonMapper.builder().addModule(new JavaTimeModule()).build();
        String body = objectMapperJ.writeValueAsString(event);
        MvcResult result = mockMvc.perform(
                post("/api/events/new")
                        .content(body)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isCreated()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("2022-01-21"));
        assertFalse(result.getResponse().getContentAsString().contains("Another event"));
    }

    @Test
    void updateEvent() throws Exception{
        LocalDate date = LocalDate.of(2022,01,21);
        Event event = new Event("Test event 4", "Different description", date, "10:00",
                date, "13:00", address, 0, 20, new BigDecimal("15"),
                Category.MEN_CIRCLES, "Omakatayo");

        ObjectMapper objectMapperJ = JsonMapper.builder().addModule(new JavaTimeModule()).build();
        String body = objectMapperJ.writeValueAsString(event);
        MvcResult result = mockMvc.perform(
                put("/api/events/update/" + event1.getId())
                        .content(body)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("Different"));
        assertFalse(result.getResponse().getContentAsString().contains("Another event"));
    }

    @Test
    void registerToEvent() throws Exception{
        MvcResult result = mockMvc.perform(
                post("/api/events/register/" + event1.getId())
        ).andExpect(status().isOk()).andReturn();

        assertEquals(1, eventRepository.findById(event1.getId()).get().getRegistered());
        assertNotEquals(5, eventRepository.findById(event1.getId()).get().getRegistered());
    }

    @Test
    void unregisterFromEvent() throws Exception{
        MvcResult result = mockMvc.perform(
                post("/api/events/unregister/" + event2.getId())
        ).andExpect(status().isOk()).andReturn();

        assertEquals(19, eventRepository.findById(event2.getId()).get().getRegistered());
        assertNotEquals(20, eventRepository.findById(event2.getId()).get().getRegistered());
    }

    @Test
    void deleteEvent() throws Exception {
        var before = eventRepository.findAll().size();
        MvcResult result = mockMvc.perform(
                delete("/api/events/delete/" + event1.getId())
        ).andExpect(status().isOk()).andReturn();

        var after = eventRepository.findAll().size();
//        assertTrue(result.getResponse().getContentAsString().contains("Test event 2"));
//        assertFalse(result.getResponse().getContentAsString().contains("Test event"));

        assertEquals(after, before - 1);
    }
}