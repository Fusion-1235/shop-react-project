"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = [
  {
    image: "/images/بنر-5.jpg",
  },
  {
    image: "/images/بنر-6.jpg",
  },
  {
    image: "/images/بنر4.jpg",
  },
];

const MainBannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="main-banner-slider relative overflow-hidden">
      <Slider {...settings}>
        {banners.map((item, index) => (
          <div key={index} className="relative">
            <Image
              src={item.image}
              alt={item.title}
              width={1200}
              height={600}
              className="m-auto object-cover"
              priority
            />
            <div className="absolute top-1/3 right-10 text-white z-10">
              <h2 className="text-2xl mb-2">{item.subtitle}</h2>
              <h1 className="text-4xl font-bold">{item.title}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainBannerSlider;
