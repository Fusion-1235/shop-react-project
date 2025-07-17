'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const productsData = {
  "جدید ترین محصولات": [
    { id: 1, name: 'لیوان استیل مشکی', price: '1,550,000 تومان', image: '/images/3-3-1.jpg' },
    { id: 2, name: 'استنلی لیوان طوسی', price: '1,600,000 تومان', image: '/images/7-2-2.jpg' },
    { id: 3, name: 'فلاسک استنلی سبز', price: '3,000,000 تومان', image: '/images/11-2-1.jpg' },
  ],
  "پرفروش ترین محصولات": [
    { id: 4, name: 'شمع نسسو', price: '2,000,000 تومان', image: '/images/GOLD-INSTANT-MELO.webp' },
    { id: 5, name: 'فنجان اسپرسو مشکی', price: '3,450,000 تومان', image: '/images/MASALA-TEA-MELO.webp' },
  ],
  "قهوه های ملو": [],
  "قهوه ساز ها": [],
  "لوازم جانبی": [],
};

const tabNames = [
  'محصولات',
  'جدید ترین محصولات',
  'پرفروش ترین محصولات',
  'قهوه های ملو',
  'قهوه ساز ها',
  'لوازم جانبی',
];

export default function ProductTabsSlider() {
  const [activeTab, setActiveTab] = useState('جدید ترین محصولات');

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-[83%] max-w-[1400px] mx-auto mt-8" dir="rtl">
      
      {/* تب‌ها */}
      <div className="flex flex-wrap gap-2 justify-start mb-4 border-b border-gray-200">
        {tabNames.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              if (tab !== 'محصولات') setActiveTab(tab);
            }}
            className={`px-3 py-1.5 text-sm font-semibold rounded-t-lg transition-all
              ${tab === 'محصولات' ? 'text-gray-400 cursor-default' : ''}
              ${activeTab === tab && tab !== 'محصولات' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500 hover:text-orange-500'}
            `}
            disabled={tab === 'محصولات'}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* نمایش محصولات */}
      {productsData[activeTab] && productsData[activeTab].length > 0 ? (
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
        >
          {productsData[activeTab].map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl overflow-hidden p-4 flex flex-col h-full">
                
                
                {/* تصویر محصول بزرگ‌تر شده */}
                <div className="w-full mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[100%] object-contain rounded-2xl"
                  />
                </div>

                {/* نام محصول */}
                <h3 className="text-sm sm:text-base font-semibold text-center mb-2">
                  {item.name}
                </h3>

                {/* وضعیت موجودی */}
                <div className="flex items-center justify-center gap-1 text-xs sm:text-sm text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>موجود در انبار</span>
                </div>

                {/* قیمت */}
                <p className="text-center text-sm sm:text-base text-gray-800 mb-3">
                  {item.price}
                </p>

                {/* دکمه افزودن */}
                <button className="bg-[#4d3227] w-[90%] text-white text-sm sm:text-base py-2 rounded-full hover:bg-[#7a4a37] transition mx-auto mt-auto">
                  افزودن به سبد خرید
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center text-gray-500 py-8">
          محصولی برای نمایش موجود نیست.
        </div>
      )}
    </div>
  );
}
