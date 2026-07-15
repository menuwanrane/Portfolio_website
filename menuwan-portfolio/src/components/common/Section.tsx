import { type ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="max-w-7xl mx-auto px-6 py-24 md:px-10"
    >
      {children}
    </section>
  );
}