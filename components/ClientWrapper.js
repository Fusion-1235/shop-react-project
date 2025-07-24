"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/app/Header/Header';
import MobileNavbar from '@/app/Header/MobileNavbar';
import Cart from '@/app/Header/Cart';
import Menu from '@/app/Header/Menu';
import AuthProvider from '@/app/providers/AuthProvider';

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/Header/LoginSignUp';

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    if (isAuthPage) {
      if (isLightTheme) {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isAuthPage, isLightTheme]);

  return (
    <AuthProvider>
      <div id="cart-portal" />
      <div id="menu-portal" />

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

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {isAuthPage
        ? React.cloneElement(children, { isLightTheme, setIsLightTheme })
        : children}
    </AuthProvider>
  );
}
