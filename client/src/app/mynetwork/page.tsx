import Head from "next/head";

export default function MyNetworkPage() {
  return (
    <>
      <Head>
        <title>Skilloop - My Network</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <link rel="icon" href="data:image/x-icon;base64," type="image/x-icon" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" defer></script>
      </Head>

      <div className="flex h-screen font-[Inter] bg-gray-50 text-[var(--text-primary)]">
        <aside className="w-64 flex-shrink-0 bg-white border-r border-[var(--border-color)] p-6 flex flex-col justify-between">
          <div>
            <a className="flex items-center gap-2 mb-10" href="#">
              <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8 12.75H13.2C13.5866 12.75 13.9583 12.592 14.225 12.325C14.4917 12.0583 14.65 11.6866 14.65 11.3V9.9C14.65 9.51341 14.4917 9.14175 14.225 8.875C13.9583 8.60825 13.5866 8.45 13.2 8.45H10.8C10.4134 8.45 10.0417 8.60825 9.77501 8.875C9.50826 9.14175 9.35001 9.51341 9.35001 9.9V11.3C9.35001 11.6866 9.50826 12.0583 9.77501 12.325C10.0417 12.592 10.4134 12.75 10.8 12.75ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <h1 className="text-2xl font-bold text-[var(--primary-color)]">Skilloop</h1>
            </a>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", active: false },
                { label: "My Network", active: true },
                { label: "Learn", active: false },
                { label: "Jobs", active: false },
                { label: "Messages", active: false },
              ].map(({ label, active }) => (
                <a
                  key={label}
                  href="#"
                  className={`nav-link ${active ? "active" : ""}`}
                >
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="w-full bg-white border-b border-[var(--border-color)] px-6 flex items-center justify-end h-20">
            <div className="relative group">
              <button className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5oTtXtyuTbRMWYJWgTQRx1JyQ_15DE68kUMFtWw-GzQmUShYqzjXE2r3fgcixNE9HBL4yKqOUW033hLT7QMQ2rVEow3q-FglIeJF_CFGbj2nkaJWZbhe9-C-YeY6-ctUd4A-7dRUk3d5XtiZTRTx0H1phFmm_PCJpUn5U8vb0-YKPCejaBbmQ1rAsQ0cV7Pa8dHzkfaHQR6k90V7N_8MCexSSuqv-Lb1yzzhaO09qhrv0tagaz8I7DdZVn_IY01Rjsqu4-IOGV2-Y')" }}
                />
              </button>
            </div>
          </header>

          <main className="flex-1 p-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">My Network</h1>
                <p className="text-lg text-[var(--text-secondary)]">
                  Manage your professional connections and grow your network.
                </p>
              </header>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--text-secondary)]">
                  🔍
                </div>
                <input
                  type="text"
                  placeholder="Search connections by name or skill"
                  className="w-full h-12 pl-12 pr-4 rounded-full bg-white border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-shadow"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Ethan Harper", "Olivia Bennett", "Noah Thompson", "Ava Mitchell", "Liam Foster", "Isabella Coleman", "Jackson Hayes", "Mia Bennett"].map(
                  (name, index) => (
                    <div
                      key={index}
                      className="user-card flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16"
                          style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/random-${index}')`,
                          }}
                        />
                        <div>
                          <h3 className="text-lg font-bold text-[var(--text-primary)]">{name}</h3>
                          <p className="text-sm text-[var(--text-secondary)]">Role / Skill</p>
                        </div>
                      </div>
                      <button className="shrink-0 h-10 px-5 bg-[var(--primary-color)] text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
                        Message
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
