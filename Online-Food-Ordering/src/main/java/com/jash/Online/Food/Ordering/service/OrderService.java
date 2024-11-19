package com.jash.Online.Food.Ordering.service;

import com.jash.Online.Food.Ordering.model.Orders;
import com.jash.Online.Food.Ordering.model.User;
import com.jash.Online.Food.Ordering.request.OrderRequest;
import jakarta.persistence.criteria.Order;
import org.aspectj.weaver.ast.Or;

import java.util.List;

public interface OrderService {

    public Orders createOrder(OrderRequest orders, User user) throws Exception;

    public Orders updateOrder(Long orderId, String orderStatus) throws Exception;

    public  void cancleOrder(Long orderId) throws Exception;

    public List<Orders> getUsersOrders(Long userId) throws Exception;

    public List<Orders> getRestaurantOrder(Long restaurantId , String orderStatus ) throws Exception;

    public Orders findOrderById(Long orderId) throws Exception;

}
