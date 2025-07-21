'use client';

import React from 'react';

export default function PasswordResetSentPage() {
  return (
    <div className="flex flex-col min-h-screen text-[#1e293b] bg-[#f8fafc]">
      <header className="border-b border-[#cbd5e1]">
        <div className="container mx-auto px-6 py-4 flex justify-center items-center">
          <div className="flex items-center gap-3">
            <div className="size-8">
              <svg
                className="logo-icon"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#a3bfe0"
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">Skilloop</h1>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md text-center bg-white p-8 rounded-2xl shadow-lg">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e2e8f0] text-[#a3bfe0]">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-[#1e293b] mb-4">
            Password Reset Email Sent
          </h2>
          <p className="text-[#475569] mb-6">
            We&apos;ve sent a password reset link to your email address. Please check your
            inbox and follow the instructions to reset your password.
          </p>

          <div className="space-y-4">
            <a
              href="/login"
              className="w-full inline-block px-6 py-3 text-base font-bold text-white bg-[#a3bfe0] rounded-full hover:opacity-90 transition-opacity"
            >
              Return to Login
            </a>
            <p className="text-sm text-[#475569]">
              Didn&apos;t receive the email?{' '}
              <a
                href="#"
                className="font-medium text-[#a3bfe0] hover:underline"
              >
                Resend
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
