import Image from "next/image";

const advantages = [
  { title: 'تنوع محصول', icon: '/images/package.png.webp' },
  { title: 'پشتیبانی سریع', icon: '/images/customer-service.png.webp' },
  { title: 'تضمین کیفیت', icon: '/images/quality.png.webp' },
  { title: 'جشنواره‌های فروش', icon: '/images/retreat.png.webp', hideOnMobile: true },
  { title: 'ارسال سریع سفارش', icon: '/images/fast-delivery.png.webp' },
];

export default function Advantages() {
  return (
    <section className="py-12 px-4 w-[80%] m-auto bg-white text-center">
      <h2 className="text-2xl font-bold mb-10">
        <span>چرا از ملو کافی خرید کنم؟</span>
        <span className="text-yellow-400 text-xl ml-2">★</span>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 justify-items-center">
        {advantages.map((item, index) => (
          <div
            key={index}
            className={`${
              item.hideOnMobile ? 'hidden lg:block' : ''
            } bg-gray-50 rounded-xl p-8 md:p-10 shadow-md transition hover:-translate-y-1 hover:shadow-lg w-full`}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={50}
              height={50}
              className="w-14 h-14 mx-auto mb-4"
            />
            <p className="text-base font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
