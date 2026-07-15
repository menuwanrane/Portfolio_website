import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";
import { profile } from "../../data/profile";
import profileImage from "../../assets/images/profile.png";
import resumePdf from "../../assets/resume/Don Menuwan Ranaweera resume.pdf";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 py-20 md:flex-row md:px-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            Pending Graduate
          </span>

          <h2 className="mt-8 text-3xl text-gray-300">
            Hi, I'm
          </h2>

          <h1 className="mt-2 text-5xl font-extrabold leading-tight md:text-7xl">
            <span className="text-white">Menuwan</span>

            <br />

            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ranaweera
            </span>
          </h1>

          <div className="mt-6 text-2xl font-semibold text-blue-300 md:text-3xl">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "AI/ML Developer",
                2000,
                "React Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            {profile.intro}
          </p>

          {/* Badges */}
          <div className="mt-10 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <FaGraduationCap />
              <span>{profile.degree}</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <FaStar className="text-yellow-400" />
              <span>GPA {profile.gpa}</span>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              {profile.status}
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={resumePdf}
              download
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-semibold transition hover:scale-105"
            >
              <FaDownload />
              Download CV
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-7 py-4 transition hover:bg-white/10"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-7 py-4 transition hover:bg-white/10"
            >
              <FaEnvelope />
              Contact
            </a>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-1 justify-center"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-30" />

            <img
              src={profileImage}
              alt="Menuwan Ranaweera"
              className="relative h-72 w-72 rounded-full border-4 border-blue-500 object-cover shadow-2xl md:h-[420px] md:w-[420px]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}