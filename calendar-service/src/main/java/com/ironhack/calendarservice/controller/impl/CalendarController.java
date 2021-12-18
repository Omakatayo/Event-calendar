package com.ironhack.calendarservice.controller.impl;

import com.ironhack.calendarservice.controller.dto.CalendarDTO;
import com.ironhack.calendarservice.dao.Calendar;
import com.ironhack.calendarservice.repository.CalendarRepository;
import com.ironhack.calendarservice.service.CalendarService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "*"})
@RestController
@RequestMapping("/api/calendars")
public class CalendarController {

    private CalendarRepository calendarRepository;
    private CalendarService calendarService;

    public CalendarController(CalendarRepository calendarRepository, CalendarService calendarService) {
        this.calendarRepository = calendarRepository;
        this.calendarService = calendarService;
    }


    @GetMapping("/{id}")
    public Calendar getCalendarById(@PathVariable Long id) {
        return calendarService.getCalendarById(id);
    }

    @GetMapping("/byusername/{username}")
    public List<Calendar> getCalendarByUsername(@PathVariable String username) {
        return calendarRepository.findByUsername(username);
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Calendar addNewCalendar(@RequestBody CalendarDTO calendarDTO) {
        return calendarService.addNewCalendar(calendarDTO);
    }

    @PostMapping("/addevent")
    public CalendarDTO addEventToCalendar(@RequestParam(name = "calendarId") Long calendarId,
                                          @RequestParam(name = "eventId") Long eventId,
                                          @RequestBody CalendarDTO calendarDTO) {
        return calendarService.addEventToCalendar(calendarId, eventId, calendarDTO);
    }

    @PutMapping("/removeevent")
    public Calendar removeEventFromCalendar(@RequestParam(name = "calendarId") Long calendarId,
                                            @RequestParam(name = "eventId") Long eventId,
                                            @RequestBody CalendarDTO calendarDTO) {
        return calendarService.removeEventFromCalendar(calendarId, eventId, calendarDTO);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCalendar(@PathVariable Long id) {
        calendarService.deleteCalendar(id);
    }
}
