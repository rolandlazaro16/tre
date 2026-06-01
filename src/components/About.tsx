import { profile, quickFacts, aboutParagraphs } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle={profile.aboutSubtitle}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 text-black/60 leading-relaxed">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-black/10 bg-black/5 p-8">
            <h3 className="text-lg font-semibold text-black">Quick Facts</h3>
            <dl className="mt-6 space-y-4">
              {quickFacts.map((item) => (
                <div
                  key={item.term}
                  className="flex flex-col gap-0.5 border-b border-black/10 pb-4 last:border-0 last:pb-0 sm:flex-row sm:justify-between"
                >
                  <dt className="text-sm text-black/50">{item.term}</dt>
                  <dd className="text-sm font-medium text-black sm:max-w-[60%] sm:text-right">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-black sm:text-4xl">{title}</h2>
      <p className="mt-3 text-black/60">{subtitle}</p>
    </div>
  );
}

export { SectionHeading };
