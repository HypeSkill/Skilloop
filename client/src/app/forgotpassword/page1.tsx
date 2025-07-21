'use client';

import React from 'react';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafb] p-4 text-gray-900">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <svg
            className="mx-auto h-12 w-auto text-[#3a81c4]"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
            />
          </svg>
          <h1 className="mt-4 text-2xl font-bold text-[#3a81c4]">Skilloop</h1>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md" style={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#111827]">Forgot your password?</h2>
            <p className="mt-2 text-[#6b7280]">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                autoComplete="email"
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#3a81c4] focus:border-[#3a81c4] sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#3a81c4] text-white font-medium py-3 px-6 rounded-lg shadow-sm hover:bg-[#3271ad] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3a81c4] transition-colors duration-300 w-full"
              >
                Send Reset Link
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/login"
              className="font-medium text-[#3a81c4] hover:text-[#3271ad]"
            >
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
