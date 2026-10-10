
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Cpu,
  Cog,
  Radio,
  Satellite,
  Telescope,
} from "lucide-react";
import RoverViewer from "@/components/RoverViewer";
import Countdown from "@/components/Countdown";

const departments = [
  {
    icon: Cog,
    name: "Mechanical",
    description:
      "Design the chassis, suspension, wheels, and robotic mechanisms.",
    tag: "BUILD",
  },
  {
    icon: Cpu,
    name: "Software & Embedded Systems",
    description:
      "Develop autonomous navigation, computer vision, and rover control.",
    tag: "CODE",
  },
  {
    icon: Radio,
    name: "Electrical & Radio Systems",
    description:
      "Bring the rover to life with circuits, sensors, and communications.",
    tag: "CONNECT",
  },
  {
    icon: Telescope,
    name: "Science & Mission",
    description:
      "Turn exploration goals into experiments and mission strategies.",
    tag: "EXPLORE",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090D14] text-white">
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-400/30 bg-orange-500/10">
            <Satellite className="text-orange-400" size={22} />
          </div>
          <div>
            <p className="text-sm font-bold tracking-widest">
              NKU ROVER
            </p>
            <p className="text-[10px] tracking-[0.2em] text-slate-400">
              UNIVERSITY ROVER CHALLENGE
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#mission" className="hover:text-orange-300">
            The Mission
          </a>
          <a href="#teams" className="hover:text-orange-300">
            Departments
          </a>
          <a href="#recruitment" className="hover:text-orange-300">
            Recruitment
          </a>
        </div>

        <a
          href="#recruitment"
          className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-400"
        >
          Join the Crew ↗
        </a>
      </nav>

      <section className="relative mx-auto grid max-w-7xl items-center gap-4 px-6 pb-14 pt-12 lg:min-h-[620px] lg:grid-cols-2 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(190,78,39,0.16),transparent_50%)]" />

        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/5 px-4 py-2 text-xs tracking-wide text-orange-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
            NKU STUDENT ENGINEERING TEAM
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            YOUR NEXT
            <br />
            <span className="text-orange-400">MISSION</span>
            <br />
            STARTS HERE.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
            Design it. Build it. Compete.
            Join Northern Kentucky University&apos;s rover team
            and help engineer the next generation of rovers.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#recruitment"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-black transition hover:bg-orange-400"
            >
              Become an Engineer
              <ArrowRight size={18} />
            </a>
            <a
              href="#mission"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm text-white transition hover:bg-white/5"
            >
              Explore the Mission
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-wide text-slate-500">
            <span>01 / ENGINEER</span>
            <span>02 / INNOVATE</span>
            <span>03 / EXPLORE</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400/10 sm:h-96 sm:w-96" />
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 sm:h-80 sm:w-80" />
          <RoverViewer />
          <div className="absolute right-0 top-8 hidden rounded-lg border border-white/10 bg-[#111722]/80 p-3 font-mono text-xs text-slate-400 backdrop-blur sm:block">
            <p className="text-orange-300">ROVER-01</p>
            <p className="mt-1">STATUS: READY</p>
            <p>DESTINATION: MARS</p>
          </div>
        </div>

        <a
          href="#countdown"
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs tracking-widest text-slate-500 lg:flex"
        >
          SCROLL TO DISCOVER <ArrowDown size={14} />
        </a>
      </section>

      <section
        id="countdown"
        className="border-y border-white/[0.08] bg-[#10151D] px-6 py-14"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-orange-400">
              MISSION ALERT / 001
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Recruitment Closes In
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              October 30, 2026 · Don&apos;t miss your launch window.
            </p>
          </div>
          <Countdown />
        </div>
      </section>

      <section
        id="mission"
        className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-orange-400">
            THE MISSION
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Earth is your
            <br />
            <span className="text-orange-400">testing ground.</span>
          </h2>
          <p className="mt-6 max-w-xl leading-7 text-slate-400">
            The University Rover Challenge challenges university
            teams to design and build next-generation Mars rovers
            capable of tackling realistic exploration tasks. From
            autonomous navigation to robotic operations, every
            system takes teamwork, creativity, and engineering.
          </p>
          <p className="mt-4 max-w-xl leading-7 text-slate-400">
            No matter your major or experience level, there is
            a place for curious minds ready to learn, build, and
            solve real problems.
          </p>
          <a href="https://urc.marssociety.org/" target="_blank" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-orange-300">
            Learn More About the URC <ArrowRight size={16} />
          </a>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111722] p-8 sm:p-10">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />
          <p className="relative text-xs tracking-[0.25em] text-slate-500">
            MISSION OBJECTIVE
          </p>
          <h3 className="relative mt-4 text-2xl font-bold">
            Build something bigger than yourself.
          </h3>
          <div className="relative mt-8 space-y-5">
            {[
              ["01", "Solve real engineering challenges"],
              ["02", "Collaborate across disciplines"],
              ["03", "Compete on an international stage"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="flex items-center gap-4 border-b border-white/10 pb-5"
              >
                <span className="font-mono text-sm text-orange-400">
                  {number}
                </span>
                <span className="text-sm text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="teams"
        className="border-y border-white/[0.06] bg-[#0D121A] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl lg:px-4">
          <p className="text-xs font-semibold tracking-[0.3em] text-orange-400">
            FIND YOUR SPECIALTY
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            One mission. Many disciplines.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-400">
            You don&apos;t need to know everything to get started.
            Bring your interests, learn new skills, and find your
            place on the team.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((department) => {
              const Icon = department.icon;
              return (
                <div
                  key={department.name}
                  className="group rounded-xl border border-white/10 bg-[#121923] p-6 transition hover:-translate-y-1 hover:border-orange-400/40"
                >
                  <Icon
                    size={28}
                    className="text-orange-400 transition group-hover:scale-110"
                  />
                  <p className="mt-7 text-[10px] tracking-[0.2em] text-slate-500">
                    {department.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    {department.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {department.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="recruitment" className="px-6 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-orange-400/20 bg-[#151923] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(217,107,66,0.18),transparent_60%)]" />
          <p className="relative text-xs tracking-[0.3em] text-orange-400">
            ALL SYSTEMS GO
          </p>
          <h2 className="relative mx-auto mt-5 max-w-2xl text-4xl font-bold sm:text-5xl">
            Ready to join the mission?
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Your major doesn&apos;t define your potential.
            Your curiosity does. Help NKU take its next step
            toward the stars.
          </p>
          <a
            href="https://forms.cloud.microsoft/r/j5ZwF8A4vG"
            target="_blank"
            className="relative mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-7 py-4 font-semibold text-black transition hover:bg-orange-400"
          >
            Join the Team <ArrowRight size={18} />
          </a>
          <p className="relative mt-5 text-xs text-slate-500">
            NKU · UNIVERSITY ROVER CHALLENGE
          </p>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} NKU Rover Team</span>
          <span>ENGINEER THE EXTRAORDINARY.</span>
        </div>
      </footer>
    </main>
  );
}
