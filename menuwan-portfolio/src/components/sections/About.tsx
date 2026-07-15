import Section from "../common/Section";
import {
  FaCode,
  FaGlobe,
  FaBrain,
  FaMobileAlt,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLanguage,
  FaStar,
} from "react-icons/fa";
import { profile } from "../../data/profile";

const highlights = [
  {
    icon: <FaCode size={28} />,
    title: "Software Engineering",
    description: "Building scalable and maintainable software solutions.",
  },
  {
    icon: <FaGlobe size={28} />,
    title: "Web Development",
    description: "Creating responsive and modern web applications.",
  },
  {
    icon: <FaBrain size={28} />,
    title: "AI & Machine Learning",
    description: "Developing intelligent systems using ML and deep learning.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Mobile Development",
    description: "Building cross-platform applications using Flutter.",
  },
];

export default function About() {
  return (
    <Section id="about">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-400">
          A passionate software engineer focused on creating impactful digital
          solutions.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">

        {/* Left */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold">
            Who am I?
          </h3>

          <p className="leading-8 text-gray-400">
            {profile.about}
          </p>
        </div>

        {/* Right */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

          <h3 className="mb-6 text-2xl font-semibold">
            Quick Facts
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <FaGraduationCap className="text-blue-400" />
              <span>{profile.degree}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaStar className="text-yellow-400" />
              <span>GPA {profile.gpa}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-400" />
              <span>Dankotuwa, Sri Lanka</span>
            </div>

            <div className="flex items-center gap-4">
              <FaLanguage className="text-green-400" />
              <span>English (Fluent)</span>
            </div>

          </div>

        </div>

      </div>

      {/* Highlight Cards */}

      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <div className="mb-6 text-blue-400">
              {item.icon}
            </div>

            <h3 className="mb-3 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-sm leading-7 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </Section>
  );
}