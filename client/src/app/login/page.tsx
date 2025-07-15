"use client";

import React from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const router = useRouter(); 
  const [email, setEmail] = React. useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState('')
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setErrorMsg(error.message)
    } else {
      router.push('/') // or your desired post-login route
    }

    setLoading(false)
  }

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000', // your post-login route
      },
    })

    if (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center">Welcome back to Skilloop</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Sign in to continue your journey</p>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700" >Email or Username</label>
            <input  value={email}
          onChange={e => setEmail(e.target.value)}
          required type="email" placeholder="you@example.com" className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input  value={password}
          onChange={e => setPassword(e.target.value)}
          required type="password" placeholder="••••••••" className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300" />
            <div className="text-right mt-1 text-sm">
              <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        </form>

        <div className="my-6 text-center text-gray-500 text-sm">or continue with</div>
        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" />
          Sign in with Google
        </button>

        <p className="mt-6 text-center text-sm">
          New to Skilloop? <a href="/register" className="text-blue-600 font-medium hover:underline">Register here</a>
        </p>
      </div>
    </div>
  );
}
