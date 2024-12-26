import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import topMeals from "./TopMeals";
import CarouselItem from "./CarouselItem";

const CustomPrevArrow = ({ onClick }) => (
    <button
        className="absolute left-[-50px] z-10 bg-gray-700 text-white rounded-full w-10 h-10 flex justify-center items-center top-1/2 -translate-y-1/2 shadow-md hover:bg-black transition duration-300"
        onClick={onClick}
        aria-label="Previous"
    >
        ◀
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        className="absolute right-[-50px] z-10 bg-gray-700 text-white rounded-full w-10 h-10 flex justify-center items-center top-1/2 -translate-y-1/2 shadow-md hover:bg-black transition duration-300"
        onClick={onClick}
        aria-label="Next"
    >
        ▶
    </button>
);

const MultiItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="multi-item-carousel container mx-auto py-10 relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-800">
                Our Top Meals
            </h2>
            <div className="relative">
                <Slider {...settings}>
                    {topMeals.map((item, index) => (
                        <div key={index} className="carousel-item-wrapper px-4">
                            <CarouselItem image={item.image} title={item.title} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MultiItemCarousel;