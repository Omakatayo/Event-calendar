package com.ironhack.calendarservice.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Calendar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String username;

    @ElementCollection
    @CollectionTable(name = "calendar_events", joinColumns = @JoinColumn(name = "calendar_id"))
    private Set<Long> eventId = new HashSet<>();

    public Calendar(String name, String username) {
        this.name = name;
        this.username = username;
    }
}
