import Section from "../common/Section";
import { socials } from "../../data/socials";

export default function Contact() {
  return (
    <Section id="contact">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {socials.map((social) => {
            const Icon = social.icon;

            return (
            <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
                <Icon className={`mb-4 text-4xl ${social.color}`} />

                <h3 className="text-xl font-semibold">
                {social.name}
                </h3>

                <p className="mt-3 break-all text-gray-400">
                {social.display}
                </p>
            </a>
            );
        })}
        </div>
    </Section>
  );
}