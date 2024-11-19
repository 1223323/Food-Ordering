package com.jash.Online.Food.Ordering.repository;

import com.jash.Online.Food.Ordering.model.Orders;
import jakarta.persistence.criteria.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Orders, Long> {

    public List<Orders> findByCustomerId(long userId);

    public List<Orders> findByRestaurantId(long restaurantId);
}
