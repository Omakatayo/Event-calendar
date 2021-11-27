package com.ironhack.userservice.service;

import com.ironhack.userservice.controller.dto.UserDTO;
import com.ironhack.userservice.dao.User;
import com.ironhack.userservice.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(
                () -> new NullPointerException("Username " + username + " not found!"));
    }

    public User addNewUser(UserDTO userDTO) {
        return convertDTOToUser(userDTO);
    }

    public UserDTO updateUser(String username, UserDTO userDTO) {
        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new NullPointerException("Username " + username + " not found!"));
            if (userDTO.getPassword() != null) {
                user.setPassword(userDTO.getPassword());
            }
            if (userDTO.getEmail() != null) {
                user.setEmail(userDTO.getEmail());
            }
            if (userDTO.getEmail() != null) {
                user.setPhoneNumber(userDTO.getPhoneNumber());
            }
            if (userDTO.getEmail() != null) {
                user.setAccountType(userDTO.getAccountType());
            }
        userRepository.save(user);
        return new UserDTO(convertUserToDTO(user));
    }

    public void deleteUser(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new NullPointerException("Username " + username + " not found!"));
        userRepository.delete(user);
    }

    public User convertDTOToUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUsername(),
                userDTO.getPassword(),
                userDTO.getEmail(),
                userDTO.getPhoneNumber(),
                userDTO.getAccountType());
        return userRepository.save(user);
    }

    public UserDTO convertUserToDTO(User user) {
        return new UserDTO(
                        user.getUsername(),
                        user.getPassword(),
                        user.getEmail(),
                        user.getPhoneNumber(),
                        user.getAccountType());
    }


}

