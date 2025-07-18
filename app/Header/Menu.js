'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { FaChevronLeft, FaSearch } from 'react-icons/fa';

export default function Menu({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [openIndexes, setOpenIndexes] = useState({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSubMenu = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!isOpen || !mounted) return null;

  const menuItems = [
    {
      label: 'خانه',
      href: '/',
      subItems: null,
    },
    {
      label: 'قهوه‌های ملو',
      subItems: [
        { label: 'ترک', href: '/Header/DesktopHeader/TurkishCoffee' },
        { label: 'فرانسه', href: '/Header/DesktopHeader/FrenchCoffee' },
        { label: 'اسپرسو', href: '/Header/DesktopHeader/Espresso' },
      ],
    },
    {
      label: 'موکاپات',
      subItems: [
        { label: 'برند Bialetti', href: '/Header/DesktopHeader/Mokapot/Bialetti' },
        { label: 'برند Arzum', href: '/Header/DesktopHeader/Mokapot/Arzum' },
      ],
    },
    {
      label: 'قهوه فرانسه',
      subItems: [
        { label: 'برند Bialetti', href: '/Header/DesktopHeader/Mokapot/Bialetti' },
        { label: 'برند Arzum', href: '/Header/DesktopHeader/Mokapot/Arzum' },
      ],
    },
    {
      label: 'قهوه ترک',
      subItems: [
        { label: 'برند Bialetti', href: '/Header/DesktopHeader/Mokapot/Bialetti' },
        { label: 'برند Arzum', href: '/Header/DesktopHeader/Mokapot/Arzum' },
      ],
    },
    {
      label: 'خرید قهوه',
      subItems: [
        { label: 'برند Bialetti', href: '/Header/DesktopHeader/Mokapot/Bialetti' },
        { label: 'برند Arzum', href: '/Header/DesktopHeader/Mokapot/Arzum' },
      ],
    },
  ];

  return createPortal(
    <>
      {/* بک‌دراب تار */}
      <div onClick={onClose} className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-60" />   

      {/* سایدبار منو */}
      <div className="fixed top-0 right-0 h-full w-[75%] bg-white z-60 p-4 shadow-md flex flex-col text-right overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 left-4 text-2xl" aria-label="بستن منو">
          ✕
        </button>

        {/* 🔍 سرچ */}
        <div className="flex items-center bg-[#f1f1f1] rounded-md px-3 py-2 mt-10 mb-6">
          <FaSearch className="ml-2 text-gray-500" />
          <input
            type="text"
            placeholder="جستجو در محصولات"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* لیست منو */}
        <ul className="text-sm font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="border border-gray-200 rounded-md mt-2 p-3"
            >
              <div className="flex justify-between items-center">
                <span className="w-full">
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                </span>

                {item.subItems && item.subItems.length > 0 && (
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className={`transition-transform duration-200 ${
                      openIndexes[index] ? 'rotate-90' : ''
                    }`}
                    aria-label={openIndexes[index] ? "بستن زیرمنو" : "باز کردن زیرمنو"}
                  >
                    <FaChevronLeft className="text-gray-400 text-xs" />
                  </button>
                )}
              </div>

              {openIndexes[index] && item.subItems && (
                <ul className="mt-2 pr-4 text-sm text-gray-600 space-y-2">
                  {item.subItems.length > 0 ? (
                    item.subItems.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link href={sub.href}>{sub.label}</Link>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400 text-xs mt-1">
                      موردی برای نمایش نیست
                    </li>
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-10 text-sm text-center text-blue-600 font-semibold">
          ورود / ثبت‌نام
        </div>
      </div>
    </>,
    document.getElementById('menu-portal')
  );
}
