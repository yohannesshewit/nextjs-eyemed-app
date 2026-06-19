"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Calculator,
  Home,
  ImageIcon,
  Menu,
  Stethoscope,
  User,
  X,
} from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <>
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

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/40 px-3 py-2 shadow-lg backdrop-blur-xl dark:bg-white/5 lg:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <NavItem
                  icon={item.icon}
                  label={item.label}
                  active={pathname === item.href}
                />
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <ModeToggle />

            {/* USER CARD */}
            <div className="hidden items-center gap-3 rounded-full border border-white/20 bg-white/40 px-3 py-2 backdrop-blur-xl dark:bg-white/5 md:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <User className="h-5 w-5 text-blue-700 dark:text-blue-300" />
              </div>

              <div className="leading-tight">
                <p className="text-sm font-semibold text-black dark:text-white">
                  Yohannes.T
                </p>
                <span className="text-xs text-muted-foreground">
                  Optometrist
                </span>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border p-2 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 dark:bg-[#0B1120] lg:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6 justify-between">
          {/* TOP + NAV */}
          <div>
            {/* TOP */}
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold">Menu</h2>

              <button
                onClick={() => setSidebarOpen(false)}
                className="rounded-lg border p-2"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {/* MOBILE NAV */}
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                >
                  <div
                    className={`flex items-center gap-3 rounded-xl px-4 py-4 text-sm font-medium transition
                    ${
                      pathname === item.href
                        ? "bg-red-600 text-white"
                        : "hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* USER INFO */}
          <div className="mb-8 flex items-center gap-3 rounded-2xl border p-4  ">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <User className="h-6 w-6 text-blue-700 dark:text-blue-300" />
            </div>

            <div>
              <p className="font-semibold">Yohannes.T</p>
              <span className="text-sm text-muted-foreground">Optometrist</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function NavItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition
      ${
        active
          ? "bg-red-600 text-white shadow-lg"
          : "text-gray-700 dark:text-gray-200 hover:scale-110"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
