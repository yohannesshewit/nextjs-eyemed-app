import { gallery } from "@/data/images";
import {
  Eye,
  ArrowRight,
  BookOpen,
  ScanEye,
  Microscope,
  Glasses,
  Gauge,
  Ruler,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";

const tools = [
  {
    title: "IOL Power",
    subtitle: "Calculator",
    icon: Eye,
    color: {
      icon: "text-emerald-500",
      iconBg: "bg-emerald-100/80",
      title: "text-emerald-500",
      button: "bg-emerald-500 hover:bg-emerald-600",
      glow: "group-hover:shadow-emerald-500/30",
    },
  },
  {
    title: "Refractive Error",
    subtitle: "Evaluator",
    icon: Glasses,
    color: {
      icon: "text-cyan-500",
      iconBg: "bg-cyan-100/80",
      title: "text-cyan-500",
      button: "bg-cyan-500 hover:bg-cyan-600",
      glow: "group-hover:shadow-cyan-500/30",
    },
  },
  {
    title: "Glaucoma Risk",
    subtitle: "Assessment",
    icon: Gauge,
    color: {
      icon: "text-red-500",
      iconBg: "bg-red-100/80",
      title: "text-red-500",
      button: "bg-red-500 hover:bg-red-600",
      glow: "group-hover:shadow-red-500/30",
    },
  },
  {
    title: "Accommodation",
    subtitle: "Calculator",
    icon: Ruler,
    color: {
      icon: "text-slate-500",
      iconBg: "bg-slate-100/80",
      title: "text-slate-500",
      button: "bg-slate-500 hover:bg-slate-600",
      glow: "group-hover:shadow-slate-500/30",
    },
  },
];

const libraryItems = [
  {
    title: "Retina Diseases",
    desc: "Learn retinal disorders and diagnosis",
  },
  {
    title: "Optic Nerve Atlas",
    desc: "High-quality ophthalmic references",
  },
  {
    title: "Clinical Refraction",
    desc: "Refraction notes and tutorials",
  },
];

export default function FeaturesSection() {
  return (
    <section className="mx-6 max-w-7xl px-4 py-6 space-y-6">
      {/* Popular Tools */}
      <div className="rounded-3xl border bg-white/80 dark:bg-black/80 backdrop-blur-xl p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Popular Calculators </h2>
            <p className="text-sm text-muted-foreground">
              Fast ophthalmology utilities
            </p>
          </div>

          <Link
            href="/calculators"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border bg-green-500/10  p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Icon className={`h-6 w-6 ${tool.color.icon}`} />
                </div>

                <p
                  className={`font-semibold leading-tight ${tool.color.title}`}
                >
                  {tool.title}
                </p>

                <p className="text-sm text-muted-foreground">{tool.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Atlas + Library */}
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 w-full">
        {/* Image Atlas */}
        <div className="rounded-[32px] border  bg-violet-500/10 p-6 shadow-sm backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold ">Image Atlas</h2>

              <p className="text-sm text-muted-foreground">
                Clinical ophthalmic references
              </p>
            </div>

            <Link
              href="/image-atlas"
              className="text-sm font-medium text-blue-600 hover:underline "
            >
              View all
            </Link>
          </div>

          {/* Mobile = grid | Large screen = row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row gap-4">
            {gallery.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-white/20 bg-white/90 dark:bg-black/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl xl:flex-1"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    priority
                    className="h-20 md:h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <p className="font-semibold  line-clamp-1 text-sm md:text-16px">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Library */}
        <div className="rounded-[32px] border bg-orange-500/10 p-6 shadow-sm backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold ">Library</h2>

              <p className="text-sm text-muted-foreground">
                Educational ophthalmology content
              </p>
            </div>

            <Link
              href="/library"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="space-y-4">
            {libraryItems.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-3xl border bg-white dark:bg-black p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold ">{item.title}</p>

                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
