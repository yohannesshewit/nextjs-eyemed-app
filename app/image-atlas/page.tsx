import { atlasImages } from "@/data/atlas";
import { AtlasCategory } from "@/types/atlas";
import { BookOpen, CloudUpload, Plus, Search } from "lucide-react";
import Image from "next/image";

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

  const totalImages = atlasImages.length;

  const totalCategories = new Set(atlasImages.map((img) => img.category)).size;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-200 to-cyan-50">
      <div className="mx-auto max-w-7xl p-4 md:p-8">
        {/* TOP BAR */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-xl p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* TITLE */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-2xl p-4">
                <BookOpen className="w-8 h-8" />
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Image Atlas</h1>

                <p className="text-gray-600 mt-2 max-w-2xl text-sm md:text-base">
                  Explore ophthalmic images across anatomy and diseases.
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-xl border px-5 py-3 text-sm hover:bg-gray-50">
                <CloudUpload className="w-4 h-4" />
                Upload
              </button>

              <button className="flex items-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 text-sm hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                Favourite
              </button>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/70 p-5 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Total Images</p>
            <h2 className="text-3xl font-bold">{totalImages}</h2>
          </div>

          <div className="bg-white/70 p-5 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Categories</p>
            <h2 className="text-3xl font-bold">{totalCategories}</h2>
          </div>

          <div className="bg-white/70 p-5 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Favourites</p>
            <h2 className="text-3xl font-bold">48</h2>
          </div>
        </div>

        {/* SEARCH */}
        <div className="mt-6 bg-white/70 p-5 rounded-3xl shadow">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            <input
              type="search"
              placeholder="Search images..."
              className="w-full pl-12 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        {/* Categories */}
        <div className="flex flex-wrap gap-3 p-5">
          {" "}
          <button className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-md">
            {" "}
            All{" "}
          </button>{" "}
          <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-sm">
            {" "}
            Conjunctiva{" "}
          </button>{" "}
          <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-sm">
            {" "}
            Cornea{" "}
          </button>{" "}
          <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-sm">
            {" "}
            Uvea{" "}
          </button>{" "}
          <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-sm">
            {" "}
            Lens{" "}
          </button>{" "}
          <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-sm">
            {" "}
            Vitreous{" "}
          </button>{" "}
          <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-sm">
            {" "}
            Retina{" "}
          </button>{" "}
          <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-sm">
            {" "}
            Optic Nerve{" "}
          </button>{" "}
          <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-sm">
            {" "}
            Ocular Adnexa{" "}
          </button>{" "}
          <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-sm">
            {" "}
            Strabismus{" "}
          </button>{" "}
        </div>

        {/* GRID */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {atlasImages.map((item) => (
            <div
              key={`${item.category}-${item.id}`}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1 overflow-hidden"
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

                <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                  {item.description}
                </p>

                {/* CATEGORY BADGE */}
                <div
                  className={`inline-block mt-3 px-3 py-1 rounded-lg text-sm font-semibold capitalize ${
                    categoryStyles[item.category]
                  }`}
                >
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
