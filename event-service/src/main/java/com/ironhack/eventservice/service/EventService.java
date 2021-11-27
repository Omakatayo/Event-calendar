package com.ironhack.eventservice.service;

import com.ironhack.eventservice.controller.dto.EventDTO;
import com.ironhack.eventservice.dao.Event;
import com.ironhack.eventservice.repository.EventRepository;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    private EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }


    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElseThrow(
                () -> new NullPointerException("Event with id " + id + " not found!"));
    }


    public Event addNewEvent(EventDTO eventDTO) {
        return convertDTOToEvent(eventDTO);
    }


    public EventDTO updateEvent(Long id, EventDTO eventDTO) {
        Event event = eventRepository.findById(id).orElseThrow(
                () -> new NullPointerException("Event with id " + id + " not found!"));
        if (eventDTO.getEventName() != null) {
            event.setEventName(eventDTO.getEventName());
        }
        if (eventDTO.getDescription() != null) {
            event.setDescription(eventDTO.getDescription());
        }
        if (eventDTO.getStartDate() != null) {
            event.setStartDate(eventDTO.getStartDate());
        }
        if (eventDTO.getEndDate() != null) {
            event.setEndDate(eventDTO.getEndDate());
        }
        if (eventDTO.getAddress() != null) {
            event.setAddress(eventDTO.getAddress());
        }
        if (eventDTO.getAvailability() != null) {
            event.setAvailability(eventDTO.getAvailability());
        }
        if (eventDTO.getPrice() != null) {
            event.setPrice(eventDTO.getPrice());
        }
        if (eventDTO.getCategory() != null) {
            event.setCategory(eventDTO.getCategory());
        }
        if (eventDTO.getOrganizer() != null) {
            event.setOrganizer(eventDTO.getOrganizer());
        }
        eventRepository.save(event);
        return new EventDTO(convertEventToDTO(event));
    }

    public void deleteEvent(Long id) {
        Event event = eventRepository.findById(id).orElseThrow(
                () -> new NullPointerException("Event with id " + id + " not found!"));
        eventRepository.delete(event);
    }

    public Event convertDTOToEvent(EventDTO eventDTO) {
        Event event = new Event(
                eventDTO.getEventName(),
                eventDTO.getDescription(),
                eventDTO.getStartDate(),
                eventDTO.getEndDate(),
                eventDTO.getAddress(),
                eventDTO.getAvailability(),
                eventDTO.getPrice(),
                eventDTO.getCategory(),
                eventDTO.getOrganizer()
        );
        return eventRepository.save(event);
    }

    public EventDTO convertEventToDTO(Event event) {
        return new EventDTO(
                event.getEventName(),
                event.getDescription(),
                event.getStartDate(),
                event.getEndDate(),
                event.getAddress(),
                event.getAvailability(),
                event.getPrice(),
                event.getCategory(),
                event.getOrganizer()
        );
    }
}