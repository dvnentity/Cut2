import { motion } from "framer-motion";

// Paste your real links here later.
const INSTALL_ISO_URL = "https://example.com/frontieros.iso";
const GITHUB_URL = "https://github.com/your-username/your-frontieros-repo";
const SOURCE_CODE_URL = "https://github.com/your-username/your-frontieros-repo/tree/main/src";
const DOCS_URL = "https://your-obsidian-domain.example";

const quickLinks = [
  {
    label: "GitHub Repository",
    href: GITHUB_URL,
    description: "Track releases, issues, and roadmaps.",
  },
  {
    label: "Source Code",
    href: SOURCE_CODE_URL,
    description: "Jump straight into the src tree.",
  },
  {
    label: "Documentation",
    href: DOCS_URL,
    description: "Open your Obsidian docs domain.",
  },
];

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <motion.img
          src="/images/fos-hero-frost.png"
          alt="Frozen frontier landscape"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08, opacity: 0.65 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.35),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(191,219,254,0.22),transparent_35%)]" />

        <motion.div
          className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-cyan-200/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-100/90">FOS</p>
            <h1 className="mt-3 text-6xl font-semibold tracking-tight text-cyan-50 sm:text-7xl md:text-8xl">
              FrontierOS
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200/95 sm:text-xl">
              A clean launch surface for your frozen-core distro. Install the ISO, then jump straight to
              the repo, source, and docs.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <motion.a
                href={INSTALL_ISO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-100"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Download ISO
              </motion.a>
              <motion.a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-cyan-100/40 bg-slate-900/30 px-6 py-3 text-sm font-semibold text-cyan-50 backdrop-blur-sm transition-colors hover:bg-slate-900/50"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Open GitHub
              </motion.a>
            </div>

            <p className="mt-5 text-sm text-cyan-100/80">Update your links at the top of src/App.tsx.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <h2 className="text-2xl font-semibold text-cyan-50 sm:text-3xl">Project Links</h2>
        <p className="mt-2 text-slate-300">Everything users need after install, in one clean path.</p>

        <div className="mt-8 divide-y divide-cyan-100/15 border-y border-cyan-100/15">
          {quickLinks.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 py-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div>
                <h3 className="text-lg font-medium text-cyan-50 transition-colors group-hover:text-cyan-200">
                  {item.label}
                </h3>
                <p className="mt-1 text-sm text-slate-300">{item.description}</p>
              </div>
              <span className="text-sm font-medium text-cyan-200/90">Visit</span>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
