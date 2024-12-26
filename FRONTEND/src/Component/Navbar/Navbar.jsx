import React, { useState } from "react";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(3); // Dynamic badge count
  const isAuthenticated = false; // Replace this with real authentication logic

  return (
    <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#182639] lg:px-20 flex justify-between">
      {/* Logo Section */}
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li
          className="logo font-semibold text-white text-2xl"
          onClick={() => navigate("/")}
        >
          DineDash
        </li>
      </div>

      {/* Action Buttons Section */}
      <div className="flex items-center space-x-2 lg:space-x-10">
        {/* Search Button */}
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>

        {/* Profile Button */}
        <div>
          {isAuthenticated ? (
            <Avatar sx={{ bgcolor: "#FFFFFF", color: "#182639" }}>J</Avatar>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <PersonIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          )}
        </div>

        {/* Cart Button */}
        <div>
          <IconButton onClick={() => navigate("/cart")}>
            <Badge color="secondary" badgeContent={cartItemCount}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default Navbar;