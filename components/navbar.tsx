"use client";

import { useState } from "react";

import {
  BookOpen,
  Calculator,
  Home,
  ImageIcon,
  Menu,
  Stethoscope,
  User,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const navItems = [
    {
      label: "Home",
      icon: <Home size={18} />,
      href: "/",
    },
    {
      label: "Calculators",
      icon: <Calculator size={18} />,
      href: "/calculators",
    },
    {
      label: "Consult",
      icon: <Stethoscope size={18} />,
      href: "/consult",
    },
    {
      label: "Atlas",
      icon: <ImageIcon size={18} />,
      href: "/image-atlas",
    },
    {
      label: "Library",
      icon: <BookOpen size={18} />,
      href: "/library",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-2xl dark:bg-[#0B1120]/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={48}
            height={48}
            className="rounded-full bg-blue-600 p-1 shadow-lg dark:bg-blue-500"
          />

          <div className="leading-tight">
            <h1 className="text-lg font-bold text-blue-900 dark:text-blue-400">
              EyeMed Library
            </h1>

            <p className="text-xs text-muted-foreground">
              Ophthalmology Resources
            </p>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/40 px-3 py-2 shadow-lg backdrop-blur-xl dark:bg-white/5 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <NavItem
                icon={item.icon}
                label={item.label}
                active={active === item.label}
                onClick={() => setActive(item.label)}
              />
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 ">
          <ModeToggle />

          <div className="hidden items-center gap-3 rounded-full border border-white/20 bg-white/40 px-3 py-2 backdrop-blur-xl dark:bg-white/5 md:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <User className="h-5 w-5 text-blue-700 dark:text-blue-300" />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-semibold text-black dark:text-white">
                Yohannes.T
              </p>

              <span className="text-xs text-muted-foreground">Optometrist</span>
            </div>
          </div>

          <button className="rounded-xl border p-2 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium 
      ${
        active
          ? "bg-red-600 text-white shadow-lg"
          : "text-gray-700  dark:text-gray-200 hover:scale-110 "
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
