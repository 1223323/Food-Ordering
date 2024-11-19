package com.jash.Online.Food.Ordering.service;

import com.jash.Online.Food.Ordering.model.Category;
import com.jash.Online.Food.Ordering.model.Restaurant;
import com.jash.Online.Food.Ordering.repository.CategoryRepository;
import com.jash.Online.Food.Ordering.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImp implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private RestaurantService restaurantService;


    @Override
    public Category createCategory(String name, Long userId) throws Exception {

        Restaurant restaurant = restaurantService.findRestaurantByUserId(userId);
        Category category = new Category();
        category.setRestaurant(restaurant);
        category.setName(name);
        category.setRestaurant(restaurant);


        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findCategoryByRestaurantId(Long id) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantByUserId(id);
        return categoryRepository.findByRestaurantId(restaurant.getId());
    }

    @Override
    public Category getCategoryById(Long id) throws Exception {
        Optional<Category> optionalCategory = categoryRepository.findById(id);

        if (optionalCategory.isEmpty()){
            throw new Exception("Category not found");
        }

        return optionalCategory.get();
    }
}
