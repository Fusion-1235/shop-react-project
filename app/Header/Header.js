'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Menu from './Menu';
import Cart from './Cart';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // کنترل مودال سرچ

  const { data: session } = useSession();

  return (
    <header className="w-full bg-white z-50 border border-[#eee] border-b border-b-[#eee]">
      {/* نوار بالا - موبایل و تبلت (تا 1023px) */}
      <div className="flex flex-row-reverse items-center justify-between p-4 lg:hidden">
        <div onClick={() => setIsCartOpen(true)} className="cursor-pointer text-xl">🛒</div>
        <Image src="/images/logo-png.png.webp" width={100} height={100} />
        <div onClick={() => setIsMenuOpen(true)} className="cursor-pointer text-xl">☰</div>
      </div>

      {/* نوار بالا - دسکتاپ (از 1024px به بالا) */}
      <div className="hidden lg:flex flex-row-reverse items-center justify-between max-w-[1200px] py-7 px-6 container mx-auto">
        {/* چپ: ورود، سرچ و سبد خرید */}
        <div className="flex items-center gap-4 relative">

          {session ? (
            <Link href="/my-account">
              <button className="text-sm">حساب کاربری من</button>
            </Link>
          ) : (
            <Link href="/Header/LoginSignUp">
              <button className="text-sm">ورود / ثبت‌نام</button>
            </Link>
          )}

          {/* آیکون سرچ یا ضربدر بسته شدن */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full cursor-pointer transition-normal"
            aria-label="جستجو"
          >
            {isOpen ? (
              // آیکون ضربدر
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // آیکون سرچ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.75 6.75a7.5 7.5 0 0 0 9.9 9.9z"
                />
              </svg>
            )}
          </button>

          {/* سبد خرید با آیکون و عدد */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-black text-white rounded-full px-4 py-2 flex items-center gap-2"
          >
            <span className="text-sm">۰ تومان</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9v9"
              />
            </svg>

            {/* عدد ۰ بالا سمت چپ */}
            <span className="absolute -top-2 -left-2 bg-white border border-black text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
              ۰
            </span>
          </button>
        </div>

        {/* وسط: لوگو */}
        <div className="flex justify-center lg:ml-[135px]">
          <Link href="/">
            <Image
              src="/images/logo-png.png.webp"
              alt="لوگو"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>

        {/* راست: منوی بالا */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/Header/DesktopHeader/MeloCoffee">قهوه‌های ملو</Link>
          <Link href="/Header/DesktopHeader/Mokapot">موکاپات</Link>
          <Link href="/Header/DesktopHeader/FrenchPress">فرنچ پرس</Link>
          <Link href="/Header/DesktopHeader/TurkishCoffee">قهوه ترک</Link>
          <Link href="/Header/DesktopHeader/BuyCoffee">خرید قهوه</Link>
        </nav>
      </div>

      {/* منوی همبرگری موبایل/تبلت */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* سبد خرید */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* مودال سرچ با ترنزیشن */}
      <div
        className={`fixed inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-lg z-[9999] transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ height: '50vh' }}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold">جستجو</h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="بستن جستجو"
            className="text-xl cursor-pointer font-bold px-2 py-1 rounded"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
          </button>
        </div>

        <div className="p-4">
          <input
            type="text"
            placeholder="عبارت مورد نظر را جستجو کنید..."
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1"
            autoFocus={isOpen}
          />
        </div>
      </div>

      <div className="hidden lg:flex pt-[18px] pb-[18px] justify-center bg-white py-3 relative shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-y border-gray-200">
        <div className="flex gap-5 text-sm font-medium">
          <Link href='/'>خانه</Link>
          <Link href='/Header/DesktopHeader/MeloCoffee'>قهوه های ملو</Link>
          <Link href='/Header/DesktopHeader/ForeignCoffee'>قهوه های خارجی</Link>
          <Link href='/Header/DesktopHeader/InstantCoffee'>قهوه های فوری</Link>
          <Link href='/Header/DesktopHeader/TeaAndInstantProducts'>چای و محصولات فوری</Link>
          <Link href='/Header/DesktopHeader/CoffeeMachines'>قهوه ساز ها</Link>
          <Link href='/Header/DesktopHeader/CoffeeAccessories'>لوازم جانبی</Link>
        </div>
      </div>
    </header>
  );
}
