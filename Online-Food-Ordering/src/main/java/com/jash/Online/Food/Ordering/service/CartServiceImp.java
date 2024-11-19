package com.jash.Online.Food.Ordering.service;

import com.jash.Online.Food.Ordering.model.Cart;
import com.jash.Online.Food.Ordering.model.CartItem;
import com.jash.Online.Food.Ordering.model.Food;
import com.jash.Online.Food.Ordering.model.User;
import com.jash.Online.Food.Ordering.repository.CartItemRepository;
import com.jash.Online.Food.Ordering.repository.CartRepository;
import com.jash.Online.Food.Ordering.repository.FoodRepository;
import com.jash.Online.Food.Ordering.request.AddCartItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;

@Service
public class CartServiceImp implements CartService {


    @Autowired
    private CartRepository cartRepository;


    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private FoodService foodService;

    @Autowired
    private FoodRepository foodRepository;

    @Override
    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Food foods =foodService.findFoodById(req.getFoodId());

        Cart cart = cartRepository.findByCustomerId(user.getId());


        for(CartItem cartItem : cart.getItem()){
            if(cartItem.getFoods().equals(foods)){
                Long newQuantity=cartItem.getQuantity()+req.getQuantity();
                return updateCartItemQuantity(cartItem.getId(),newQuantity);
            }
        }
        CartItem newCartItem = new CartItem();
        newCartItem.setFoods(foods);
        newCartItem.setQuantity((long) req.getQuantity());
        newCartItem.setCart(cart);
        newCartItem.setTotalPrice(req.getQuantity()*foods.getPrice());

        CartItem savedCartItem =cartItemRepository.save(newCartItem);

        cart.getItem().add(savedCartItem);

        return savedCartItem;



    }



    @Override
    public CartItem updateCartItemQuantity(Long cartItemId, Long quantity) throws Exception {
        Optional<CartItem> cartItemOptional =  cartItemRepository.findById(cartItemId);

        if(cartItemOptional.isEmpty()){
            throw new Exception("CartItem not found");
        }

        CartItem item=cartItemOptional.get();
        item.setQuantity(quantity);

        item.setTotalPrice(item.getFoods().getPrice()*quantity);



        return cartItemRepository.save(item);
    }


    @Override
    public CartItem removeItemFromCart(Long cartItemId, String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);



        Cart cart = cartRepository.findByCustomerId(user.getId());

        Optional<CartItem> cartItemOptional =  cartItemRepository.findById(cartItemId);

        if(cartItemOptional.isEmpty()){
            throw new Exception("CartItem not found");
        }

        CartItem item = cartItemOptional.get();
        cart.getItem().remove(item);

        return cartItemRepository.save(item);
    }




    @Override
    public Long calculateCartTotals(Cart cart) throws Exception {
      Long total=0L;
      for(CartItem cartItem : cart.getItem()){
          //total += cartItem.getFood().getPrice()*cartItem.getQuantity();
      }

      return total;
    }

    @Override
    public Cart findCartById(Long id) throws Exception {
       Optional<Cart> cartOptional = cartRepository.findById(id);
       if(cartOptional.isEmpty()){
           throw new Exception("CartItem not found");

       }

       return cartOptional.get();
    }

    @Override
    public Cart findCartByUserId(Long userId) throws Exception {
        //User user =userService.findUserByJwtToken(jwt);
        Cart cart = cartRepository.findByCustomerId(userId);
        cart.setTotal(calculateCartTotals(cart));
        return cartRepository.findByCustomerId(userId);
    }

    @Override
    public Cart clearCart(Long userId) throws Exception {
        //User user =userService.findUserByJwtToken(jwt);

        Cart cart = findCartByUserId(userId);
        cart.getItem().clear();
        return cartRepository.save(cart);
    }
}
