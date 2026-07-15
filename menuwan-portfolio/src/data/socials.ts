import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export interface Social {
  name: string;
  icon: React.ElementType;
  url: string;
  display: string;
  color: string;
}

export const socials: Social[] = [
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:d.menuwanrnaweera@gmail.com",
    display: "d.menuwanrnaweera@gmail.com",
    color: "text-blue-400",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/menuwanrane",
    display: "github.com/menuwanrane",
    color: "text-white",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/menuwan-ranweera",
    display: "linkedin.com/in/menuwan-ranweera",
    color: "text-blue-500",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/94764419033",
    display: "+94 76 441 9033",
    color: "text-green-500",
  },
];