package com.ironhack.eventservice.dao;

import com.ironhack.eventservice.enums.Category;
import com.ironhack.eventservice.utils.Address;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.math.BigDecimal;
import java.time.LocalDate;

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

    @NotBlank
    private String eventName;
    private String description;

    @NotBlank
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;
    @NotBlank
    private String startTime;

    @NotBlank
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;
    @NotBlank
    private String endTime;

    @Embedded
    private Address address;

    @NotBlank
    private int availability;
    private int registered = 0;
    @NotBlank
    private BigDecimal price;

    @Enumerated(EnumType.STRING)
    private Category category;

    @NotBlank
    private String organizer;
    @Column(name = "image_URL")
    private String imageURL = "https://www.iapco.org/app/plugins/events-calendar-pro/src/resources/images/tribe-event-placeholder-image.svg";


    public Event(
            String eventName, String description, LocalDate startDate, String startTime,
            LocalDate endDate, String endTime, Address address, int availability, int registered, BigDecimal price,
            Category category, String organizer) {
        this.eventName = eventName;
        this.description = description;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endDate = endDate;
        this.endTime = endTime;
        this.address = address;
        this.availability = availability;
        this.registered = registered;
        this.price = price;
        this.category = category;
        this.organizer = organizer;
        this.imageURL = "https://www.iapco.org/app/plugins/events-calendar-pro/src/resources/images/tribe-event-placeholder-image.svg";
    }
}
