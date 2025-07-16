import React from "react";

export default function QualificationsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-10 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-slate-800">
              <div className="h-8 w-8 text-blue-600">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold">Skilloop</h2>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              {[
                "Home",
                "Explore",
                "My Network",
                "Jobs",
                "Messages",
                "Notifications",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-slate-500 hover:text-blue-600"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <input
                className="block w-full rounded-full border-0 bg-gray-100 py-2 pl-10 pr-3 text-sm text-slate-800 placeholder:text-slate-500 focus:bg-white focus:ring-1 focus:ring-blue-600"
                id="search"
                name="search"
                placeholder="Search"
                type="text"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-slate-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              className="h-10 w-10 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbJtabT1dk3g5LA7HD3rgwpn8K4kxxjnKfeEC8HF0RiThRd8LlaJyHDWLFsCWdbqSfFAzWfvYNd-UYK00Gm0grHB31OMbBCKiFsAON9L2zkiYkQcwP3bmJi1iOYHfXZefulcpt-43IHYWQA1QWwj6H90zK8pdgkx29TYCp-g6qFGHFNlhjpX_B_o_THClWgptWxn-NTDQ1IrWkSy0W3nHEYXdOTY6aPF4BpBo9kSjM_ARC9dAsnpW0G5T-AhHObUzUn5KJpm3lYGZf')",
              }}
            ></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-slate-800">
              Manage Qualifications
            </h1>
            <p className="mt-2 text-lg text-slate-500">
              Add, edit, or remove your professional qualifications to showcase your
              expertise on Skilloop.
            </p>
          </div>

          {/* You can reuse the Qualification form component from this section forward */}
          {/* For brevity, I've left it out here but will provide it in the next file if needed */}
        </div>
      </main>
    </div>
  );
}
