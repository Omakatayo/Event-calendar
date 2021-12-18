package com.ironhack.eventservice.utils;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embeddable;

@Getter
@Setter
@Embeddable
public class Address {

    private String street;
    private String postalCode;
    private String city;
    private String country;
}
