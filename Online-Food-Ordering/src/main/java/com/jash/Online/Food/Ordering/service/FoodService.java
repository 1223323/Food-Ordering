package com.jash.Online.Food.Ordering.service;

import com.jash.Online.Food.Ordering.model.Category;
import com.jash.Online.Food.Ordering.model.Food;
import com.jash.Online.Food.Ordering.model.Restaurant;
import com.jash.Online.Food.Ordering.request.CreateFoodRequest;
import org.springframework.stereotype.Service;

import java.util.List;


public interface FoodService {

    public Food createfood(CreateFoodRequest req, Category category, Restaurant restaurant);

    void deleteFood(Long foodId) throws Exception;

    public List<Food> getRestaurantFood(Long restaurantId,
                                        boolean isVegetarian,
                                        boolean isnonVeg,
                                        boolean isSeasonal,
                                        String foodCategory
    );

    public List<Food> searchFood(String keyword);

    public Food findFoodById(Long foodId) throws Exception;

    public Food updateAvailibilityStatus(Long fodId) throws Exception;

}
