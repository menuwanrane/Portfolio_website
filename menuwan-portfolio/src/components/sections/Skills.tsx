import Section from "../common/Section";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold">
          Technical Skills
        </h2>

        <p className="mt-4 text-gray-400">
          Technologies and tools I use to build modern software.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="mb-6 text-xl font-semibold text-blue-400">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {category.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center rounded-xl border border-white/10 bg-[#111827] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-[#1f2937]"
                  >
                    <Icon className="mb-3 text-3xl text-blue-400" />
                    <span className="text-center text-sm">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}