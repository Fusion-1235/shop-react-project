'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Banners() {
  return (
    <div className="mx-auto flex flex-col mt-52 md:flex-row gap-4 py-4" dir='rtl'>
      <Link
        href="/Banners/Tools"
        className="flex-1 rounded-xl overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
      >
        <Image
          src="/images/Untitled-2-04-1536x538.jpg.webp"
          alt="قهوه‌ ملو"
          width={600}
          height={250}
          className="w-full h-auto object-cover"
        />

      </Link>

      <Link
        href="/Banners/Melo"
        className="flex-1 rounded-xl overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
      >
        <Image
          src="/images/Untitled-2-01-1536x538.jpg.webp"
          alt="ابزار دم‌آوری"
          width={600}
          height={250}
          className="w-full h-auto object-cover"
        />
      </Link>
    </div>
  );
}
