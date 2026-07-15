import Section from "../common/Section";
import { education } from "../../data/education";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

export default function Education() {
  return (
    <Section id="education">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold">Education</h2>

        <p className="mt-4 text-gray-400">
          My academic journey and qualifications.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl">

        {/* Timeline */}

        <div className="absolute left-4 top-0 h-full w-1 rounded bg-blue-500 md:left-1/2 md:-translate-x-1/2" />

        {education.map((item, index) => (
          <div
            key={item.institution}
            className="relative mb-14 pl-12 md:pl-0"
          >
            {/* Timeline Dot */}

            <div className="absolute left-1 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 md:left-1/2 md:-translate-x-1/2">
              <FaGraduationCap />
            </div>

            <div
              className={`md:w-[45%] rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${
                index % 2 === 0
                  ? "md:mr-auto"
                  : "md:ml-auto"
              }`}
            >
              <p className="text-sm text-blue-400">
                {item.period}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {item.degree}
              </h3>

              <h4 className="mt-2 text-lg text-gray-300">
                {item.institution}
              </h4>

              <div className="mt-3 flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt />
                <span>{item.location}</span>
              </div>

              {item.gpa && (
                <div className="mt-4 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-blue-300">
                  GPA: {item.gpa}
                </div>
              )}

              {item.status && (
                <div className="mt-3 text-sm text-green-400">
                  {item.status}
                </div>
              )}

              <p className="mt-5 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}