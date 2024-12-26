import React from "react";

const CarouselItem = ({ image, title }) => {
    return (
        <div className="flex flex-col justify-center items-center p-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg">
            {/* Circular Image */}
            <div className="w-[10rem] h-[10rem] lg:h-[14rem] lg:w-[14rem] rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                <img
                    className="w-full h-full object-cover object-center "
                    src={image}
                    alt={title}
                    loading="lazy"
                />
            </div>
            {/* Title */}
            <span className="py-5 font-semibold text-xl text-gray-700 text-center">
                {title}
            </span>
        </div>
    );
};

export default CarouselItem;