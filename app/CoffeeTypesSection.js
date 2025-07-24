'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CoffeeTypesSection() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-6">قهوه‌ ها</h1>
      <div className="mt-4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4" dir='rtl'>
        <Link
          href="/Banners/Tools"
          className="flex-1 rounded-md overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/images/Blended-coffee.webp"
            alt="قهوه‌ ملو"
            width={250}
            height={250}
            className="w-full h-auto object-cover"
          />
        </Link>

        <Link
          href="/Banners/Melo"
          className="flex-1 rounded-md overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/images/Arabica-coffee.webp"           
            width={250}
            height={250}
            className="w-full h-auto object-cover"
          />
        </Link>

        <Link
          href="/Banners/Tools"
          className="flex-1 rounded-md overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/images/Robusta-coffee.webp"            
            width={250}
            height={250}
            className="w-full h-auto object-cover"
          />
        </Link>

        <Link
          href="/Banners/Melo"
          className="flex-1 rounded-md overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/images/High-caffeine-coffee.webp"
            width={250}
            height={250}
            className="w-full h-auto object-cover"
          />
        </Link>
      </div>
    </>
  );
}
