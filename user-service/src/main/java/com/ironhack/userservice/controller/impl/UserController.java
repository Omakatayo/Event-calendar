package com.ironhack.userservice.controller.impl;

import com.ironhack.userservice.controller.dto.UserDTO;
import com.ironhack.userservice.service.UserService;
import com.ironhack.userservice.dao.User;
import com.ironhack.userservice.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserRepository userRepository;
    private UserService userService;

    public UserController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{username}")
    public User getUserByUsername(@PathVariable String username) {
        User user = userService.getUserByUsername(username);
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return user;
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public User addNewUser(@RequestBody UserDTO userDTO) {
        return userService.addNewUser(userDTO);
    }

    @PutMapping("/update/{username}")
    public UserDTO updateUser(@PathVariable String username, @RequestBody UserDTO userDTO) {
        return userService.updateUser(username, userDTO);
    }

    @DeleteMapping("/delete/{username}")
    public void deleteUser(@PathVariable String username) {
        userService.deleteUser(username);
    }
}
