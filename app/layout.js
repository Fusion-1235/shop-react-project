'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // اضافه شد
import Header from './Header/Header';
import MobileNavbar from './Header/MobileNavbar';
import Cart from './Header/Cart';
import Menu from './Header/Menu';
import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname(); // اضافه شد
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAuthPage = pathname === '/Header/LoginSignUp'; // مسیر صفحه‌ی لاگین/ثبت‌نام

  return (
    <html lang="fa" dir="rtl">
      <body>
        <div id="cart-portal" />
        <div id="menu-portal" />

        {/* فقط زمانی که صفحه login-signup نیست */}
        {!isAuthPage && (
          <>
            <Header
              isCartOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
            <MobileNavbar
              setIsCartOpen={setIsCartOpen}
              isCartOpen={isCartOpen}
            />
          </>
        )}

        {children}

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </body>
    </html>
  );
}
