'use client';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  { id: 1, title: 'قهوه سانتاگرو', price: '195,000 تومان', image: '/images/starbucks-breakfast-blend-capsule.webp' },
  { id: 2, title: 'چای علی تی', price: '490,000 تومان', image: '/images/lavazza-egusto-classico.webp' },
  { id: 3, title: 'قهوه نسکافه دکف', price: '630,000 تومان', image: '/images/segafredo-1kg-caffe-crema-gustoso.webp' },
  { id: 4, title: 'قهوه برزیلی', price: '195,000 تومان', image: '/images/bourbon-caffe-intenso-vending.webp' },
  { id: 5, title: 'کپسول لاواتزا', price: '960,000 تومان', image: '/images/karak-tea-2.webp' },
];

const toPersianNumber = (num) => {
  return num.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
};

const getDiscountedPrice = (priceStr) => {
  const plainNumber = parseInt(priceStr.replace(/[^۰-۹0-9]/g, '').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));
  const discounted = Math.floor(plainNumber * 0.85); // ۱۵٪ تخفیف
  return toPersianNumber(discounted.toLocaleString()) + ' تومان';
};

export default function SaleSlider() {
  const [timeLeft, setTimeLeft] = useState(5184288);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hrs = Math.floor((seconds % (3600 * 24)) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return (
      <div
        className="flex flex-col flex-wrap md:flex-row md:items-center gap-4 justify-center text-white text-sm"
        dir="rtl"
      >
        <span className="text-base text-center font-medium whitespace-nowrap">
          زمان باقی‌مانده:
        </span>
        <div className="flex flex-wrap md:flex-nowrap gap-2 text-center">
          <div className="w-10">
            <div className="text-xl">{toPersianNumber(days)}</div>
            <div>روز</div>
          </div>
          <div className="w-10">
            <div className="text-xl">{toPersianNumber(hrs)}</div>
            <div>ساعت</div>
          </div>
          <div className="w-10">
            <div className="text-xl">{toPersianNumber(mins)}</div>
            <div>دقیقه</div>
          </div>
          <div className="w-10">
            <div className="text-xl">{toPersianNumber(secs)}</div>
            <div>ثانیه</div>
          </div>
        </div>
      </div>
    );
  };

  const settings = {
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2 } }],
    centerMode: false,
  };

  return (
    <div
      className="relative rounded-2xl mx-auto text-white px-4 text-center overflow-visible min-h-[420px] md:min-h-[320px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Frame-289-1.jpg')" }}
    >
      {/* متن‌ها با z-index بالا */}
      <div
        className="flex flex-col md:mb-[20px] md:flex-row gap-0 md:gap-3.5 relative z-10 justify-center flex-wrap md:flex-nowrap items-center"
        dir="rtl"
      >
        {/* ستون راست: عنوان */}
        <div className="flex-1 text-right">
          <h2 className="text-2xl font-bold hidden md:block text-center mb-4 text-[30px]">
            با ملو کافی حراجی بخر
          </h2>
        </div>

        {/* ستون وسط: عکس فیکس و کمی بیرون زده از بالا */}
        <div className="shrink-0 relative h-[107px] w-[200px] overflow-visible">
          <Image
            src="/images/Group-243-2.png"
            width={200}
            height={100}
            alt="decoration"
            className="absolute left-0 top-[-1px] object-contain"
          />
        </div>

        {/* ستون چپ: تایمر */}
        <div className="flex-1 mb-4 text-left">{formatTime(timeLeft)}</div>
      </div>

      {/* اسلایدر پایین و پشت متن‌ها */}
      <div className="absolute left-0 right-0 px-4 z-0">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="relative bg-white text-black rounded-xl p-4 shadow-md h-[380px] flex flex-col justify-between">
                {/* نشان حراج */}
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
                  حراج!
                </span>

                {/* عکس بزرگ‌تر */}
                <Image
                  src={product.image}
                  alt={product.title}
                  width={180}
                  height={1800}
                  className="mx-auto h-56 object-contain"
                />

                {/* اطلاعات محصول */}
                <div className="">
                  <h3 className="text-sm font-semibold mb-1 text-center">{product.title}</h3>

                  {/* موجود در انبار */}
                  <div className="flex items-center justify-center gap-1 text-green-600 text-sm mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>موجود در انبار</span>
                  </div>

                  {/* قیمت‌ها */}
                  <div className="flex gap-2 items-center justify-center text-[13px] mt-2">
                    <span className="line-through text-gray-500">{product.price}</span>
                    <span className="font-bold">
                      {getDiscountedPrice(product.price)}
                    </span>
                  </div>

                  {/* دکمه افزودن */}
                  <button
                    className="mt-3 bg-[#4d3227] hover:bg-[#7a4a37] transition-colors text-white text-sm py-1.5 px-3 rounded-xl w-full"
                    onClick={() => console.log(`${product.title} به سبد خرید اضافه شد`)}
                  >
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
