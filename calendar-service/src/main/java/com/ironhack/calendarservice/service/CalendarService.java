package com.ironhack.calendarservice.service;

import com.ironhack.calendarservice.controller.dto.CalendarDTO;
import com.ironhack.calendarservice.dao.Calendar;
import com.ironhack.calendarservice.repository.CalendarRepository;
import org.springframework.stereotype.Service;

@Service
public class CalendarService {

    private CalendarRepository calendarRepository;

    public CalendarService(CalendarRepository calendarRepository) {
        this.calendarRepository = calendarRepository;
    }

    public Calendar getCalendarById(Long id) {
        return calendarRepository.findById(id).orElseThrow(
                () -> new NullPointerException("Calendar with id " + id + " not found!"));
    }

    public Calendar addNewCalendar(CalendarDTO calendarDTO) {
        return getConvertDTOToCalendar(calendarDTO);
    }


    private Calendar getConvertDTOToCalendar(CalendarDTO calendarDTO) {
        Calendar calendar =  new Calendar(
                calendarDTO.getName(),
                calendarDTO.getUsername()
        );
        return calendarRepository.save(calendar);
    }

    public Calendar addEventToCalendar(Long calendarId, Long eventId) {
        Calendar calendar = calendarRepository.findById(calendarId).orElseThrow(
                () -> new NullPointerException("Calendar with id " + calendarId + " not found!"));
        if (eventId != null) {
            calendar.getEventId().add(eventId);
        }
        return calendarRepository.save(calendar);
    }
}
