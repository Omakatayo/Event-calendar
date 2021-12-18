package com.ironhack.registerservice.controller.impl;

import com.ironhack.registerservice.controller.dto.RegisterDTO;
import com.ironhack.registerservice.dao.Register;
import com.ironhack.registerservice.repository.RegisterRepository;
import com.ironhack.registerservice.service.RegisterService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "*"})
@RestController
@RequestMapping("/api/register")
public class RegisterController {

    private RegisterRepository registerRepository;
    private RegisterService registerService;

    public RegisterController(RegisterRepository registerRepository, RegisterService registerService) {
        this.registerRepository = registerRepository;
        this.registerService = registerService;
    }

    @GetMapping
    public List<Register> getAllRegistrations() {
        return registerRepository.findAll();
    }

    @GetMapping("/byevent/{eventId}")
    public List<String> getUsersRegisteredToEvent(@PathVariable Long eventId) {
        return registerService.getUsersRegisteredToEvent(eventId);
    }

    @GetMapping("/byusername/{username}")
    public List<Long> getRegisteredByUser(@PathVariable String username) {
        return registerService.getRegisteredByUser(username);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Register register(@RequestBody RegisterDTO registerDTO) {
        return registerService.register(registerDTO);
    }

//    @DeleteMapping("/unregister")
//    public void unregister(@RequestParam(name = "eventId") Long eventId,
//                           @RequestParam(name = "username") String username) {
//        registerService.unregister(eventId, username);
//    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public void unregister(@RequestParam(name = "eventId") Long eventId,
                           @RequestParam(name = "username") String username) {
        registerService.unregister(eventId, username);
}
}
