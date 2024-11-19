package com.jash.Online.Food.Ordering.controller;


import com.jash.Online.Food.Ordering.model.Food;
import com.jash.Online.Food.Ordering.model.Restaurant;
import com.jash.Online.Food.Ordering.model.User;
import com.jash.Online.Food.Ordering.request.CreateFoodRequest;
import com.jash.Online.Food.Ordering.response.MessageResponse;
import com.jash.Online.Food.Ordering.service.FoodService;
import com.jash.Online.Food.Ordering.service.RestaurantService;
import com.jash.Online.Food.Ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/food")
public class AdminFoodController {

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;


    @PostMapping
    public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest req,
                                           @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.findRestaurantById(req.getRestaurantId());
        Food food = foodService.createfood(req, req.getCategory(), restaurant);

        return new ResponseEntity<>(food, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(@PathVariable Long id,
                                                      @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        foodService.deleteFood(id);

        MessageResponse res= new MessageResponse();
        res.setMessage("Successfully deleted food");

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Food> updateAvailabilitytatus(@PathVariable Long id,
                                                      @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        Food food=foodService.updateAvailibilityStatus(id);

        return new ResponseEntity<>(food, HttpStatus.OK);
    }


}
