import React from "react";
import { Card, Chip, Typography, Button } from "@mui/material";
import { AccessTime, LocationOn, Restaurant } from "@mui/icons-material";

export const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5 ">
      {/* Left Section - Image and Basic Info */}
      <div className="flex items-center space-x-5 ">
        <img
          className="h-16 w-16 "
          src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
          alt="Biryani"
        />
        <div>
          <p>Biryani</p>
          <p>$399</p>
        </div>
      </div>
      <button className="cursor-not-allowed">View</button>
    </Card>
  );
};
