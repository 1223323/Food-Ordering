package com.jash.Online.Food.Ordering.response;

import com.jash.Online.Food.Ordering.model.USER_ROLE;
import com.jash.Online.Food.Ordering.model.User;
import lombok.Data;

@Data
public class AuthResponse {

    private String jwt;

    private String message;

    private USER_ROLE role;
}
