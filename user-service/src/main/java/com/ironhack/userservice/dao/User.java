package com.ironhack.userservice.dao;

import com.ironhack.userservice.enums.AccountType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String email;
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    private AccountType accountType;

    public User(String username, String password, String email, String phoneNumber, AccountType accountType) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.accountType = accountType;
    }
}
