'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Cart({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <>
      {/* بک‌دراب تار */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-[1050]"
      />

      {/* سایدبار سبد خرید */}
      <div className="fixed top-0 left-0 h-full w-[70%] bg-white z-[1060] shadow-lg">
        <button onClick={onClose} className="absolute top-4 left-4 z-[1070] text-2xl">✕</button>
        <div className="p-4 mt-12">
          <h2 className="text-lg font-bold mb-4">سبد خرید</h2>
          <p>محصولی در سبد خرید نیست.</p>
        </div>
      </div>
    </>,
    document.getElementById('cart-portal')
  );
}
