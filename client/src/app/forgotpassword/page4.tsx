'use client';

import React from 'react';
import Link from 'next/link';

export default function PasswordResetSuccessPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <header className="text-center">
          <Link href="/" className="inline-flex items-center justify-center gap-3">
            <svg
              className="h-8 w-8 text-[#a3bfe0]"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Skilloop</h1>
          </Link>
        </header>

        <main className="mt-8 bg-white shadow-lg rounded-2xl p-8 sm:p-10 text-center">
          <div className="flex flex-col items-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
              Password Updated
            </h2>
            <p className="mt-3 text-base text-[#6b7280]">
              Your password has been changed successfully. You can now log in with your new password.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/login"
              className="flex w-full items-center justify-center rounded-full bg-[#a3bfe0] px-4 py-3 text-base font-semibold text-[#111827] transition-colors duration-300 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#a3bfe0] focus:ring-offset-2"
            >
              Return to Login
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
