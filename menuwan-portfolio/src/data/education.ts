export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  gpa?: string;
  status?: string;
}

export const education: Education[] = [
  {
    institution: "Edith Cowan University",
    degree: "Bachelor of Computer Science (Software Engineering)",
    period: "2024 - 2026",
    location: "Sri Lanka",
    gpa: "3.35 / 4.0",
    status: "Degree Completed • Graduation Pending",
    description:
      "Completed the Bachelor of Computer Science majoring in Software Engineering, gaining experience in software engineering, full-stack web development, mobile application development, databases, AI, machine learning, and software project management.",
  },
  {
    institution: "Australian College of Business & Technology (ACBT) / Edith Cowan College",
    degree: "University Foundation of Science (Computing/IT)",
    period: "2023 - 2024",
    location: "Sri Lanka",
    description:
      "Successfully completed the university foundation program in Computing and Information Technology, preparing for undergraduate studies in Computer Science.",
  },
];