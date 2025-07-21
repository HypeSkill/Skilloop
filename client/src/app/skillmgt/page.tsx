import Head from "next/head";

export default function ManageSkillsPage() {
  return (
    <>
      <Head>
        <title>Skilloop - Manage Skills</title>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
        <header className="flex items-center justify-between border-b border-gray-200 px-10 py-3 shadow-sm bg-white">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-gray-900">
              <div className="text-[var(--primary-color)] w-6 h-6">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Skilloop</h2>
            </div>
            <nav className="flex items-center gap-6">
              {['Explore', 'My Network', 'Jobs', 'Messages', 'Notifications'].map((item) => (
                <a
                  key={item}
                  className="text-sm font-medium text-gray-600 hover:text-[var(--primary-color)] transition-colors"
                  href="#"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <label className="relative flex items-center">
              <div className="absolute left-3 text-gray-400">
                🔍
              </div>
              <input
                className="form-input rounded-full border-gray-300 bg-gray-100 pl-10 pr-4 py-2 text-sm focus:bg-white focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] transition-colors"
                placeholder="Search"
              />
            </label>
            <button className="flex items-center justify-center size-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
              ☰
            </button>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white shadow-md"
              style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDY...)' }}
            />
          </div>
        </header>

        <main className="flex-1 bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Manage Your Skills</h1>
              <button className="flex items-center gap-2 rounded-full bg-[var(--primary-color)] text-white px-6 py-3 text-sm font-bold shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
                ➕ <span>Add New Skill</span>
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Current Skills</h3>
              <div className="space-y-4">
                {[{
                  name: 'Python',
                  description: 'Proficient in Python programming language.',
                  bg: 'bg-blue-100 text-[var(--primary-color)]',
                }, {
                  name: 'Graphic Design',
                  description: 'Experienced in graphic design using Adobe Creative Suite.',
                  bg: 'bg-purple-100 text-purple-600',
                }, {
                  name: 'Project Management',
                  description: 'Skilled in project management methodologies.',
                  bg: 'bg-orange-100 text-orange-600',
                }].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[var(--primary-color)] hover:bg-gray-50 transition-all"
                  >
                    <div className={`flex items-center justify-center rounded-xl ${skill.bg} shrink-0 size-14`}>
                      📘
                    </div>
                    <div className="flex-grow">
                      <p className="text-base font-semibold text-gray-800">{skill.name}</p>
                      <p className="text-sm text-gray-500">{skill.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors">
                        ✏️
                      </button>
                      <button className="p-2 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-600 transition-colors">
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
