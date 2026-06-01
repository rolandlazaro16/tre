import type { ReactNode } from "react";
import { skills, experienceItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/About";

const iconMap: Record<string, ReactNode> = {
  graphics: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  business: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  software: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience & Skills"
          title="Professional Expertise"
          subtitle="Graphics, business management, and software engineering—supported by hands-on IT maintenance and network infrastructure work."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="group rounded-2xl border border-black/10 bg-white p-7 transition hover:border-brand-500/40 hover:bg-brand-50/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition group-hover:bg-brand-200 group-hover:text-brand-700">
                {iconMap[skill.icon]}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-black">{skill.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                {skill.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Professional Experience
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {experienceItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-brand-500/30 bg-brand-50 p-6 sm:p-7"
              >
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
