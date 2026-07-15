export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-[#050816]/70">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

        <h1 className="text-xl font-bold">
          Menuwan
        </h1>

        <nav className="hidden md:flex gap-8 text-sm">

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#education">Education</a>

          <a href="#contact">Contact</a>

        </nav>

      </div>
    </header>
  );
}