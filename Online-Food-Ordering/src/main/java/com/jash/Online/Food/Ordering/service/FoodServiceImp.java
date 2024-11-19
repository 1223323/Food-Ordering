package com.jash.Online.Food.Ordering.service;

import com.jash.Online.Food.Ordering.model.Category;
import com.jash.Online.Food.Ordering.model.Food;
import com.jash.Online.Food.Ordering.model.Restaurant;
import com.jash.Online.Food.Ordering.repository.FoodRepository;
import com.jash.Online.Food.Ordering.request.CreateFoodRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;


@Service
public class FoodServiceImp implements FoodService {

    @Autowired
    private FoodRepository foodRepository;


    @Override
    public Food createfood(CreateFoodRequest req, Category category, Restaurant restaurant) {
        Food food = new Food();
        food.setFoodCategory(category);
        food.setRestaurant(restaurant);
        food.setDescription(req.getDescription());
        food.setPrice(req.getPrice());
        food.setName(req.getName());
        food.setImages(req.getImages());
        food.setIngredients(req.getIngredients());
        food.setSeasonal(req.isSeasonal());
        food.setVegetarian(req.isVegetarian());

        Food savedFood = foodRepository.save(food);

        restaurant.getFoods().add(savedFood);

        return savedFood;
    }

    @Override
    public void deleteFood(Long foodId) throws Exception {

        Food food = findFoodById(foodId);
        food.setRestaurant(null);
        foodRepository.save(food);

    }

    @Override
    public List<Food> getRestaurantFood(Long restaurantId, boolean isVegetarian, boolean isnonVeg, boolean isSeasonal, String foodCategory) {
        List<Food> foods = foodRepository.findRestaurantById(restaurantId);

        if (isVegetarian) {
            foods = filterByVegetarian(foods, isVegetarian);
        }
        if (isnonVeg) {
            foods = filterByNonVeg(foods, isnonVeg);
        }
        if (isSeasonal) {
            foods = filterBySeasonal(foods, isSeasonal);
        }
        if (foodCategory != null && !foodCategory.equals("")) {
            foods = filterByCategory(foods, foodCategory);
        }
        return foods;

    }

    private List<Food> filterByCategory(List<Food> foods, String foodCategory) {
        return foods.stream().filter(food -> {
            if (food.getFoodCategory() != null) {
                return food.getFoodCategory().getName().equals(foodCategory);
            } else return false;
        }).collect(Collectors.toList());

    }

    private List<Food> filterBySeasonal(List<Food> foods, boolean isSeasonal) {
        return foods.stream().filter(food -> food.isSeasonal() == isSeasonal).collect(Collectors.toList());
    }

    private List<Food> filterByNonVeg(List<Food> foods, boolean isnonVeg) {
        return foods.stream().filter(food -> food.isVegetarian() == false).collect(Collectors.toList());
    }

    private List<Food> filterByVegetarian(List<Food> foods, boolean isVegetarian) {

        return foods.stream().filter(food -> food.isVegetarian() == isVegetarian).collect(Collectors.toList());
    }

    @Override
    public List<Food> searchFood(String keyword) {
        return foodRepository.searchFood(keyword);
    }

    @Override
    public Food findFoodById(Long foodId) throws Exception {
        Optional<Food> optionalFood = foodRepository.findById(foodId);

        if (optionalFood.isEmpty()) {
            throw new Exception("No Food Exists ...");
        }
        return optionalFood.get();
    }

    @Override
    public Food updateAvailibilityStatus(Long fodId) throws Exception {
        Food food = findFoodById(fodId);

        food.setAvailable(!food.isAvailable());
        return foodRepository.save(food);
    }
}
