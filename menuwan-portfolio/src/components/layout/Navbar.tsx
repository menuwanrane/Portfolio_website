export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a href="#" className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
            <span className="text-2xl font-extrabold text-white">
              MR
            </span>
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Menuwan Ranaweera
            </h1>

            <p className="text-xs text-gray-400">
              Software Engineer
            </p>
          </div>

        </a>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#about" className="transition hover:text-blue-400">
            About
          </a>

          <a href="#skills" className="transition hover:text-blue-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-blue-400">
            Projects
          </a>

          <a href="#education" className="transition hover:text-blue-400">
            Education
          </a>

          <a href="#resume" className="transition hover:text-blue-400">
            Resume
          </a>

          <a href="#contact" className="transition hover:text-blue-400">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}