'use client';

import { useState } from 'react';

export default function LoginPage() {
  // Toggle antara form login atau register
  const [isLogin, setIsLogin] = useState(true);

  // State untuk show/hide password (login)
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // State untuk show/hide password (register)
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterConfirmPassword, setShowRegisterConfirmPassword] =
    useState(false);

  // Ikon Eye (password tersembunyi)
  const EyeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 
           0 8.268 2.943 9.542 7-1.274 4.057-5.065 
           7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );

  // Ikon Eye-Off (password terlihat)
  const EyeOffIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.875 18.825A10.05 10.05 0 
           0112 19c-4.477 0-8.268-2.943-9.542-7a9.964 
           9.964 0 012.86-4.396M6.91 6.91A9.957 
           9.957 0 0112 5c4.477 0 8.268 2.943 
           9.542 7a10.05 10.05 0 01-1.396 
           2.665M15 12a3 3 0 11-6 0 3 3 0 016 
           0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
    </svg>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Header Tab: Login / Register */}
        <div className="mb-6">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 font-semibold border-b-2 transition-colors 
                duration-300 cursor-pointer hover:border-gray-400 
                ${
                  isLogin
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600'
                }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 font-semibold border-b-2 transition-colors 
                duration-300 cursor-pointer hover:border-gray-400 
                ${
                  !isLogin
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600'
                }`}
            >
              Register
            </button>
          </div>
        </div>

        {/* Form Login */}
        {isLogin ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 mb-1 font-medium"
              >
                Username{' '}
                <span className="text-sm text-gray-400">
                  (masukkan username atau email Anda)
                </span>
              </label>
              <input
                type="text"
                id="username"
                placeholder="Masukkan username atau email Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="loginPassword"
                className="block text-gray-700 mb-1 font-medium"
              >
                Password{' '}
                <span className="text-sm text-gray-400">
                  (masukkan password Anda)
                </span>
              </label>
              <div className="relative">
                <input
                  type={showLoginPassword ? 'text' : 'password'}
                  id="loginPassword"
                  placeholder="Masukkan password Anda"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-blue-600 pr-10"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                >
                  {showLoginPassword ? EyeOffIcon : EyeIcon}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md 
                hover:bg-blue-700 transition-colors duration-300"
            >
              Login
            </button>
          </form>
        ) : (
          // Form Register
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label
                htmlFor="registerName"
                className="block text-gray-700 mb-1 font-medium"
              >
                Nama{' '}
                <span className="text-sm text-gray-400">
                  (masukkan nama lengkap Anda)
                </span>
              </label>
              <input
                type="text"
                id="registerName"
                placeholder="Masukkan nama lengkap Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="registerEmail"
                className="block text-gray-700 mb-1 font-medium"
              >
                Email{' '}
                <span className="text-sm text-gray-400">
                  (masukkan email Anda)
                </span>
              </label>
              <input
                type="email"
                id="registerEmail"
                placeholder="Masukkan email Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="registerWhatsapp"
                className="block text-gray-700 mb-1 font-medium"
              >
                No. WhatsApp{' '}
                <span className="text-sm text-gray-400">
                  (masukkan nomor WhatsApp Anda)
                </span>
              </label>
              <input
                type="text"
                id="registerWhatsapp"
                placeholder="Masukkan nomor WhatsApp Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="registerPassword"
                className="block text-gray-700 mb-1 font-medium"
              >
                Password{' '}
                <span className="text-sm text-gray-400">
                  (masukkan password Anda)
                </span>
              </label>
              <div className="relative">
                <input
                  type={showRegisterPassword ? 'text' : 'password'}
                  id="registerPassword"
                  placeholder="Masukkan password Anda"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-blue-600 pr-10"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                >
                  {showRegisterPassword ? EyeOffIcon : EyeIcon}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="registerConfirmPassword"
                className="block text-gray-700 mb-1 font-medium"
              >
                Konfirmasi Password{' '}
                <span className="text-sm text-gray-400">
                  (konfirmasi password Anda)
                </span>
              </label>
              <div className="relative">
                <input
                  type={showRegisterConfirmPassword ? 'text' : 'password'}
                  id="registerConfirmPassword"
                  placeholder="Konfirmasi password Anda"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-blue-600 pr-10"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() =>
                    setShowRegisterConfirmPassword(
                      !showRegisterConfirmPassword
                    )
                  }
                >
                  {showRegisterConfirmPassword ? EyeOffIcon : EyeIcon}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md 
                hover:bg-blue-700 transition-colors duration-300"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
