package com.jash.Online.Food.Ordering.service;

import com.jash.Online.Food.Ordering.dto.RestaurantDto;
import com.jash.Online.Food.Ordering.model.Restaurant;
import com.jash.Online.Food.Ordering.model.User;
import com.jash.Online.Food.Ordering.request.CreateRestaurantRequest;

import java.util.*;

public interface RestaurantService {


    public Restaurant createRestaurant(CreateRestaurantRequest req, User user);

    public Restaurant updateRestaurant(Long restaurandId, CreateRestaurantRequest updateRequest) throws Exception;

    public void deleteRestaurant(Long restaurantId) throws Exception;

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> searchRestaurant(String keyword);

    public Restaurant findRestaurantById(Long id) throws Exception;

    public Restaurant findRestaurantByUserId(Long userId) throws Exception;


    public RestaurantDto addToFavourites(Long restaurantId, User user) throws Exception;

    public Restaurant updateRestaurantStatus(Long id) throws Exception;


}
