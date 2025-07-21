import React from "react";

const MessageInteractionPage = () => {
  return (
    <div className="flex h-screen flex-col bg-white text-[#121417] font-[Inter,Noto Sans,sans-serif]">
      <header className="flex shrink-0 items-center justify-between border-b border-[#e9ecef] px-6 py-3">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5">
            <svg className="h-8 w-8 text-[#3a81c4]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-xl font-bold">Skilloop</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-sm font-medium text-[#687682] hover:text-[#121417] transition-colors" href="#">
              Explore
            </a>
            <a className="text-sm font-medium text-[#687682] hover:text-[#121417] transition-colors" href="#">
              Teach
            </a>
            <a className="text-sm font-medium text-[#687682] hover:text-[#121417] transition-colors" href="#">
              My Learning
            </a>
            <a className="text-sm font-medium text-[#687682] hover:text-[#121417] transition-colors" href="#">
              Wishlist
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#687682]"
              fill="currentColor"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="form-input w-full rounded-full border-transparent bg-[#f8f9fa] pl-10 pr-4 py-2 text-sm text-[#121417] placeholder:text-[#687682] focus:ring-2 focus:ring-[#3a81c4] focus:ring-opacity-50"
            />
          </div>
          <button className="relative rounded-full p-2 text-[#687682] hover:bg-[#f8f9fa] hover:text-[#121417] transition-colors">
            <svg fill="currentColor" viewBox="0 0 256 256" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
            </svg>
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div
            className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBE4GTUQX7DGt6reEZOmGN-UAwnRXKNuBFl5iN7VbBJ6YpEasRPILePS6ffXtXKZXKrVJwZBKsacwYAZK67Eji1SdtdAZvkuA0iJbzGbBI1WWFlkWpCUJREIZnuLUFSplrNvjBhxHr4t6EgBDAKX51CS3dolx6OM-kK_91JV3McDsm1XF54l4X4LPqx3Efzq1j16rxc8tfEkS6wOvQeIcf5CI5kyahKbu_KB9ZWtEhU2UbgAWWDH79Wpdu48hrSvnL2m8DpjGOcBTq_')` }}
          ></div>
        </div>
      </header>
      {/* Add chat UI here */}
      <main className="flex-1 grid grid-cols-[320px_1fr] overflow-hidden">
        {/* Sidebar and Messages */}
        {/* Chat Section */}
      </main>
    </div>
  );
};

export default MessageInteractionPage;
