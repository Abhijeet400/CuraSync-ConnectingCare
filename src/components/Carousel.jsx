import React, { useState, useEffect, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousel = () => {
    const images = [
        "/assets/images/Carousel1.jpg",
        "/assets/images/Carousel2.jpg",
        "/assets/images/Carousel3.jpg",
        "/assets/images/Carousel4.jpg",
        "/assets/images/Carousel5.jpg",
        "/assets/images/Carousel6.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);
    const startXRef = useRef(0);
    const diffRef = useRef(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        resetAutoSlide();
        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex]);

    const resetAutoSlide = () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            nextSlide();
        }, 5000); // 5 seconds delay
    };

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Handle drag start
    const handleTouchStart = (e) => {
        startXRef.current = e.touches ? e.touches[0].clientX : e.clientX;
    };

    // Handle drag movement
    const handleTouchMove = (e) => {
        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        diffRef.current = startXRef.current - currentX;
    };

    // Handle drag end
    const handleTouchEnd = () => {
        if (diffRef.current > 50) {
            nextSlide(); // Dragged left, go to the next slide
        } else if (diffRef.current < -50) {
            prevSlide(); // Dragged right, go to the previous slide
        }
        diffRef.current = 0;
    };

    return (
        <section
            className="w-auto h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] relative group my-3 mx-3"
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
                className="w-full h-full rounded-lg bg-center bg-cover object-cover duration-500 ease-out transition-transform"
            ></div>

            {/* Left Arrow */}
            <div
                className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                onClick={prevSlide}
            >
                <BsChevronLeft size={15} />
            </div>

            {/* Right Arrow */}
            <div
                className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                onClick={nextSlide}
            >
                <BsChevronRight size={15} />
            </div>

            {/* Indicators */}
            <div className="flex justify-center py-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${index === currentIndex ? "bg-gray-600" : "bg-gray-500"
                            }`}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Carousel;
