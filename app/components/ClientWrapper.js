"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/app/Header/Header';
import MobileNavbar from '@/app/Header/MobileNavbar';
import Cart from '@/app/Header/Cart';
import Menu from '@/app/Header/Menu';
import AuthProvider from '@/app/providers/AuthProvider';
import Footer from '@/app/Footer';

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/Header/LoginSignUp';

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      {children}

      {!isAuthPage && <Footer />}
    </AuthProvider>
  );
}
