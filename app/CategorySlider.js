"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const categories = [
  { name: "قهوه فرانسه", icon: "/images/coffee-french-e1745587263179-150x150.webp", href: "/category/french" },
  { name: "قهوه موکاپات", icon: "/images/coffee-mokapot-e1745587219366-150x150.webp", href: "/category/moka" },
  { name: "قهوه فرنچ پرس", icon: "/images/frenchpress-coffee-e1745587154471.webp", href: "/category/frenchpress" },
  { name: "قهوه اسپرسو", icon: "/images/espresso-coffee-e1745587071206-150x150.webp", href: "/category/espresso" },
  { name: "قهوه ترک", icon: "/images/coffee-turkish-e1745587018353-150x150.webp", href: "/Header/DesktopHeader/TurkishCoffee" },
  { name: "قهوه فوری", icon: "/images/coffee-instant-e1745587407933-150x150.webp", href: "/category/instant" },
  { name: "کپسول قهوه", icon: "/images/coffee-capsules-e1745587363245-150x150.webp", href: "/category/capsule" },
  { name: "قهوه دمی", icon: "/images/coffee-pour-over-e1745587307817-150x150.webp", href: "/category/capsule" },
];

const CategorySlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    swipeToSlide: true,
    variableWidth: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, speed: 500 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, speed: 500 },
      },
    ],
  };

  return (
    <div className="category-slider py-11 px-[10%] ">
      <Slider {...settings}>
        {categories.map((cat, index) => (
          <div key={index} className="text-center px-2 sm:px-3 md:px-4">
            <Link href={cat.href}>
              <div className="cursor-pointer">
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  width={90}
                  height={90}
                  className="mx-auto rounded-full"
                />
                <p className="mt-2 text-xs sm:text-sm md:text-base">{cat.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
