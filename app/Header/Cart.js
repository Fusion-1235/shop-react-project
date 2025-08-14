'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Cart({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let timeoutId;

    if (isOpen) {
      setShow(true);
      // بعد از mount، با تاخیر خیلی کوتاه animateIn رو فعال می‌کنیم
      timeoutId = setTimeout(() => setAnimateIn(true), 20);
    } else {
      setAnimateIn(false);
      // بعد از انیمیشن، کامپوننت رو unmount می‌کنیم
      timeoutId = setTimeout(() => setShow(false), 300);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  if (!mounted || !show) return null;

  return createPortal(
    <>
      {/* بک‌دراب با ترنزیشن opacity */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-[rgba(0,0,0,0.7)] z-[1050] transition-opacity duration-300 ${
          animateIn ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* سایدبار با ترنزیشن slide-in/out */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white z-[1060] shadow-lg transition-transform duration-300 ${
          animateIn ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-[1070] text-2xl"
        >
          ✕
        </button>
        <div className="p-4 mt-12">
          <h2 className="text-lg font-bold mb-4">سبد خرید</h2>
          <p>محصولی در سبد خرید نیست.</p>
        </div>
      </div>
    </>,
    document.getElementById('cart-portal')
  );
}
