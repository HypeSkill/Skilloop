"use client";

import React from "react";

export default function Homepage() {
  return (
    <div className="bg-white font-[Poppins]">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
        <nav className="container mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          <div className="flex items-center gap-3 text-gray-900">
            <svg className="h-8 w-8 text-[#4361ee]" fill="none" viewBox="0 0 48 48">
              <path d="M44 11.2727C44..." fill="currentColor" />
            </svg>
            <h2 className="text-[#111827] text-2xl font-bold">Skilloop</h2>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#374151]">
            <a className="hover:text-[#4361ee]" href="#">Explore Skills</a>
            <a className="hover:text-[#4361ee]" href="#">Post a Skill</a>
          </div>
          <div className="flex items-center gap-3">
            <a className="px-5 py-2.5 rounded-full border hover:bg-gray-100" href="/login">Login</a>
            <a className="px-5 py-2.5 rounded-full bg-[#4361ee] text-white hover:bg-opacity-90" href="/register">Register</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="py-20 text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold text-[#111827]">Welcome to Skilloop</h1>
            <p className="mt-4 text-lg text-[#6b7280]">The best place to share and learn new skills.</p>
          </div>
        </section>

        <section className="py-20 bg-[#f3f4f6]">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-[#111827]">Showcase Your Talent. Connect. Collaborate.</h2>
              <p className="mt-4 text-lg text-[#6b7280]">Skilloop helps people share their skills and get noticed.</p>
              <div className="mt-8">
                <a className="px-5 py-2.5 rounded-full bg-[#4361ee] text-white hover:bg-opacity-90" href="#">Join the Community</a>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4U-hzpHRz7WikKZE2AxX_xxrPEHNtRuVYL0tWG0Idt3_fBUFJ6H29pAy-XoWR3vD9ihGSLX7qrKQL47ZP3UZM9e8wL2wob6DMUc1HjDd6Kr9pfK7pzXcmr-uh1h96QCC1QA72pRcVJBoJVZ3IXnUDmL9N41cFDbAXjLd39lQrlKlFLCs44PtABg_lX2FyQF7u7gE11CFvtHgnqCyXpV9s9kzKGtVCsYt4-LpSNOV_f_n46ZlzAdp2MgbETmxAw2bovJ0f6wBI1-wL"
                alt="Showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-[#111827]">Features Built for Growth</h2>
            </div>
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "🧑‍🎓", title: "Student Profiles", desc: "Create a detailed profile." },
                { icon: "🤝", title: "Collaboration Boards", desc: "Find teams to work with." },
                { icon: "💼", title: "Micro-Gigs", desc: "Offer short gigs and get paid." },
                { icon: "🚀", title: "Recruiter Access", desc: "Get discovered by recruiters." }
              ].map((card, i) => (
                <div key={i} className="rounded-2xl p-6 bg-white shadow hover:scale-105 transition-transform">
                  <div className="text-4xl">{card.icon}</div>
                  <h3 className="mt-4 font-bold text-lg text-[#111827]">{card.title}</h3>
                  <p className="mt-2 text-sm text-[#374151]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
