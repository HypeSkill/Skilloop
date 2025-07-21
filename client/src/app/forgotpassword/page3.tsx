'use client';

import React, { useState, useEffect } from 'react';

export default function SetNewPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isLengthValid = newPassword.length >= 8;
  const hasUpperCase = /[A-Z]/.test(newPassword);
  const hasLowerCase = /[a-z]/.test(newPassword);
  const hasNumber = /\d/.test(newPassword);
  const passwordsMatch = newPassword === confirmPassword && newPassword !== '';

  const getIcon = (valid: boolean, filled = true) =>
    valid ? 'check_circle' : filled ? 'cancel' : '';

  const getClass = (valid: boolean) =>
    valid ? 'text-[#22c55e]' : 'text-[#ef4444]';

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#f0f2f4] p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <svg
            className="h-12 w-12 text-[#1e79e0]"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
              fill="currentColor"
            />
          </svg>
          <h1 className="text-3xl font-bold text-[#111417]">Skilloop</h1>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#111417]">Set a new password</h2>
            <p className="mt-2 text-sm text-[#647487]">
              Your new password must be different from previous used passwords.
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <input
                  id="new-password"
                  name="new-password"
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  autoComplete="new-password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-input block w-full rounded-xl border border-[#dce0e5] px-4 py-3 placeholder-[#647487] shadow-sm focus:border-[#1e79e0] focus:outline-none focus:ring-1 focus:ring-[#1e79e0] sm:text-sm"
                />
                <span
                  className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#647487] hover:text-[#111417]"
                  onClick={() => setShowNewPassword((prev) => !prev)}
                >
                  {showNewPassword ? 'visibility' : 'visibility_off'}
                </span>
              </div>

              <div className="relative">
                <input
                  id="confirm-new-password"
                  name="confirm-new-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm New Password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-input block w-full rounded-xl border border-[#dce0e5] px-4 py-3 placeholder-[#647487] shadow-sm focus:border-[#1e79e0] focus:outline-none focus:ring-1 focus:ring-[#1e79e0] sm:text-sm"
                />
                <span
                  className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#647487] hover:text-[#111417]"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? 'visibility' : 'visibility_off'}
                </span>
              </div>

              <div className="text-xs space-y-1 pl-1">
                <p className={`flex items-center gap-1.5 ${getClass(passwordsMatch)}`}>
                  <span className="material-icons-outlined text-base">
                    {confirmPassword ? getIcon(passwordsMatch) : ''}
                  </span>
                  {confirmPassword &&
                    (passwordsMatch
                      ? 'Passwords match'
                      : 'Passwords do not match')}
                </p>
                <p className={`flex items-center gap-1.5 ${getClass(isLengthValid)}`}>
                  <span className="material-icons-outlined text-base">
                    {getIcon(isLengthValid)}
                  </span>
                  At least 8 characters
                </p>
                <p
                  className={`flex items-center gap-1.5 ${getClass(
                    hasUpperCase && hasLowerCase
                  )}`}
                >
                  <span className="material-icons-outlined text-base">
                    {getIcon(hasUpperCase && hasLowerCase)}
                  </span>
                  Both upper & lower case
                </p>
                <p className={`flex items-center gap-1.5 ${getClass(hasNumber)}`}>
                  <span className="material-icons-outlined text-base">
                    {getIcon(hasNumber)}
                  </span>
                  At least one number
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-full bg-[#1e79e0] px-4 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#1e79e0] focus:ring-offset-2 transition-colors"
            >
              Update Password
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-[#647487]">
          Remember your password?
          <a
            href="/login"
            className="ml-1 font-medium text-[#1e79e0] hover:text-blue-700"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
