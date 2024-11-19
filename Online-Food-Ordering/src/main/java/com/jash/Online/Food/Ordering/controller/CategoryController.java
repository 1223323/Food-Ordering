package com.jash.Online.Food.Ordering.controller;


import com.jash.Online.Food.Ordering.model.Category;
import com.jash.Online.Food.Ordering.model.User;
import com.jash.Online.Food.Ordering.repository.CategoryRepository;
import com.jash.Online.Food.Ordering.service.CategoryService;
import com.jash.Online.Food.Ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/admin/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category,
                                                   @RequestHeader("Authorization") String jwt) throws Exception {

        User user =userService.findUserByJwtToken(jwt);

        Category createdCategory=categoryService.createCategory(category.getName(),user.getId());
        return new ResponseEntity<>(createdCategory, HttpStatus.OK);

    }

    @GetMapping("/category/restaurant")
    public ResponseEntity<List<Category>> getRestaurantCategory(@RequestBody Category category,
                                                                @RequestHeader("Authorization") String jwt) throws Exception {

        User user =userService.findUserByJwtToken(jwt);

        List<Category> Category=categoryService.findCategoryByRestaurantId(user.getId());

        return new ResponseEntity<>(Category, HttpStatus.OK);

    }
}
