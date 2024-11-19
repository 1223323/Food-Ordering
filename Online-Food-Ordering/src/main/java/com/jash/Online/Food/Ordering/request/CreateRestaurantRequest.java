package com.jash.Online.Food.Ordering.request;


import com.jash.Online.Food.Ordering.model.Address;
import com.jash.Online.Food.Ordering.model.ContactInformation;
import lombok.Data;

import java.util.List;

@Data
public class CreateRestaurantRequest {

    private Long id;
    private String name;
    private String discription;
    private String CuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String>images;

}
