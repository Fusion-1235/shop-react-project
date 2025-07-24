"use client";

import { useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

// داده‌های محصولات
const products = [
  { image: "/images/arpeggio-ispirazione-nespresso-capsule.webp" , name: "کپسول اسپرسو", price: 30000, rating: 5 },
  { image: "/images/aluminium-foil-lid-480x480.jpg" , name: "کپسول لانگو", price: 32000, rating: 4 },
  { image: "/images/volutto-کپسول-نسپرسو-550x550.jpg" , name: "نسپرسو آرپجو", price: 28000, rating: 4 },
  { image: "/images/Resterittoکپسول-نسپرسو-550x550.jpg", name: "قهوه رسترتو", price: 31000, rating: 4 },
  { image: "/images/5a.jpg", name: "پودر نسکافه", price: 27000, rating: 4 },
];

// تابع نمایش ستاره‌ها
const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <>
      {[...Array(full)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-yellow-400" />
      ))}
      {half && <FaStarHalfAlt className="text-yellow-400" />}
      {[...Array(empty)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-gray-300" />
      ))}
    </>
  );
};

// کارت محصول
const ProductCard = ({ image, name, price, rating }) => (
  <div className="bg-white rounded-lg shadow p-4 text-center h-full">
    <div className="relative w-full h-32 mb-2">
      <Image src={image} alt={name} fill className="object-contain" />
    </div>
    <p className="text-black text-sm">{name}</p>
    <div className="flex justify-center mt-1">{renderStars(rating)}</div>
    <div className="flex justify-center text-sm mt-1">✔ موجود در انبار</div>
    <p className="text-black text-sm mt-2">{price.toLocaleString("fa-IR")} تومان</p>
    <button className="mt-2 bg-[#4d3227] hover:bg-[#7a4a37] transition duration-300 text-white text-sm px-[20%] py-1 rounded-full">افزودن</button>
  </div>
);
// اسلایدر محصولات راست‌چین
const ProductSlider = () => {
  const sliderRef = useRef();

  const settings = {
    rtl: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
    variableWidth: false,
    centerMode: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } }
    ],
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(products.length - 1);
    }
  }, []);

  return (
    <div className="w-full">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-2" style={{ width: 252 }}>
            <div className="h-full">
              <ProductCard {...product} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// داده‌های بنرها
const banners = [
  {
    image: "/images/melo-barista-coffee-original-550x825.jpg",
    title: "قهوه ملو مدل ۵۰ درصد عربیکا، ۵۰ درصد روبوستا Barista (۲۵۰ گرمی)",
    inStock: true,
    rating: 5,
  },
  {
    image: "/images/amora1.webp",
    title: "بنر دوم با توضیح متفاوت برای قهوه مخصوص",
    inStock: false,
    rating: 4.5,
  },
  {
    image: "/images/amora-coffee-melo-original-550x825.jpg",
    title: "بنر سوم با توضیحی متفاوت و خاص",
    inStock: true,
    rating: 4,
  },
];

// کامپوننت بنر
const BannerSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: false,
    slidesToShow: 1,
    arrows: true,
    autoplaySpeed: 4000,
  };

return (
  <div className="w-[90%] bg-white rounded-lg shadow overflow-hidden mx-auto">
    <Slider {...settings}>
      {banners.map((banner, idx) => (
        <div key={idx} className="block">
          <div className="relative mt-7 mx-auto w-[80%] aspect-[2/3] overflow-hidden rounded-lg">
            <Image
              src={banner.image}
              alt={`banner-${idx}`}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <div className="p-4 text-sm text-center">
            <p className="font-medium leading-6 text-sm">{banner.title}</p>
            <p
              className={`text-xs mt-2 ${
                banner.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {banner.inStock ? "✔ موجود در انبار" : "ناموجود"}
            </p>
            <div className="flex items-center gap-1 mt-2 justify-center">
              {renderStars(banner.rating)}
            </div>
            <button className="mt-2 bg-[#4d3227] hover:bg-[#7a4a37] transition duration-300 text-white text-sm px-[30%] py-1 rounded-full">
              افزودن
            </button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);
};

// کامپوننت نهایی همه اسلایدرها
const AllSliders = () => {
  return (
    <div
      className="flex m-auto flex-col gap-10 pb-16 overflow-x-hidden"
      dir="rtl"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* ستون بنر */}
        <div className="w-full lg:w-[21%] py-8 flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-center">محبوب‌ترین‌ها</h2>
          <BannerSlider />
        </div>

        {/* ستون محصولات */}
        <div className="w-full lg:w-[78%] mt-[35px]">
          <ProductSlider />
        </div>
      </div>
    </div>
  );
};

export default AllSliders;
