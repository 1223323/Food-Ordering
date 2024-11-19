package com.jash.Online.Food.Ordering.service;

import com.jash.Online.Food.Ordering.dto.RestaurantDto;
import com.jash.Online.Food.Ordering.model.Address;
import com.jash.Online.Food.Ordering.model.Restaurant;
import com.jash.Online.Food.Ordering.model.User;
import com.jash.Online.Food.Ordering.repository.AddressRepository;
import com.jash.Online.Food.Ordering.repository.RestaurantRepository;
import com.jash.Online.Food.Ordering.repository.UserRepository;
import com.jash.Online.Food.Ordering.request.CreateRestaurantRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantServiceImp implements RestaurantService {


    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;


    @Override
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user) {
        Address address = addressRepository.save(req.getAddress());

        Restaurant restaurant = new Restaurant();

        restaurant.setAddress(address);
        restaurant.setContactInformation(req.getContactInformation());
        restaurant.setName(req.getName());
        restaurant.setCuisineType(req.getCuisineType());
        restaurant.setDescription(req.getDiscription());
        restaurant.setImages(req.getImages());
        restaurant.setOpeningHours(req.getOpeningHours());
        restaurant.setRegistrationDate(LocalDateTime.now());
        restaurant.setOwner(user);

        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updateRequest) throws Exception {

        Restaurant restaurant = findRestaurantByUserId(restaurantId);

        if (restaurant.getName() != null) {
            restaurant.setName(updateRequest.getName());
        }

        if (restaurant.getCuisineType() != null) {
            restaurant.setCuisineType(updateRequest.getCuisineType());
        }
        if (restaurant.getDescription() != null) {
            restaurant.setDescription(updateRequest.getDiscription());
        }

        return restaurantRepository.save(restaurant);
    }

    @Override
    public void deleteRestaurant(Long restaurantId) throws Exception {

        Restaurant restaurant = findRestaurantByUserId(restaurantId);

        restaurantRepository.delete(restaurant);
    }

    @Override
    public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

    @Override
    public List<Restaurant> searchRestaurant(String keyword) {

        return restaurantRepository.findBySearchQuery(keyword);

    }

    @Override
    public Restaurant findRestaurantById(Long id) throws Exception {
        Optional<Restaurant> opt = restaurantRepository.findById(id);
        if (opt.isEmpty()) {
            throw new Exception("Restaurant not found"+id);
        }
        return opt.get();
    }

    @Override
    public Restaurant findRestaurantByUserId(Long userId) throws Exception {
        Restaurant restaurant = restaurantRepository.findByOwnerId(userId);
        if (restaurant == null) {
            throw new Exception("Restaurant not found"+userId);
        }
        return restaurant;
    }

    @Override
    public RestaurantDto addToFavourites(Long restaurantId, User user) throws Exception {
        Restaurant restaurant = findRestaurantByUserId(restaurantId);

        RestaurantDto dto = new RestaurantDto();

        dto.setDescription(restaurant.getDescription());
        dto.setImages(restaurant.getImages());
        dto.setTitle(restaurant.getName());
        dto.setId(restaurantId);

        boolean isFavorited =false;
        List<RestaurantDto> favorites =user.getFavourites();
        for(RestaurantDto favourite : favorites){
            if (favourite.getId().equals(restaurantId)){
                isFavorited = true;
                break;
            }
        }
        if (isFavorited){
            favorites.removeIf(favorite -> favorite.getId().equals(restaurantId));
        }else{
            favorites.add(dto);
        }

//        if(user.getFavourites().contains(dto)) {
//            user.getFavourites().remove(dto);
//        }
//        else user.getFavourites().add(dto);

        userRepository.save(user);

        return dto;


    }

    @Override
    public Restaurant updateRestaurantStatus(Long id) throws Exception {
        Restaurant restaurant = findRestaurantById(id);

        restaurant.setOpen(!restaurant.isOpen());

        return restaurantRepository.save(restaurant);
    }
}
