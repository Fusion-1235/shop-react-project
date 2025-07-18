"use client";

import { useState, useEffect } from "react";
import Header from "./Header/Header";
import MobileNavbar from "./Header/MobileNavbar";
import Cart from "./Header/Cart";
import Menu from "./Header/Menu";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

export default function RootLayout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="fa" dir="rtl">
      <body>
        <AuthProvider>
          {/* المنت‌های پورتال باید همیشه داخل DOM باشند */}
          <div id="cart-portal" />
          <div id="menu-portal" />

          <Header
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          {children}

          {/* حتما isCartOpen هم پاس داده شده */}
          <MobileNavbar setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />

          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

          <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </AuthProvider>
      </body>
    </html>
  );
}
