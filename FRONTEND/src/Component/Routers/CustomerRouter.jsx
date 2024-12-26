import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Home from "../Home/Home";
import { Cart } from "../Cart/Cart";
import { RestaurantDetails } from "../Restaurant/RestaurantDetails";
import { Auth } from "../Auth/Auth";
import RegisterForm from "../Auth/RegisterForm";
import LoginForm from "../Auth/LoginForm";

export const CustomerRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/login" element={<LoginForm />} />
        <Route path="/account/register" element={<RegisterForm />} />
        <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
        <Route path="/RestaurantDetails" element={<RestaurantDetails />} />
      </Routes>
      <Auth />
    </div>
  );
};

export default CustomerRouter;