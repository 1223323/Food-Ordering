package com.jash.Online.Food.Ordering.controller;

import com.jash.Online.Food.Ordering.model.Food;
import com.jash.Online.Food.Ordering.model.User;
import com.jash.Online.Food.Ordering.response.MessageResponse;
import com.jash.Online.Food.Ordering.service.FoodService;
import com.jash.Online.Food.Ordering.service.RestaurantService;
import com.jash.Online.Food.Ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {


    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @PostMapping("/search")
    public ResponseEntity<List<Food>> searchFood(@PathVariable String name,
                                                 @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        List<Food> foods =foodService.searchFood(name);



        return new ResponseEntity<>(foods, HttpStatus.OK);
    }

    @PostMapping("/restaurant/{restaurantId}")
    public ResponseEntity<List<Food>> getRestaurantFood(@PathVariable Long restaurantId,
                                                 @RequestParam boolean vegetarian,
                                                 @RequestParam boolean seasonal,
                                                 @RequestParam boolean nonveg,
                                                 @RequestParam(required = false) String food_category,
                                                 @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        List<Food> foods =foodService.getRestaurantFood(restaurantId, vegetarian, seasonal, nonveg, food_category);



        return new ResponseEntity<>(foods, HttpStatus.OK);
    }
}
