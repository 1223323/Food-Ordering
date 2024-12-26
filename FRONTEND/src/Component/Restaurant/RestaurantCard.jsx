import React from "react";
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RestaurantCard = () => {
    return (
        <Card className="m-3 w-[18rem] lg:w-[20rem] shadow-lg rounded-lg transform transition-transform duration-200 hover:shadow-xl hover:scale-105">
            <div className={`relative ${true ? "cursor-pointer" : "cursor-not-allowed"}`}>
                <img
                    className="w-full h-[12rem] rounded-t-lg object-cover"
                    src="https://imgs.search.brave.com/jBaazkVdqbfE-64eNUGnwmoltmbvd9WzIbxJJiLkZMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL0hw/WndOS0VxYV9pWVRQ/TGhYQnFfQTFIZVJM/OHoyLS1xUXphOW1Q/dDBLUGl6aXB4UWsw/RUtILW1rX2tDX2hH/eE9iVmh3d2xiZ0lR/TTE4SUxoSW1EUFNu/UXdfcGRWM25rRmN0/QTR2Nnc9aDQ1MC1y/dw.jpeg"
                    alt="Delicious Food"
                />
                <Chip
                    size="small"
                    className="absolute top-2 left-2 bg-green-600 bg-opacity-90 text-white text-xs font-semibold shadow-md"
                    color={true ? "success" : "error"}
                    label={true ? "Open" : "Closed"}
                />
            </div>
            <div className="p-4 flex flex-col lg:flex-row lg:justify-between items-start lg:items-center w-full">
                <div className="space-y-1">
                    <p className="font-semibold text-lg text-white">Indian Fast Food</p>
                    <p className="text-gray-100 text-sm">
                        Craving it all? Dive into our global fla...
                    </p>
                </div>
                <div className="mt-3 lg:mt-0 flex-shrink-0">
                    <IconButton
                        className="hover:bg-red-100 transition-all duration-300 p-2 rounded-full"
                        aria-label="like"
                    >
                        {true ? (
                            <FavoriteIcon className="text-red-500" />
                        ) : (
                            <FavoriteBorderIcon className="text-gray-400" />
                        )}
                    </IconButton>
                </div>
            </div>
        </Card>
    );
};

export default RestaurantCard;