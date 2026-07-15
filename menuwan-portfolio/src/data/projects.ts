export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo?: string;
}
import weightTrackerImg from "../assets/images/weight-tracker.png";
import bmdImg from "../assets/images/bmd.png";
import g5scholixImg from "../assets/images/g5scholix.png";
import nulldleImg from "../assets/images/nulldle.png";
import ticTacToeImg from "../assets/images/tictactoe.png";
export const projects: Project[] = [
  {
    title: "Bone Mineral Density Prediction",
    category: "AI / Machine Learning",
    description:
      "Developed a machine learning and deep learning system to predict Bone Mineral Density from hand X-ray images using CNN and Random Forest Regression.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "NumPy",
    ],
    image: bmdImg,
    github: "https://github.com/menuwanrane/BMD_Prediction",
  },

  {
    title: "MyQuote",
    category: "Full Stack",
    description:
      "Quote management application with authentication, categories, and public/private visibility.",
    technologies: [
      "Ruby on Rails",
      "SQLite",
      "JavaScript",
      "HTML",
      "CSS",
      "Docker",
    ],
    image: "/projects/myquote.png",
    github: "https://github.com/menuwanrane/MYQUOTERails",
  },

  {
    title: "G5Scholix",
    category: "AI Education Platform",
    description:
      "Multilingual Grade 5 learning platform with quizzes, AI evaluation, and voice-to-text.",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Tailwind",
    ],
    image: g5scholixImg,
    github: "https://github.com/Sihathnithijaya/AI-Powered-Multilingual-Interactive-Learning-Management-System-for-Grade-5-Students",
  },

  {
    title: "Tic Tac Toe",
    category: "Mobile App",
    description:
      "Flutter application with multiple difficulty levels and game history.",
    technologies: ["Flutter", "Dart"],
    image: ticTacToeImg,
    github: "https://github.com/menuwanrane/TIC-TAC-TOE",
  },

  {
    title: "Nulldle",
    category: "Mobile App",
    description:
      "Word puzzle game inspired by Wordle built using Flutter.",
    technologies: ["Flutter", "Dart", "MVVM"],
    image: nulldleImg,
    github: "https://github.com/menuwanrane/Nulldle",
  },
  {
  title: "Weight Tracker",
  category: "Mobile App",
  description:
    "Developed a lightweight offline weight tracking application using Flutter. The app enables users to record, monitor, and visualize their weight over time with a simple and intuitive interface. All data is stored locally on the device, allowing users to access their progress without an internet connection.",
  technologies: [
    "Flutter",
    "Dart",
    "SQLite"
  ],
  image: weightTrackerImg,
  github: "https://github.com/menuwanrane/weight_tracker",
},
];