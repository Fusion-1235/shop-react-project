"use client";

import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MyAccount() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // اگر سشن وجود نداشت ریدایرکت به صفحه اصلی
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center mt-10">در حال بارگذاری...</p>;
  }

  if (!session) {
    return null; // چون ریدایرکت می‌کنیم، نیازی به نمایش متن نیست
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full p-4 mt-10 flex text-center justify-center items-center">
        <h1 className="text-4xl font-semibold">حساب کاربری من</h1>
      </header>

      <div className="flex flex-col gap-8 md:flex-row container mx-auto mt-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 shadow-lg rounded-lg p-4">
          <ul className="space-y-3 text-sm">
            <li className="bg-gray-100 p-2 rounded">پیشخوان</li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">سفارش ها</li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">آدرس</li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">کیف پول من</li>
            <Link href="/Edit"><li className="hover:bg-gray-100 p-2 rounded cursor-pointer">اطلاعات حساب کاربری</li></Link>
            <li
              className="hover:bg-gray-100 p-2 rounded cursor-pointer"
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            >
              خروج
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-6 mt-6 md:mt-0">
          <p className="mb-4">
            سلام{" "}
            <span className="font-bold">{session.user.fullName}</span> نیستید؟{" "}
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
              className="text-blue-500 hover:underline"
            >
              خارج شوید
            </button>
          </p>
          <p className="mb-8 text-gray-600">
            از پیشخوان حساب کاربری خود می‌توانید{" "}
            <a href="#" className="text-blue-500 hover:underline">
              آخرین سفارش‌ها
            </a>{" "}
            را ببینید، به راحتی{" "}
            <a href="#" className="text-blue-500 hover:underline">
              آدرس حمل و نقل
            </a>{" "}
            و{" "}
            <a href="#" className="text-blue-500 hover:underline">
              صورت‌حساب
            </a>{" "}
            را مدیریت کنید و اطلاعات{" "}
            <a href="#" className="text-blue-500 hover:underline">
              حساب کاربری و رمز عبور
            </a>{" "}
            را تغییر دهید.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
              <div className="w-10 h-10 shadow-lg rounded-full flex items-center justify-center mb-2">⚙</div>
              <span>کیف پول من</span>
            </div>
            <div className="p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
              <div className="w-10 h-10 shadow-lg rounded-full flex items-center justify-center mb-2">📍</div>
              <span>آدرس</span>
            </div>
            <div className="p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
              <div className="w-10 h-10 shadow-lg rounded-full flex items-center justify-center mb-2">📄</div>
              <span>سفارش ها</span>
            </div>
            <div className="p-6 shadow-lg cursor-pointer rounded-lg flex flex-col items-center justify-center" onClick={() => signOut({ redirect: true, callbackUrl: "/" })}>
              <div className="w-10 h-10 shadow-lg rounded-full flex items-center justify-center mb-2">↩</div>
              <span>خروج</span>
            </div>
            <Link href="/Edit"><div className="p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
              <div className="w-10 h-10 shadow-lg rounded-full flex items-center justify-center mb-2">👤</div>
                <span>اطلاعات حساب کاربری</span>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
