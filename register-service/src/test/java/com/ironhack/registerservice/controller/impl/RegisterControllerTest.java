package com.ironhack.registerservice.controller.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ironhack.registerservice.controller.dto.RegisterDTO;
import com.ironhack.registerservice.dao.Register;
import com.ironhack.registerservice.repository.RegisterRepository;
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
class RegisterControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private RegisterRepository registerRepository;
    private Register register1;
    private Register register2;

    private MockMvc mockMvc;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        register1 = new Register(1L, "Omakatayo");
        register2 = new Register(2L, "Salva");

        registerRepository.save(register1);
        registerRepository.save(register2);
    }

    @AfterEach
    void tearDown() {
        registerRepository.delete(register1);
        registerRepository.delete(register2);
    }

    @Test
    void getAllRegistrations() throws Exception {
        MvcResult result = mockMvc.perform(
                get("/api/register")
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("Salva"));
        assertFalse(result.getResponse().getContentAsString().contains("Jaume"));

    }

    @Test
    void getUsersRegisteredToEvent() throws Exception {
        MvcResult result = mockMvc.perform(
                get("/api/register/byevent/" + register1.getEventId())
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("Omakatayo"));
        assertFalse(result.getResponse().getContentAsString().contains("Jaume"));
    }

    @Test
    void getRegisteredByUser() throws Exception {
        MvcResult result = mockMvc.perform(
                get("/api/register/byusername/" + register2.getUsername())
        ).andExpect(status().isOk()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("2"));
        assertFalse(result.getResponse().getContentAsString().contains("8"));
    }

    @Test
    void register() throws Exception {
        RegisterDTO register = new RegisterDTO(3L, "Shubham");
        String body = objectMapper.writeValueAsString(register);
        MvcResult result = mockMvc.perform(
                post("/api/register")
                        .content(body)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isCreated()).andReturn();

        assertTrue(result.getResponse().getContentAsString().contains("Shubham"));
        assertFalse(result.getResponse().getContentAsString().contains("Antonio"));
    }

}