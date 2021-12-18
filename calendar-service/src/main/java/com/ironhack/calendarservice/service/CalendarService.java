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
        return convertDTOToCalendar(calendarDTO);
    }

    public CalendarDTO addEventToCalendar(Long calendarId, Long eventId, CalendarDTO calendarDTO) {
        Calendar calendar = calendarRepository.findById(calendarId).orElseThrow(
                () -> new NullPointerException("Calendar with id " + calendarId + " not found!"));
        if (eventId != null) {
            calendar.getEventId().add(eventId);
        }
        calendarRepository.save(calendar);
        return convertCalendarToDTO(calendar);
    }

    public Calendar removeEventFromCalendar(Long calendarId, Long eventId, CalendarDTO calendarDTO) {
        Calendar calendar = calendarRepository.findById(calendarId).orElseThrow(
                () -> new NullPointerException("Calendar with id " + calendarId + " not found!"));
        if (eventId != null) {
            calendar.getEventId().remove(eventId);
        }
        return calendarRepository.save(calendar);
    }

    public void deleteCalendar(Long id) {
        Calendar calendar = calendarRepository.findById(id).orElseThrow(
                () -> new NullPointerException("Calendar with id " + id + " not found!"));
        calendarRepository.delete(calendar);
    }

    private Calendar convertDTOToCalendar(CalendarDTO calendarDTO) {
        Calendar calendar =  new Calendar(
                calendarDTO.getName(),
                calendarDTO.getUsername()
        );
        return calendarRepository.save(calendar);
    }

    private CalendarDTO convertCalendarToDTO(Calendar calendar) {
        return new CalendarDTO(
                calendar.getName(),
                calendar.getUsername(),
                calendar.getEventId());
    }
}
