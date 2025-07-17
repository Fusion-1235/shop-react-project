"use client"
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("ایمیل را وارد کنید!");
    alert(`ایمیل ${email} با موفقیت ثبت شد!`);
    setEmail("");
  };

  return (
    <div className="flex justify-center mt-10">
      <div
        className="max-w-[83%] w-full rounded-xl p-6 flex flex-col-reverse md:flex-row items-center gap-6 bg-white"
        style={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
        }}
      >
        {/* فرم سمت چپ */}
        <div className="flex-1 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              type="email"
              placeholder="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              dir="rtl"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all"
            >
              ارسال
            </button>
          </form>
        </div>

        {/* متن سمت راست */}
        <div className="text-right flex-1 w-full" dir="rtl">
          <h1 className="text-2xl font-semibold mb-5">📬 خبرنامه ملو کافی</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            با عضویت در خبرنامه وودمارت در سریع ترین زمان از ملو کافی و حراج‌های ماه آگاه شوید.
          </p>
        </div>
      </div>
    </div>
  );
}
