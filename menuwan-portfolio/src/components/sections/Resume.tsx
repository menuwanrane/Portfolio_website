import Section from "../common/Section";
import { FaDownload, FaEye } from "react-icons/fa";
import resumePdf from "../../assets/resume/Don Menuwan Ranaweera resume.pdf";

export default function Resume() {
  return (
    <Section id="resume">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold">Resume</h2>

        <p className="mt-4 text-gray-400">
          Download my resume or preview it directly in your browser.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {/* PDF Preview */}

        <div className="hidden lg:block lg:col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5">

          <iframe
            src={resumePdf}
            className="h-[700px] w-full"
            title="Resume Preview"
          />

        </div>

        {/* Actions */}

        <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-bold">
            My Resume
          </h3>

          <p className="mt-4 text-gray-400 leading-7">
            Download my latest resume to learn more about my education,
            technical skills, projects, and experience.
          </p>

          <a
            href={resumePdf}
            download
            className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 font-semibold transition hover:scale-105"
          >
            <FaDownload />
            Download CV
          </a>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-3 rounded-xl border border-white/10 px-6 py-4 transition hover:bg-white/10"
          >
            <FaEye />
            Open in New Tab
          </a>

        </div>

      </div>
    </Section>
  );
}