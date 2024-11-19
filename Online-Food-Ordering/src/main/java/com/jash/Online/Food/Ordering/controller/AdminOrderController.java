package com.jash.Online.Food.Ordering.controller;


import com.jash.Online.Food.Ordering.model.Orders;
import com.jash.Online.Food.Ordering.model.User;
import com.jash.Online.Food.Ordering.request.OrderRequest;
import com.jash.Online.Food.Ordering.service.OrderService;
import com.jash.Online.Food.Ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminOrderController {

    @Autowired
    private OrderService orderService;


    @Autowired
    private UserService userService;

    @GetMapping("/order/restaurant/{id}")
    public ResponseEntity<List<Orders>> getOrderHistory(@PathVariable Long id,
                                                        @RequestParam(required = false) String order_status,
                                                        @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        List<Orders> orders=orderService.getRestaurantOrder(id, order_status);

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

}
