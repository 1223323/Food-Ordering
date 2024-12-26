import React from "react";
import RestaurantCard from "../Restaurant/RestaurantCard";

export default function Favorites() {
  // Sample data - replace with actual favorites data

  return (
    <div>
      <h1 className="py-5 text-2xl font-semibold text-center text-gray-800">
        My Favorites
      </h1>

      <div className="flex flex-wrap gap-5 justify-center">
        {[1, 1, 1].map((item) => (
          <RestaurantCard />
        ))}
      </div>
    </div>
  );
}
