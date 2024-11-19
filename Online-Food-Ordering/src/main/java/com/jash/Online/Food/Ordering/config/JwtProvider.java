package com.jash.Online.Food.Ordering.config;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.*;

import com.jash.Online.Food.Ordering.config.JwtConstant;

@Service
public class JwtProvider {


    private SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());

    //will generate a JWT token for an authenticated user.
    public String generateToken(Authentication auth) {

        //It gets the roles/authorities (permissions) of the user from the Authentication object.
        Collection<? extends GrantedAuthority> authorities =auth.getAuthorities();

        //This line processes the authorities into a string (e.g., “ROLE_ADMIN, ROLE_USER”)
        String roles = populateAutorities(authorities);

        String jwt= Jwts.builder()
                .claim("authorities", roles)               // Add roles to the JWT payload
                .claim("email",auth.getName())            // The subject of the token (username)
                .setIssuedAt(new Date())                    // Set when the token was issued
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // Expiration in 24 hrs
                .signWith(key, SignatureAlgorithm.HS256)  // Sign the token with the secret key
                .compact();                              // Build the final token

        return jwt;
    }

    public String getEmailfromJwtToken(String jwt) {
        jwt=jwt.substring(7);

        Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();

        String email = String.valueOf(claims.get("email"));

        return email;
    }

    private String populateAutorities(Collection<? extends GrantedAuthority> authorities) {

        Set<String> auths=new HashSet<>();

        for(GrantedAuthority authority : authorities){
            auths.add(authority.getAuthority());
        }

        return String.join(",", auths);
    }

}
