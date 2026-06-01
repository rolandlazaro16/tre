import { profile, heroStats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-3xl animate-fade-in">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-50 px-4 py-1.5 text-sm text-brand-700">
            <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
            Born in {profile.birthplace}
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mt-2 text-xl font-medium text-black/80 sm:text-2xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/60">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
            >
              Contact me
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-full border border-black/20 px-7 py-3.5 text-sm font-semibold text-black transition hover:border-brand-500 hover:bg-brand-50"
            >
              View my skills
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-black/10 bg-black/5 p-5"
            >
              <p className="text-sm text-black/60">{stat.label}</p>
              <p className="mt-1 text-lg font-semibold text-black">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
