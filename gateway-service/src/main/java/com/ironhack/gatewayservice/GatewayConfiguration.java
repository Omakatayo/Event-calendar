package com.ironhack.gatewayservice;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:4200", "*"})
@Configuration
public class GatewayConfiguration {

    @Bean
    public RouteLocator gatewayRouter(RouteLocatorBuilder builder) {
        return builder.routes()

                // User Service
                .route(p -> p.path("/api/users/**")
                        .uri("lb://USER-SERVICE"))
                .route(p -> p.path("/api/users**")
                        .uri("lb://USER-SERVICE"))

                // Event Service
                .route(p -> p.path("/api/events/**")
                        .uri("lb://EVENT-SERVICE"))
                .route(p -> p.path("/api/events**")
                        .uri("lb://EVENT-SERVICE"))

                // Event Register Service
                .route(p -> p.path("/api/register/**")
                        .uri("lb://REGISTER-SERVICE"))
                .route(p -> p.path("/api/register**")
                        .uri("lb://REGISTER-SERVICE"))

                // Calendar Service
                .route(p -> p.path("/api/calendars/**")
                        .uri("lb://CALENDAR-SERVICE"))
                .route(p -> p.path("/api/calendars**")
                        .uri("lb://CALENDAR-SERVICE"))

                .build();
    }
}
