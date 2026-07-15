import { socials } from "../../data/socials";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-10">

        {/* Name */}

        <h2 className="text-2xl font-bold">
          Menuwan Ranaweera
        </h2>

        <p className="mt-3 text-center text-gray-400">
          Software Engineer • Full Stack Developer • AI/ML Enthusiast
        </p>

        {/* Social Icons */}

        <div className="mt-8 flex gap-6">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/10"
                aria-label={social.name}
              >
                <Icon className={`text-xl ${social.color}`} />
              </a>
            );
          })}
        </div>

        {/* Divider */}

        <div className="my-8 h-px w-full bg-white/10" />

        {/* Bottom */}

        <div className="flex w-full flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Menuwan Ranaweera. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with React, TypeScript & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}