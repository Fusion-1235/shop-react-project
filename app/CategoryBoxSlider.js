'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaShareAlt, FaRegCommentDots } from 'react-icons/fa';

const products = [
  { id: 1, describe: "۵ روش برای طعم‌دار کردن قهوه بدون شکر", image: '/images/Food-Guide-Coffee-Syrups-Feature.jpg' },
  { id: 2, describe: "آیا قهوه می‌تونه از دیابت نوع ۲ جلوگیری کنه؟", image: '/images/can-coffee-prevent-type-2-diabet.jpg' },
  { id: 3, describe: "راهنمای خرید قهوه برای تازه‌کارها", image: '/images/7106QmovJxL-2048x1366.jpg' },
  { id: 4, describe: "نوشیدنی‌های قهوه‌ای برای روزهای سرد", image: '/images/HCG_2_900x.jpg' },
  { id: 5, describe: "تفاوت عطر و طعم قهوه‌های طعم‌دار", image: '/images/foodie-flavours-ULDZW3EVgDE-unsp.jpg' },
  { id: 6, describe: "قهوه ایلی یا لاوازا؟ مقایسه کامل برندها", image: '/images/Illy-vs-Lavazza-¿Que-cafe-italia.jpg' },
  { id: 7, describe: "نقشه جهانی قهوه تخصصی: هر کشور چه قهوه‌ای دارد؟", image: '/images/world_Specialty-Coffee_Map-1024x.jpg' },
  { id: 8, describe: "۸ کاربرد ماسک قهوه برای زیبایی پوست و طرز تهیه خانگی", image: '/images/coffee-face-masks-cover.jpg' },
];

export default function ProductSlider() {
  const settings = {
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1 } }],
    centerMode: false,
  };

  return (
    <div className="w-[88.5%] lg:w-[84.5%] mx-auto py-10">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-[3%]">
            <div className="relative bg-white text-black rounded-xl border border-zinc-200 h-[380px] flex flex-col justify-between cursor-pointer select-none overflow-hidden text-right">
              
              {/* تصویر */}
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.describe}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover rounded-t-xl"
                  draggable={false}
                />
                
                {/* نوشته پایین وسط عکس */}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-xs py-[2px] rounded-t-md">
                  دانستنی‌های قهوه
                </span>
              </div>

              {/* توضیح و نویسنده و ادامه مطلب */}
              <div className="p-3 flex flex-col flex-1 justify-between">
                
                {/* توضیح */}
                <p className="text-xl font-semibold p-3 leading-6 line-clamp-3">{product.describe}</p>
                
                {/* نویسنده و آیکون‌ها */}
                <div className="flex items-center m-auto justify-end gap-2 text-[12px] text-gray-600 mb-2">
                  <FaRegCommentDots className="text-gray-500" />
                  <FaShareAlt className="text-gray-500" />
                  <span>فرشته نوری</span>
                </div>

                {/* ادامه مطلب */}
                <div className="mt-auto text-center">
                  <span className="text-blue-600 font-medium text-sm">ادامه مطلب</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
