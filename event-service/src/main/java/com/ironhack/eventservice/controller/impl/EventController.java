package com.ironhack.eventservice.controller.impl;

import com.ironhack.eventservice.controller.dto.EventDTO;
import com.ironhack.eventservice.dao.Event;
import com.ironhack.eventservice.enums.Category;
import com.ironhack.eventservice.repository.EventRepository;
import com.ironhack.eventservice.service.EventService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api/events")
public class EventController {

    private EventRepository eventRepository;
    private EventService eventService;

    public EventController(EventRepository eventRepository, EventService eventService) {
        this.eventRepository = eventRepository;
        this.eventService = eventService;
    }

    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @GetMapping("/byname/{eventName}")
    public List<Event> getAllEventsByName(@PathVariable String eventName) {
        return eventRepository.findByEventName(eventName);
    }

    @GetMapping("/bydate/{startDate}")
    public List<Event> getAllEventsByStartDate(@PathVariable LocalDateTime startDate) {
        return eventRepository.findByStartDate(startDate);
    }

    @GetMapping("/byavailability/{availability}")
    public List<Event> getAllEventsByAvailability(@PathVariable Integer availability) {
        return eventRepository.findByAvailability(availability);
    }

    @GetMapping("/bycategory/{category}")
    public List<Event> getAllEventsByAvailability(@PathVariable Category category) {
        return eventRepository.findByCategory(category);
    }

    @GetMapping("/byorganizer/{organizer}")
    public List<Event> getAllEventsByAvailability(@PathVariable String organizer) {
        return eventRepository.findByOrganizer(organizer);
    }

    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id) {
        Event event = eventService.getEventById(id);
        if (event == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return event;
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Event addNewEvent(@RequestBody EventDTO eventDTO) {
        return eventService.addNewEvent(eventDTO);
    }

    @PutMapping("/update/{id}")
    public EventDTO updateEvent(@PathVariable Long id, @RequestBody EventDTO eventDTO) {
        return eventService.updateEvent(id, eventDTO);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
    }
}