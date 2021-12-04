package com.ironhack.registerservice.service;

import com.ironhack.registerservice.controller.dto.RegisterDTO;
import com.ironhack.registerservice.dao.Register;
import com.ironhack.registerservice.repository.RegisterRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RegisterService {

    private RegisterRepository registerRepository;

    public RegisterService(RegisterRepository registerRepository) {
        this.registerRepository = registerRepository;
    }


    public List<String> getUsersRegisteredToEvent(Long eventId) {
        List<String> userList = new ArrayList<>();
        for (var registered : registerRepository.findByEventId(eventId)) {
            userList.add(registered.getUsername());
        }
        return  userList;
    }

    public List<Long> getRegisteredByUser(String username) {
        List<Long> eventList = new ArrayList<>();
        for (var registered : registerRepository.findByUsername(username)) {
            eventList.add(registered.getEventId());
        }
        return  eventList;
    }

    public Register register(Long eventId, String username, RegisterDTO registerDTO) {
        Register register = new Register(eventId, username);
        return registerRepository.save(register);
    }

    public void unregister(Long eventId, String username) {
        try {
            Optional<Register> register = registerRepository.findByEventIdAndUsername(eventId, username);
            if(register.isPresent()) {
//                Optional<Register> registerDelete = registerRepository.findById(register.get().getId());
                registerRepository.delete(register.get());
            }
        } catch (Exception e){
            throw new NullPointerException("User " + username + " is not registered to event " + eventId + "!");
        }
    }
}
