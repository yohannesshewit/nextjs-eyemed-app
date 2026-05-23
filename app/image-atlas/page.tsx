"use client";

import { atlasImages } from "@/data/atlas";
import { AtlasCategory } from "@/types/atlas";
import { BookOpen, CloudUpload, Plus, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ImageAtlasPage() {
  const categoryStyles: Record<AtlasCategory, string> = {
    cornea: "bg-blue-100 text-blue-600",
    retina: "bg-orange-100 text-orange-600",
    uvea: "bg-purple-100 text-purple-600",
    lens: "bg-yellow-100 text-yellow-600",
    vitreous: "bg-cyan-100 text-cyan-600",
    conjunctiva: "bg-pink-100 text-pink-600",
    strabismus: "bg-gray-100 text-gray-600",
    "optic nerve": "bg-red-100 text-red-600",
    "ocular adnexa": "bg-green-100 text-green-600",
  };

  const categories: (AtlasCategory | "all")[] = [
    "all",
    "conjunctiva",
    "cornea",
    "uvea",
    "lens",
    "vitreous",
    "retina",
    "optic nerve",
    "ocular adnexa",
    "strabismus",
  ];

  const totalImages = atlasImages.length;

  const totalCategories = new Set(atlasImages.map((img) => img.category)).size;

  const [search, setSearch] = useState<string>("");

  const [selectedCategory, setSelectedCategory] = useState<
    AtlasCategory | "all"
  >("all");

  const filteredImages = atlasImages.filter((image) => {
    const matchesSearch = image.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ? true : image.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen  bg-linear-to-br from-blue-400 via-white to:white dark:bg-linear-to-br dark:from-blue-400 dark:via-zinc-900 dark:to-zinc-900">
      <div className="mx-auto max-w-7xl p-4 md:p-8">
        {/* TOP BAR */}
        <div className="rounded-3xl border border-black/40 dark:border-white/40 bg-white/70 dark:bg-black/40 p-6 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* TITLE */}
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                <BookOpen className="h-8 w-8" />
              </div>

              <div>
                <h1 className="text-3xl font-bold md:text-4xl ">Image Atlas</h1>

                <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
                  Explore ophthalmic images across anatomy and diseases.
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-xl border px-5 py-3 text-sm transition hover:bg-black/10 dark:hover:bg-white/20">
                <CloudUpload className="h-4 w-4" />
                Upload
              </button>

              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm text-white transition hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                Favourite
              </button>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-6 grid gap-4 grid-cols-3">
          <div className="rounded-2xl bg-white/70 dark:bg-black/40 p-5 shadow">
            <p className="text-sm text-muted-foreground">Total Images</p>

            <h2 className="text-3xl font-bold">{totalImages}</h2>
          </div>

          <div className="rounded-2xl bg-white/70 dark:bg-black/40 p-5 shadow">
            <p className="text-sm text-muted-foreground">Categories</p>

            <h2 className="text-3xl font-bold">{totalCategories}</h2>
          </div>

          <div className="rounded-2xl bg-white/70 dark:bg-black/40 p-5 shadow">
            <p className="text-sm text-muted-foreground">Search Results</p>

            <h2 className="text-3xl font-bold">
              {search ? filteredImages.length : ""}
            </h2>
          </div>
        </div>

        {/* SEARCH */}
        <div className="mt-6 rounded-3xl bg-white/70 dark:bg-black/40 p-5 shadow">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 " />

            <input
              type="search"
              value={search}
              placeholder="Search atlas images..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-black/40 dark:border-white/40 px-3 py-3 pl-12 outline-none transition focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-xl px-4 py-2 text-sm font-medium capitalize transition-all duration-200
                ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "border  bg-white dark:bg-black/40 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-300"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3  lg:grid-cols-4">
          {filteredImages.map((item) => (
            <div
              key={`${item.category}-${item.id}`}
              className=" overflow-hidden rounded-2xl bg-white/70 dark:bg-black/40 shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h2 className="text-lg font-bold">{item.title}</h2>

                <p className="mt-1  text-sm text-muted-foreground">
                  {item.description}
                </p>

                {/* CATEGORY BADGE */}
                <div
                  className={`mt-3 inline-block rounded-lg px-3 py-1 text-sm font-semibold capitalize ${
                    categoryStyles[item.category]
                  }`}
                >
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredImages.length === 0 && (
          <div className="mt-10 rounded-3xl bg-white/70 p-10 text-center shadow">
            <h2 className="text-2xl font-bold text-gray-700">
              No Images Found
            </h2>

            <p className="mt-2 text-gray-500">
              Try another search or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
