package com.jash.Online.Food.Ordering.repository;

import com.jash.Online.Food.Ordering.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
