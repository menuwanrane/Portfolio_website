import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFastapi,
  SiRubyonrails,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiTensorflow,
  SiOpencv,
  SiFlutter,
  SiDocker,
  SiGit,
  SiGithub,
  SiAndroidstudio,
} from "react-icons/si";

import {
  FaUsers,
  FaComments,
  FaLightbulb,
  FaClock,
  FaSyncAlt,
} from "react-icons/fa";

import { VscCode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Ruby on Rails", icon: SiRubyonrails },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiPython },
      { name: "OpenCV", icon: SiOpencv },
      { name: "NumPy", icon: SiPython },
      { name: "Pandas", icon: SiPython },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", icon: SiFlutter },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "VS Code", icon: VscCode },
      { name: "Android Studio", icon: SiAndroidstudio },
    ],
  },
  {
  title: "Soft Skills",
    skills: [
        {
        name: "Teamwork",
        icon: FaUsers,
        },
        {
        name: "Communication",
        icon: FaComments,
        },
        {
        name: "Problem Solving",
        icon: FaLightbulb,
        },
        {
        name: "Time Management",
        icon: FaClock,
        },
        {
        name: "Adaptability",
        icon: FaSyncAlt,
        },
    ],
    },
];