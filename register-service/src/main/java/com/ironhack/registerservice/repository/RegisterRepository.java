package com.ironhack.registerservice.repository;

import com.ironhack.registerservice.dao.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Long> {

    List<Register> findByEventId(Long eventId);

    List<Register> findByUsername(String username);

    Optional<Register> findByEventIdAndUsername(Long eventId, String username);
}
