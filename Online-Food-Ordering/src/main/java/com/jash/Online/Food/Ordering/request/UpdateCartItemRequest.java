package com.jash.Online.Food.Ordering.request;


import lombok.Data;

@Data
public class UpdateCartItemRequest {

    private Long cartItemId;

    private Long quantity;
}
