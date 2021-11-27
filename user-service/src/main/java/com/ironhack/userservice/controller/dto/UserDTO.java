package com.ironhack.userservice.controller.dto;

import com.ironhack.userservice.enums.AccountType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private String username;
    private String password;
    private String email;
    private String phoneNumber;
    private AccountType accountType;
//    private List<Long> eventList;

    public UserDTO(UserDTO userDTO) {
        this.username = userDTO.getUsername();
        this.password = userDTO.getPassword();
        this.email = userDTO.getEmail();
        this.phoneNumber = userDTO.getPhoneNumber();
        this.accountType = userDTO.getAccountType();
    }
//
//    public UserDTO(String username, String password, String email, int phoneNumber, AccountType accountType) {
//        this.username = username;
//        this.password = password;
//        this.email = email;
//        this.phoneNumber = phoneNumber;
//        this.accountType = accountType;
//    }
}
