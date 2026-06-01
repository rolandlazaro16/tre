import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-black/50 sm:flex-row sm:text-left">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p>
          Built with{" "}
          <span className="text-brand-600">Next.js</span> &amp;{" "}
          <span className="text-brand-600">TypeScript</span>
        </p>
      </div>
    </footer>
  );
}
