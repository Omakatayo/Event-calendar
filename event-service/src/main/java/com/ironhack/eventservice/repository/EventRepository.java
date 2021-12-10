package com.ironhack.eventservice.repository;

import com.ironhack.eventservice.dao.Event;
import com.ironhack.eventservice.enums.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByEventName(String name);

    List<Event> findByStartDate(LocalDate startDate);

    List<Event> findByAvailability(Integer availability);

    List<Event> findByCategory(Category category);

    List<Event> findByOrganizer(String organizer);

    @Query("SELECT e from Event e ORDER BY e.startDate")
    List<Event> findAllOpenEventsSorted();
}