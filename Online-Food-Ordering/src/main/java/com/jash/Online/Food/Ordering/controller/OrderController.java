package com.jash.Online.Food.Ordering.controller;


import com.jash.Online.Food.Ordering.model.CartItem;
import com.jash.Online.Food.Ordering.model.Orders;
import com.jash.Online.Food.Ordering.model.User;
import com.jash.Online.Food.Ordering.request.AddCartItemRequest;
import com.jash.Online.Food.Ordering.request.OrderRequest;
import com.jash.Online.Food.Ordering.service.OrderService;
import com.jash.Online.Food.Ordering.service.UserService;
import jakarta.persistence.criteria.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {


    @Autowired
    private OrderService orderService;


    @Autowired
    private UserService userService;

    @PostMapping("/order")
    public ResponseEntity<Orders> createOrder(@RequestBody OrderRequest req,
                                              @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Orders orders = orderService.createOrder(req, user);

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @PutMapping("/order/{id}/{orderStatus}")
    public ResponseEntity<List<Orders>> updateOrderStatus(@PathVariable Long id,
                                                        @RequestParam(required = false) String order_status,
                                                        @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        List<Orders> orders=orderService.getRestaurantOrder(id, order_status);

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
