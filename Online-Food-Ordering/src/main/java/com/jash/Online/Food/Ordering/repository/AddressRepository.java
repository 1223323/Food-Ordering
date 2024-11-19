package com.jash.Online.Food.Ordering.repository;

import com.jash.Online.Food.Ordering.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository  extends JpaRepository<Address, Long> {
}
