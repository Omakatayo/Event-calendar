package com.ironhack.calendarservice.controller.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.ironhack.calendarservice.controller.dto.CalendarDTO;
import com.ironhack.calendarservice.dao.Calendar;
import com.ironhack.calendarservice.repository.CalendarRepository;
import org.apache.tomcat.jni.Address;
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

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class CalendarControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private CalendarRepository calendarRepository;
    private Calendar calendar1;
    private Calendar calendar2;

    private MockMvc mockMvc;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        calendar1 = new Calendar("Calendar", "Salva");
        calendar2 = new Calendar("Calendar100", "Tom");

        calendarRepository.save(calendar1);
        calendarRepository.save(calendar2);
    }

    @AfterEach
    void tearDown() {
        calendarRepository.delete(calendar1);
        calendarRepository.delete(calendar2);
    }

    @Test
    void getCalendarById() throws Exception {
        MvcResult result = mockMvc.perform(
                get("/api/calendars/" + calendar1.getId())
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("Salva"));
        assertFalse(result.getResponse().getContentAsString().contains("Calendar100"));
    }

    @Test
    void getCalendarByUsername() throws Exception {
        MvcResult result = mockMvc.perform(
                get("/api/calendars/byusername/" + calendar1.getUsername())
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("Salva"));
        assertFalse(result.getResponse().getContentAsString().contains("Calendar100"));
    }

    @Test
    void addNewCalendar() throws Exception{
        Calendar calendar = new Calendar("New calendar", "Shubham");


        String body = objectMapper.writeValueAsString(calendar);
        MvcResult result = mockMvc.perform(
                post("/api/calendars/new")
                        .content(body)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isCreated()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("New calendar"));
        assertFalse(result.getResponse().getContentAsString().contains("Calendar999"));
    }

    @Test
    void addEventToCalendar() throws Exception{
        Calendar calendar = new Calendar("New calendar", "Shubham");

        String body = objectMapper.writeValueAsString(calendar);
        MvcResult result = mockMvc.perform(
                post("/api/calendars/new")
                        .content(body)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isCreated()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("New calendar"));
        assertFalse(result.getResponse().getContentAsString().contains("Calendar999"));
    }
}