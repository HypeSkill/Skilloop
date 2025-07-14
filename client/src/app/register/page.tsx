"use client";

import React from "react";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center text-gray-900">Create your Skilloop account</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Start your skill-sharing journey now.</p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" placeholder="Create a password" className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" placeholder="Confirm password" className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300" />
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label className="text-sm text-gray-600">
              I agree to the <a className="text-blue-600 hover:underline" href="#">Terms</a> and <a className="text-blue-600 hover:underline" href="#">Privacy Policy</a>.
            </label>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">Register</button>
        </form>

        <div className="my-6 text-center text-gray-500 text-sm">or sign up with</div>
        <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" />
          Sign up with Google
        </button>

        <p className="mt-6 text-center text-sm">
          Already have an account? <a href="/login" className="text-blue-600 font-medium hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}
