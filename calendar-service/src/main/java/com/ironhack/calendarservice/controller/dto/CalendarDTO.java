package com.ironhack.calendarservice.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CalendarDTO {

    private String name;
    private String username;
    private Set<Long> eventId;

    public CalendarDTO(String name, String username) {
        this.name = name;
        this.username = username;
    }
}
