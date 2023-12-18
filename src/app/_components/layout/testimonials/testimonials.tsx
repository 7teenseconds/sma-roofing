'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { testimonialsarray } from "./testimonials-content";

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        centerMode: true,
        centerPadding: "0",
    };

    const calculateStars = (rating = 5) => {
        const starsRating = new Array(rating).fill("⭐");
        return starsRating;
    };



    const counttestimonials = testimonialsarray.length;

    return (
        <div className="w-full max-w-sm md:max-w-3xl h-full relative text-center my-4 py-6 bg-[#154992]">

            <Slider
                {...settings}
                className="z-10 absolute flex flex-col items-center transform -translate-x-1/2  text-white left-1/2 text-center"
            >
                {testimonialsarray.map((testimonial) => (
                    <div className="z-10 secondary text-white text-lg mt-12" key={testimonial.name}>
                        <div className="mx-auto flex max-w-xs md:max-w-4xl lg:max-w-4xl xl:max-w-4xl "><p className="flex">"{testimonial.testimonial}"</p></div>

                        <p className="pt-6 text-3xl">{calculateStars(testimonial.stars)}</p>

                        <p className="pt-6 text-2xl">
                            {testimonial.name}
                        </p>
                    </div>
                ))}
            </Slider>
            <Image
                className="flex h-[430px] object-cover object-center md:h-[661px]"
                src="/images/background-testimonial.png"
                fill
                alt="background image for testimonials"
            />
        </div>
    );
}