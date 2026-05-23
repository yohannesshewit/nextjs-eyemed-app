import { BookOpen, Calculator, ImageIcon, Stethoscope } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "Calculators",
    description: "Essential ophthalmology calculators for clinical practice.",
    icon: Calculator,
    href: "/calculators",
    button: "Explore",
    stats: "5+ Tools",
    color: {
      icon: "text-emerald-600",
      iconBg: "bg-emerald-100 dark:bg-emerald-500/10",
      title: "text-emerald-600",
      button: "bg-emerald-500 hover:bg-emerald-600",
    },
  },
  {
    title: "Consult Time",
    description:
      "Connect with professionals for personalized medical guidance.",
    icon: Stethoscope,
    href: "/consult",
    button: "Consult",
    stats: "24/7 Access",
    color: {
      icon: "text-sky-600",
      iconBg: "bg-sky-100 dark:bg-sky-500/10",
      title: "text-sky-600",
      button: "bg-sky-500 hover:bg-sky-600",
    },
  },
  {
    title: "Image Atlas",
    description:
      "Browse high-quality anatomical and clinical ophthalmic images.",
    icon: ImageIcon,
    href: "/image-atlas",
    button: "Browse",
    stats: "50+ Images",
    color: {
      icon: "text-violet-600",
      iconBg: "bg-violet-100 dark:bg-violet-500/10",
      title: "text-violet-600",
      button: "bg-violet-500 hover:bg-violet-600",
    },
  },
  {
    title: "Library",
    description:
      "Comprehensive ophthalmology knowledge and learning resources.",
    icon: BookOpen,
    href: "/library",
    button: "Open",
    stats: "2000+ Topics",
    color: {
      icon: "text-orange-600",
      iconBg: "bg-orange-100 dark:bg-orange-500/10",
      title: "text-orange-600",
      button: "bg-orange-500 hover:bg-orange-600",
    },
  },
];

export default function HeroSection() {
  return (
    <section className="mt-8 px-4 sm:px-6 lg:px-10">
      {/* mobile horizontal scroll */}
      <div
        className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3
          sm:grid sm:grid-cols-2 sm:overflow-visible
          xl:grid-cols-4
          scroll-smooth scrollbar-hide
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="
                group relative overflow-hidden

                min-w-[78%]
                snap-center
                sm:min-w-0

                rounded-3xl
                border border-black/10 dark:border-white/10

                bg-white/70 dark:bg-zinc-900/70
                backdrop-blur-xl

                p-5
                shadow-lg

                hover:-translate-y-1
                hover:shadow-xl

                transition-all duration-300
              "
            >
              {/* subtle glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
              </div>

              {/* top */}
              <div className="relative z-10 flex items-start justify-between">
                <div
                  className={`
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    ${card.color.iconBg}
                  `}
                >
                  <Icon className={`h-7 w-7 ${card.color.icon}`} />
                </div>

                <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
              </div>

              {/* content */}
              <div className="relative z-10 mt-5">
                <h2
                  className={`
                    text-lg font-semibold
                    ${card.color.title}
                  `}
                >
                  {card.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </div>

              {/* footer */}
              <div className="relative z-10 mt-6 flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {card.stats}
                </span>

                <Link
                  href={card.href}
                  className={`
                    inline-flex items-center justify-center
                    rounded-xl px-4 py-2

                    text-sm font-medium text-white

                    transition-all duration-300
                    hover:scale-105

                    ${card.color.button}
                  `}
                >
                  {card.button}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
