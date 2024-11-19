package com.jash.Online.Food.Ordering.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.*;


//The OncePerRequestFilter ensures that the filter is only executed once per request,
public class JwtTokenValidation extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,//Represents the incoming HTTP request.
                                    HttpServletResponse response,// Represents the outgoing HTTP response.
                                    FilterChain filterChain) throws ServletException, IOException {//Allows the filter to pass control to the next filter in the chain.


        String jwt=request.getHeader(JwtConstant.JWT_HEADER);

        if(jwt!=null){

            //token will be recieved in format "bearer token"
            //so need to get "bearer " which is total 7
            jwt=jwt.substring(7);

            try{
                SecretKey key= Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
                Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
                String email =String.valueOf(claims.get("email"));
                String authorities=String.valueOf(claims.get("authorities"));

                List<GrantedAuthority> auth= AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);
                //email: This is the principal (the identity of the user). In this case, it’s the email extracted from the JWT claims, representing the authenticated user.
                //null: This is typically the credentials (like a password). In this case, it’s set to null because the authentication is done using a JWT, not through username and password verification.
                //auth: This is a list of GrantedAuthority objects, which represent the permissions granted to the user. These authorities dictate what the user can or cannot do within the application.
                Authentication authentication=new UsernamePasswordAuthenticationToken(email,null,auth);
                SecurityContextHolder.getContext().setAuthentication(authentication);


            } catch (Exception e) {
                throw new BadCredentialsException("Invalid JWT");
            }
        }
        filterChain.doFilter(request, response);
    }
}
