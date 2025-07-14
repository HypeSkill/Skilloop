'use client';

import React from 'react';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f8f9fa] overflow-x-hidden">
      <header className="flex items-center justify-between border-b border-[#e5e7eb] bg-white px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 text-[#4f8bc4]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#111827]">Skilloop</h1>
        </div>

        <div className="flex-1 px-8">
          <input
            type="search"
            placeholder="Search by skill or person..."
            className="w-full max-w-lg rounded-full border border-transparent bg-[#f3f4f6] py-2.5 pl-10 pr-4 text-sm text-[#111827] placeholder-[#6b7280] focus:border-[#4f8bc4] focus:ring-2 focus:ring-[#4f8bc4]"
          />
        </div>

        <div className="relative group">
          <button
            className="w-10 h-10 rounded-full bg-center bg-cover"
            style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDFURQkuJ2x2pjE3Bz7qhvXWfcrV_2Ib3jBNZbcSK3n1J-GuhrcGEYEGrLcIq_s8UvtNj2wK-rjolps-xMeHldz2E03RdbI2o0bG2T_2ifMjJ6EzVobrdu6W2sX3O-jahN1l4zOlMQaoOaa3m3pblXk4kM4C2CtU_gbRdcNqcvQxnT33Tgv6YvWP0MfgnzGfyFTYRxdBKB4TwKN2Wm1CkIvV2RPugn19CBOVguH3ZeWzbuDvOaYoqjL3CTFgE2xF5t6YA1g_8Ps5m3G)' }}
          ></button>
          <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
            <div className="my-1 border-t border-gray-100"></div>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 border-r border-[#e5e7eb] bg-white p-4">
          <nav className="flex flex-col gap-2">
            {['Dashboard', 'My Network', 'Messages', 'Notifications', 'Bookmarks', 'Profile'].map((item) => (
              <a
                key={item}
                href="#"
                className={`nav-item flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium hover:bg-[#f3f4f6] transition-colors duration-200`}
              >
                <div className="w-6 h-6 text-[#6b7280]">
                  {/* You can add icons here */}
                </div>
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="space-y-8 rounded-xl border border-[#e5e7eb] bg-white p-6">
            <section>
              <h2 className="mb-4 text-xl font-bold text-[#111827]">Recommended Skills</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {["Advanced JavaScript", "UI/UX Design Principles", "Data Visualization with D3.js"].map((title) => (
                  <div key={title} className="rounded-lg border border-[#e5e7eb] bg-[#f3f4f6] p-4">
                    <h3 className="font-semibold text-[#111827]">{title}</h3>
                    <p className="mt-1 text-sm text-[#6b7280]">
                      Learn or enhance your {title} skills.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-[#111827]">People You May Know</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {["Jane Doe", "John Smith", "Sarah Lee"].map((name, idx) => (
                  <div
                    key={name}
                    className="flex flex-col items-center rounded-lg border border-[#e5e7eb] bg-white p-4 text-center"
                  >
                    <Image
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
                      alt={`Profile of ${name}`}
                      width={96}
                      height={96}
                      className="h-24 w-24 rounded-full"
                    />
                    <h3 className="mt-3 font-semibold text-[#111827]">{name}</h3>
                    <p className="mt-1 text-sm text-[#6b7280]">Shared skills: XYZ</p>
                    <button className="mt-4 w-full rounded-full bg-[#4f8bc4] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4379a9]">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
