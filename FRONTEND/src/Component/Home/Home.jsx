import React from "react";
import './Home.css'; // Ensure correct path
import MultiItemCarousel from "./MultiItemCarousel";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { Auth } from "../Auth/Auth";

const restaurant = [1, 1, 1, 1, 1, 1];

export const Home = () => {
    return (
        <div className="bg-gray-50">
            {/* Banner Section */}
            <section className="banner relative flex flex-col justify-center items-center h-[50vh] lg:h-[70vh] overflow-hidden">
                <div className="w-[80vw] lg:w-[50vw] z-10 text-center">
                    <p className="text-4xl lg:text-6xl font-extrabold text-white drop-shadow-lg py-5">
                        DineDash
                    </p>
                    <p className="text-white text-lg lg:text-2xl font-medium drop-shadow-md">
                        Delivered Fresh, Delivered Fast
                    </p>
                </div>
                <div className="cover absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
                <div className="fadout"></div>
            </section>

            {/* Carousel Section */}
            <section className="p-5 lg:p-20 bg-white shadow-lg">
                <h2 className="text-3xl font-semibold text-black text-center pb-5">
                    Discover Our Best Picks
                </h2>
                <MultiItemCarousel />
            </section>


            <section className="py-10 px-5 lg:px-20 bg-gray-100">
                <h1 className="text-2xl lg:text-3xl font-semibold text-gray-700 pb-5 text-center">
                    Order from Our Handpicked Favorites
                </h1>
                <div className="flex flex-wrap items-center justify-around gap-3"> {/* Reduced gap */}
                    {restaurant.map((item, index) => (
                        <RestaurantCard key={index} />
                    ))}
                </div>
            </section>
           
        </div>
    );
};

export default Home;