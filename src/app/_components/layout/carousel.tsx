"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Slider from "react-slick";


type Props = {
    content: {
        url: string;
    }[];
    space?: boolean;
};

const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
};


export default function Carousel({ content }: Props) {
    return (


        <div className="inline-block w-full max-w-2xl">
            <Slider
                {...settings}
                className="z-10 absolute flex flex-col items-center transform -translate-x-1/2  text-white left-1/2 text-center"
            >
                {content.map((item) => (
                    <Image
                        key={Math.random()}
                        src={item.url}
                        alt=""
                        width={437}
                        height={397}
                        className="h-auto  max-w-sm rounded-3xl px-4 py-4 sm:max-w-full"
                        priority
                    />
                ))}
            </Slider>
        </div>

    );
}
