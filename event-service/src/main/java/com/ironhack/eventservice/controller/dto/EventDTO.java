package com.ironhack.eventservice.controller.dto;

import com.ironhack.eventservice.enums.Category;
import com.ironhack.eventservice.utils.Address;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Embedded;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventDTO {

    private String eventName;
    private String description;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;
    @DateTimeFormat(pattern = "HH:MM")
    private LocalTime startTime;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;
    @DateTimeFormat(pattern = "HH:MM")
    private LocalTime endTime;

    @Embedded
    private Address address;

    private Integer availability;
    private BigDecimal price;
    private Category category;
    private String organizer;


    public EventDTO(EventDTO eventDTO) {
        this.eventName = eventDTO.getEventName();
        this.description = eventDTO.getDescription();
        this.startDate = eventDTO.getStartDate();
        this.startTime = eventDTO.startTime;
        this.endDate = eventDTO.getEndDate();
        this.endTime = eventDTO.endTime;
        this.address = eventDTO.getAddress();
        this.availability = eventDTO.getAvailability();
        this.price = eventDTO.getPrice();
        this.category = eventDTO.getCategory();
        this.organizer = eventDTO.getOrganizer();
    }
}
