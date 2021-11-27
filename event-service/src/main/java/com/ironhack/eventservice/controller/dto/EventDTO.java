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
import java.time.Duration;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventDTO {

    private String eventName;
    private String description;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:MM")
    private LocalDateTime startDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:MM")
    private LocalDateTime endDate;

    @Embedded
    private Address address;

    private Integer availability;
    private BigDecimal price;
    private Category category;
    private String organizer;

    public EventDTO(String eventName, String description, LocalDateTime startDate, LocalDateTime endDate,
                 Address address, int availability, BigDecimal price, Category category,
                 String organizer) {
        this.eventName = eventName;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.address = address;
        this.availability = availability;
        this.price = price;
        this.category = category;
        this.organizer = organizer;
    }

    public EventDTO(EventDTO eventDTO) {
        this.eventName = eventDTO.getEventName();
        this.description = eventDTO.getDescription();
        this.startDate = eventDTO.getStartDate();
        this.endDate = eventDTO.getEndDate();
        this.address = eventDTO.getAddress();
        this.availability = eventDTO.getAvailability();
        this.price = eventDTO.getPrice();
        this.category = eventDTO.getCategory();
        this.organizer = eventDTO.getOrganizer();
    }
}
