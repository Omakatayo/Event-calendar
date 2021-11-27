package com.ironhack.eventservice.dao;

import com.ironhack.eventservice.enums.Category;
import com.ironhack.eventservice.utils.Address;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String eventName;
    private String description;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:MM")
    private LocalDateTime startDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:MM")
    private LocalDateTime endDate;

    @Embedded
    private Address address;

    private int availability;
    private BigDecimal price;

    @Enumerated(EnumType.STRING)
    private Category category;

    private String organizer;

    public Event(String eventName, String description, LocalDateTime startDate, LocalDateTime endDate,
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

}
