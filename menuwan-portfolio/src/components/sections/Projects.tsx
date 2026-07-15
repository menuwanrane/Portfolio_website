import Section from "../common/Section";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-4 text-gray-400">
          A selection of projects showcasing my skills in software engineering,
          AI, web, and mobile development.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:border-blue-500"
          >
            <div className="grid md:grid-cols-2">

              <div className="h-52 md:h-[22.5rem] overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="p-8">

                <span className="text-sm text-blue-400">
                  {project.category}
                </span>

                <h3 className="mt-2 text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 text-gray-400 leading-8">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 hover:bg-blue-700"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 hover:bg-white/10"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}