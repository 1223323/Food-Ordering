package com.jash.Online.Food.Ordering.service;

import com.jash.Online.Food.Ordering.model.*;
import com.jash.Online.Food.Ordering.repository.AddressRepository;
import com.jash.Online.Food.Ordering.repository.OrderItemRepository;
import com.jash.Online.Food.Ordering.repository.OrderRepository;
import com.jash.Online.Food.Ordering.repository.UserRepository;
import com.jash.Online.Food.Ordering.request.OrderRequest;
import jakarta.persistence.criteria.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class OrderServiceImp implements OrderService {


    @Autowired
    private OrderRepository orderRepository;


    @Autowired
    private UserRepository userRepository;


    @Autowired
    private UserService userService;


    @Autowired
    private OrderItemRepository orderItemRepository;


    @Autowired
    private AddressRepository addressRepository;


    @Autowired
    private RestaurantService restaurantService;


    @Autowired
    private CartService cartService;


    @Override
    public Orders createOrder(OrderRequest orders, User user) throws Exception {
        Address shippingAddress = orders.getDeliveryAddress();

        Address savedAddress = addressRepository.save(shippingAddress);

        if (!user.getAddress().contains(savedAddress)) {
            user.getAddress().add(savedAddress);
            userRepository.save(user);
        }

        Restaurant restaurant = restaurantService.findRestaurantById(orders.getRestaurantId());

        Orders createdOrder = new Orders();

        createdOrder.setCustomer(user);
        createdOrder.setCreatedAt(new Date());
        createdOrder.setDeliveryAddress(savedAddress);
        createdOrder.setRestaurant(restaurant);
        createdOrder.setOrderStatus("PENDING");

        Cart cart = cartService.findCartByUserId(user.getId());


        List<OrderItem> orderItems = new ArrayList<>();

        for (CartItem cartItem : cart.getItem()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setFood((Food) cartItem.getFoods());
            //orderItem.setIngredients(cartItem.getIngredients());
            orderItem.setTotalPrice(cartItem.getTotalPrice());

            OrderItem savedOrderItem = orderItemRepository.save(orderItem);
            orderItems.add(savedOrderItem);


        }

        Long totalPrice = cartService.calculateCartTotals(cart);

        createdOrder.setItem(orderItems);
        createdOrder.setTotalPrice(cart.getTotal());

        Orders savedOrder = orderRepository.save(createdOrder);

        restaurant.getOrders().add(savedOrder);


        return createdOrder;
    }

    @Override
    public Orders updateOrder(Long orderId, String orderStatus) throws Exception {
       Orders orders=findOrderById(orderId);

        if(orderStatus.equals("OUT_FOR_DELIVERY")
                ||orderStatus.equals("DELIVERED")
                ||orderStatus.equals("COMPLETED")
                ||orderStatus.equals("PENDING")
        ) {
            orders.setOrderStatus(orderStatus);
            return orderRepository.save(orders);
        }
        throw new Exception("Please select valid order status");
    }



    @Override
    public void cancleOrder(Long orderId) throws Exception {
        Orders orders = findOrderById(orderId);
        orderRepository.delete(orders);
    }

    @Override
    public List<Orders> getUsersOrders(Long userId) throws Exception {
       return orderRepository.findByCustomerId(userId);
    }

    @Override
    public List<Orders> getRestaurantOrder(Long restaurantId, String orderStatus) throws Exception {
        List<Orders> orders = orderRepository.findByRestaurantId(restaurantId);
        if(orderStatus!=null){
            orders=orders.stream().filter(order->
                    order.getOrderStatus().equals(orderStatus)).collect(Collectors.toList());
        }

        return orders;
    }

    @Override
    public Orders findOrderById(Long orderId) throws Exception {
        Optional<Orders> orders = orderRepository.findById(orderId);
        if(orders.isEmpty()) {
            throw new Exception("Order not found");
        }
        return orders.get();
    }
}
