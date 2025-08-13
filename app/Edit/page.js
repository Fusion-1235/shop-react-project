"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function EditAccount() {
  const { data: session, status } = useSession();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      const nameParts = session.user.fullName?.split(" ") || [];
      setFullName(session.user.fullName || "");
      setEmail(session.user.email || "");
    }
  }, [session, status]);

  return (
    <div>
      <header className="w-full p-4 mt-10 flex text-center justify-center items-center">
        <h1 className="text-4xl font-semibold">حساب کاربری من</h1>
      </header>

      <div className="flex flex-col gap-3 md:flex-row w-full p-4 md:p-8">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 shadow-md rounded-lg p-4">
          <ul className="space-y-3 text-sm">
            <Link href="/my-account"><li className="hover:bg-gray-100 p-2 rounded">پیشخوان</li></Link>
              <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">سفارش ها</li>
              <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">آدرس</li>
              <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">کیف پول من</li>
              <li
                  className="bg-gray-100 p-2 rounded"
                  onClick={(e) => e.preventDefault()}>
                  اطلاعات حساب کاربری
              </li>
              <li
                className="hover:bg-gray-100 p-2 rounded cursor-pointer"
                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
              >
                خروج
              </li>
          </ul>
        </aside>

        {/* Main Form */}
        <div className="w-full md:w-3/4 bg-white rounded shadow p-6">
          <form className="space-y-4">
            {/* نام نمایشی */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                نام
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                به این صورت اسم شما در حساب کاربری و نظرات دیده خواهد شد
              </p>
            </div>

            {/* ایمیل */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                آدرس ایمیل
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* تغییر گذرواژه */}
            <div className="mt-6">
              <h3 className="text-md font-semibold mb-4">تغییر گذرواژه</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    رمز عبور پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 left-0 px-3 text-gray-500"
                    >
                      👁️
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    رمز عبور جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 left-0 px-3 text-gray-500"
                    >
                      👁️
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    تکرار رمز عبور
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 left-0 px-3 text-gray-500"
                    >
                      👁️
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* دکمه ثبت */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-[#d3a97f] hover:bg-orange-300 cursor-pointer text-white font-medium px-6 py-2 rounded-4xl"
              >
                ذخیره تغییرات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
