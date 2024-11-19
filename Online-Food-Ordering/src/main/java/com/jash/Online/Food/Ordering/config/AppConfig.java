package com.jash.Online.Food.Ordering.config;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.*;

@Configuration
@EnableWebSecurity
public class AppConfig {


    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{

//httpSecurity is a class which helps with the Security functions cors,csrf authorization etc,Stateless means what type of session needs to be created stateless me session will
//be created by each request no fixed session will be created
        http.sessionManagement(managment->managment.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(Authorize->Authorize
                        //which type of user can access which tyoe of api
                        .requestMatchers("/api/admin/**").hasAnyRole("RESTAURANT_OWNER","ADMIN")
                        .requestMatchers("/api/**").authenticated()
                        .anyRequest().permitAll()
                ).addFilterBefore(new JwtTokenValidation() , BasicAuthenticationFilter.class)
                //CSRF (Cross-Site Request Forgery) is a web security issue where an attacker tricks you into doing something you didn’t intend, like transferring money etc
                .csrf(csrf->csrf.disable())
                //CORS (Cross-Origin Resource Sharing) is a security feature that controls how a web page can request data from a different domain (origin).
                .cors(cors->cors.configurationSource(configurationSource()));
                
                return http.build();
    }


    private CorsConfigurationSource configurationSource() {
        return new CorsConfigurationSource() {
            @Override
            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {

                CorsConfiguration config = new CorsConfiguration();

                //Add the type of url that can access the project
                config.setAllowedOrigins(List.of("*"));

                //Permits cookies or authentication data to be sent with the request.
                config.setAllowCredentials(true);

                // Allows all types of headers in incoming requests.
                config.setAllowedHeaders(Collections.singletonList("*"));

                //Which type of methods We Want to allow-->GET ,POST etc
                config.setAllowedMethods(Collections.singletonList("*"));

                //Allows the Authorization header to be visible in responses.
                config.setExposedHeaders(Arrays.asList("Authorization"));

                config.setMaxAge(3600L);

                return config;
            }
        };
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
