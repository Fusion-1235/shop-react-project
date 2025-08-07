'use client';

import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaEye, FaEyeSlash } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import Swal from 'sweetalert2';

export default function LoginRegisterPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisibility, setPasswordVisibility] = useState({
    loginPassword: false,
    registerPassword: false,
    confirmPassword: false,
  });

  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleForms = () => {
    setIsLogin(prev => !prev);
  };

  const togglePassword = (field) => {
    setPasswordVisibility(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      if (input.value) {
        input.parentElement.classList.add('input-filled');
      }
    });
  }, []);

  const handleFocus = (e) => {
    e.target.parentElement.classList.add('input-focused');
  };

  const handleBlur = (e) => {
    const parent = e.target.parentElement;
    parent.classList.remove('input-focused');
    if (e.target.value) {
      parent.classList.add('input-filled');
    } else {
      parent.classList.remove('input-filled');
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerPassword !== confirmPassword) {
      alert('رمز عبور و تکرار آن یکسان نیست!');
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: registerName,
          email: registerEmail,
          password: registerPassword
        }),
      });

      const data = await res.json();

      if (res.status === 201) {
        alert(data.message || 'ثبت نام با موفقیت انجام شد!');
        setIsLogin(true);
        setRegisterName('');
        setRegisterEmail('');
        setRegisterPassword('');
        setConfirmPassword('');
      } else {
        alert(data.message || 'خطایی رخ داده است');
      }
    } catch (error) {
      alert('خطا در ارتباط با سرور');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.loginEmail.value;
    const password = e.target.loginPassword.value;

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      Swal.fire({
        icon: 'error',
        title: 'خطا',
        text: 'ایمیل یا رمز عبور اشتباه است.',
        confirmButtonText: 'باشه',
        background: '#ffe5e5',
        color: '#b00020'
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'ورود موفق',
        text: 'شما با موفقیت وارد حساب کاربری شدید.',
        confirmButtonText: 'برو به حساب من',
        background: '#e6ffe6',
        color: '#0a660a'
      }).then(() => {
        window.location.href = '/my-account';
      });
    }
  };

  return (
    <div className={`flex items-center justify-center p-4 min-h-screen transition-all duration-300 bg-gray-800`}>
      <div className="auth-container bg-cyan-950 rounded-2xl p-8 w-full max-w-md relative">
        
        <div className={`relative overflow-hidden transition-[height] duration-500 ease-in-out ${isLogin ? 'h-[450px]' : 'h-[500px]'}`}>
          {/* فرم ورود */}
          <div className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${isLogin ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">خوش آمدید</h2>
              <p className="text-gray-400">لطفا وارد حساب کاربری خود شوید</p>
            </div>

            <form className="space-y-6" onSubmit={handleLoginSubmit}>
              <div className="relative">
                <input
                  className="form-input bg-gray-500 w-full px-4 py-4 rounded-xl text-black"
                  id="loginEmail"
                  name="loginEmail"
                  type="email"
                  placeholder="ایمیل"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
              </div>

              <div className="relative">
                <input
                  className="form-input bg-gray-500 w-full px-4 py-4 rounded-xl text-black"
                  id="loginPassword"
                  name="loginPassword"
                  type={passwordVisibility.loginPassword ? 'text' : 'password'}
                  placeholder="رمز عبور"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <button
                  type="button"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  onClick={() => togglePassword('loginPassword')}
                  aria-label="نمایش / مخفی کردن رمز عبور"
                >
                  {passwordVisibility.loginPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember" type="checkbox" className="checkbox-custom h-5 w-5 rounded-lg" />
                  <label htmlFor="remember" className="mr-2 block text-sm text-gray-300">
                    مرا به خاطر بسپار
                  </label>
                </div>
                <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">رمز عبور را فراموش کرده‌اید؟</a>
              </div>

              <button type="submit" className="submit-btn w-full bg-fuchsia-800 text-white font-bold py-3 px-4 rounded-xl">
                ورود
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-400">
                  حساب کاربری ندارید؟
                  <button
                    type="button"
                    onClick={toggleForms}
                    className="text-purple-400 hover:text-purple-300 font-bold transition-colors ml-2"
                  >ثبت نام کنید</button>
                </p>
              </div>
            </form>
          </div>

          {/* فرم ثبت نام */}
          <div className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${isLogin ? 'opacity-0 scale-95 z-0' : 'opacity-100 scale-100 z-10'}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">ثبت نام</h2>
              <p className="text-gray-400">حساب کاربری جدید ایجاد کنید</p>
            </div>

            <form className="space-y-3" onSubmit={handleRegisterSubmit}>
              <div className="relative">
                <input
                  className="form-input bg-gray-500 w-full px-4 py-3 rounded-xl text-black"
                  id="registerName"
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
              </div>

              <div className="relative">
                <input
                  className="form-input bg-gray-500 w-full px-4 py-3 rounded-xl text-black"
                  id="registerEmail"
                  type="email"
                  placeholder="ایمیل"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
              </div>

              <div className="relative">
                <input
                  className="form-input bg-gray-500 w-full px-4 py-3 rounded-xl text-black"
                  id="registerPassword"
                  type={passwordVisibility.registerPassword ? 'text' : 'password'}
                  placeholder="رمز عبور"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <button
                  type="button"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  onClick={() => togglePassword('registerPassword')}
                  aria-label="نمایش / مخفی کردن رمز عبور"
                >
                  {passwordVisibility.registerPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="relative">
                <input
                  className="form-input bg-gray-500 w-full px-4 py-3 rounded-xl text-black"
                  id="confirmPassword"
                  type={passwordVisibility.confirmPassword ? 'text' : 'password'}
                  placeholder="تکرار رمز عبور"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <button
                  type="button"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  onClick={() => togglePassword('confirmPassword')}
                  aria-label="نمایش / مخفی کردن رمز عبور"
                >
                  {passwordVisibility.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="flex items-center">
                <input id="terms" type="checkbox" className="checkbox-custom h-5 w-5 rounded-lg" />
                <label htmlFor="terms" className="mr-2 block text-sm text-gray-300">
                  با <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">قوانین و مقررات</a> موافقم
                </label>
              </div>

              <button type="submit" className="submit-btn bg-fuchsia-800 w-full text-white font-bold py-3 px-4 rounded-xl">
                ثبت نام
              </button>

              <div className="text-center">
                <p className="text-gray-400">
                  قبلا ثبت نام کرده‌اید؟
                  <button
                    type="button"
                    onClick={toggleForms}
                    className="text-purple-400 hover:text-purple-300 font-bold transition-colors ml-2"
                  >وارد شوید</button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
