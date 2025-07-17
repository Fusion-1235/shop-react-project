import React from 'react';
import Image from 'next/image';

export default function CardEnvironment() {
  return (
    <div className="grid flex-row-reverse md:flex items-center bg-white rounded-lg p-6 w-[83%] text-right direction-rtl mx-auto mt-10" style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)' }}>
      <div className="md:w-1/2">
        <h2 className="text-[110%] font-bold text-gray-800 mt-7 lg:mt-0 mb-4" dir='rtl'>با هم به حفظ محیط زیست کمک کنیم!</h2>
        <p className="text-gray-700 leading-8">
          شما می‌تونید جعبه‌هایی که از ما خریداری می‌کنید رو بهمون برگردونید تا ما اون‌ها رو بازیافت کنیم و کمتر به محیط زیستمون آسیب برسونیم.
        </p>
      </div>
      <div className="md:w-1/2 m-auto mt-14 md:mt-0">
        <Image src="/images/certificazione.jpg" width={454} height={320} alt="محیط زیست" />
      </div>
    </div>
  );
}
