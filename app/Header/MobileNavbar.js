'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileNavbar({ setIsCartOpen, isCartOpen }) {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // اگر فوتر وارد دید شد (یا به ته صفحه رسیدیم)
      if (footerTop <= windowHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-[rgba(0,0,0,0.1)] z-40 lg:hidden"
        />
      )}

      <div
        className={`bg-white lg:hidden transition-all duration-300 border-t border-gray-300 border-opacity-20 ${
          isFixed
            ? "fixed bottom-0 left-0 w-full z-50"
            : "relative w-full z-10"
        }`}
      >
        <div className="flex justify-around items-center py-2 text-sm text-gray-700">
          <Link href="/" className="flex flex-col items-center hover:opacity-70">
            <span className="text-xl">🏠</span>
            <span>خانه</span>
          </Link>

          <Link href="/blog" className="flex flex-col items-center hover:opacity-70">
            <span className="text-xl">✍️</span>
            <span>وبلاگ</span>
          </Link>

          <Link href="/profile" className="flex flex-col items-center hover:opacity-70">
            <span className="text-xl">👤</span>
            <span>پروفایل</span>
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="flex flex-col items-center hover:opacity-70"
          >
            <span className="text-xl">🛒</span>
            <span>سبد خرید</span>
          </button>
        </div>
      </div>
    </>
  );
}
