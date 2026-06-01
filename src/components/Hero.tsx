import Image from "next/image";
import { profile, heroStats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-28 pb-20">
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
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(280px,360px)] lg:gap-16">
          <div className="order-2 max-w-3xl animate-fade-in lg:order-1">
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

          <div
            className="order-1 flex justify-center animate-slide-up lg:order-2 lg:justify-end"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-400/30 via-brand-500/20 to-brand-700/25 blur-md"
                aria-hidden
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/90 bg-white shadow-2xl shadow-black/10 ring-1 ring-black/[0.06]">
                <Image
                  src={profile.image}
                  alt={profile.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 360px"
                  className="object-cover object-[center_22%] contrast-[1.02] saturate-[1.03]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10"
                  aria-hidden
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-black/50">
                {profile.title}
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid gap-4 sm:grid-cols-3 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-black/10 bg-white p-5"
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
