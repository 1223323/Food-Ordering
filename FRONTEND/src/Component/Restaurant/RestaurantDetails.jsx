import React, { useState } from "react";
import {
  Divider,
  Grid,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";

// Constants for categories and food types
const categories = ["Pizza", "Biryani", "Burger", "Chicken", "Rice"];

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian Only", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];

const menu =[1]

export const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const [category, setCategory] = useState("pizza");

  // Handler for food type filter
  const handleFoodTypeFilter = (e) => {
    setFoodType(e.target.value);
    console.log("Food Type Selected: ", e.target.value);
  };

  // Handler for category filter
  const handleCategoryFilter = (e) => {
    setCategory(e.target.value);
    console.log("Category Selected: ", e.target.value);
  };

  return (
    <div className="px-5 lg:px-20 py-10 bg-gray-100">
      {/* Header Section */}
      <section>
        <Typography className="text-gray-500 py-2 mt-5 text-sm lg:text-base">
          Home / India / Indian Fast Food
        </Typography>

        <Grid container spacing={4} className="mt-4">
          <Grid item xs={12}>
            <img
              className="w-full h-[40vh] object-cover rounded-lg shadow-lg"
              src="https://imgs.search.brave.com/jBaazkVdqbfE-64eNUGnwmoltmbvd9WzIbxJJiLkZMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL0hw/WndOS0VxYV9pWVRQ/TGhYQnFfQTFIZVJM/OHoyLS1xUXphOW1Q/dDBLUGl6aXB4UWsw/RUtILW1rX2tDX2hH/eE9iVmh3d2xiZ0lR/TTE4SUxoSW1EUFNu/UXdfcGRWM25rRmN0/QTR2Nnc9aDQ1MC1y/dw.jpeg"
              alt="Restaurant Overview"
            />
          </Grid>
        </Grid>

        {/* Restaurant Info */}
        <div className="pt-6 pb-10">
          <Typography variant="h4" className="text-gray-800 font-semibold">
            Indian Fast Food
          </Typography>
          <Typography className="mt-3 text-lg text-gray-600 leading-relaxed">
            Craving it all? Dive into our global flavors, from vibrant Indian
            cuisine to delicious South Indian dishes.
          </Typography>

          <div className="mt-5">
            <Typography className="text-gray-600 flex items-center gap-3 text-lg">
              <LocationOnIcon className="text-red-500" /> 234 Main Street, New
              York, NY 10001
            </Typography>
            <Typography className="text-gray-600 flex items-center gap-3 text-lg mt-2">
              <CalendarTodayIcon className="text-blue-500" /> Open from 11:00 AM
              to 11:00 PM, Mon-Sat
            </Typography>
          </div>
        </div>
      </section>

      <Divider className="my-6"
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.2)", // Default light black color
          height: 3, // Thickness of the divider
          transition: "all 0.3s ease", // Smooth transition for all effects
          borderRadius: "10px", // Rounded corners for a softer look
          "&:hover": {
            bgcolor: "rgba(0, 0, 0, 0.5)", // Darker on hover
            transform: "scaleX(1.3)", // More noticeable expansion on hover
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)", // Stronger shadow when hovered
          },
        }}
      />

      {/* Menu Section */}
      <section className="pt-8 flex flex-col lg:flex-row">
        {/* Filter Section */}
        <div className="space-y-10 lg:w-1/4 px-4 shadow-md">
          <Typography variant="h5" className="text-gray-700">
            Food Type
          </Typography>
          <FormControl>
            <RadioGroup
              value={foodType}
              onChange={handleFoodTypeFilter}
              className="text-gray-700"
            >
              {foodTypes.map((item) => (
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  control={
                    <Radio
                      sx={{
                        color: "gray",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label={item.label}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <Divider className="my-6"
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.2)", // Default light black color
          height: 3, // Thickness of the divider
          transition: "all 0.3s ease", // Smooth transition for all effects
          borderRadius: "10px", // Rounded corners for a softer look
          "&:hover": {
            bgcolor: "rgba(0, 0, 0, 0.5)", // Darker on hover
            transform: "scaleX(1.3)", // More noticeable expansion on hover
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)", // Stronger shadow when hovered
          },
        }}
      />

          {/* Category Section */}
          <Typography variant="h5" className="text-gray-700 mt-10">
            Food Category
          </Typography>
          <FormControl>
            <RadioGroup
              value={category}
              onChange={handleCategoryFilter}
              className="text-gray-700"
            >
              {categories.map((item) => (
                <FormControlLabel
                  key={item}
                  value={item.toLowerCase()}
                  control={
                    <Radio
                      sx={{
                        color: "gray",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label={item}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>

        {/* Menu Items Section */}
        <div className="space-y-5 lg:w-[80%] lg:pl-10">

              {menu.map((item)=><MenuCard/>)}

        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
