import { gallery, Category } from "@/data/images";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <div className="mt-4 space-y-2">
      {/* popular tools and calculators*/}
      <div className="bg-white p-4 rounded-2xl space-y-3">
        <div className="flex justify-between ">
          {" "}
          <p>Popular Calculators & Tools</p>
          <button
            type="button"
            className="text-blue-600 hover:underline focus:outline-none"
            aria-label="View all calculators and tools"
          >
            View all
          </button>
        </div>

        <div className="flex gap-2  flex-wrap ">
          <div className="bg-amber-200  px-4 py-2 rounded-2xl">
            <Eye />{" "}
            <p>
              Eye Power <br />
              Calculator
            </p>
          </div>
          <div className="bg-amber-200  px-4 py-2 rounded-2xl">
            <Eye />{" "}
            <p>
              Eye Power <br />
              Calculator
            </p>
          </div>
          <div className="bg-amber-200  px-4 py-2 rounded-2xl">
            <Eye />{" "}
            <p>
              Eye Power <br />
              Calculator
            </p>
          </div>
          <div className="bg-amber-200  px-4 py-2 rounded-2xl">
            <Eye />{" "}
            <p>
              Eye Power <br />
              Calculator
            </p>
          </div>
          <div className="bg-amber-200  px-4 py-2 rounded-2xl">
            <Eye />{" "}
            <p>
              Eye Power <br />
              Calculator
            </p>
          </div>
          <div className="bg-amber-200  px-4 py-2 rounded-2xl">
            <Eye />{" "}
            <p>
              Eye Power <br />
              Calculator
            </p>
          </div>
          <div className="bg-amber-200  px-4 py-2 rounded-2xl">
            <Eye />{" "}
            <p>
              Eye Power <br />
              Calculator
            </p>
          </div>
          <div className="bg-amber-200  px-4 py-2 rounded-2xl">
            <Eye />{" "}
            <p>
              Eye Power <br />
              Calculator
            </p>
          </div>
        </div>
      </div>
      {/* Atlas + Library */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Image Atlas */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">Image Atlas</h2>

            <Link
              href="/image-atlas"
              className="text-sm text-blue-600 hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border bg-gray-50 hover:shadow-md transition"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  priority
                  className="h-36 w-full object-cover"
                />

                <div className="p-3">
                  <p className="font-semibold text-sm line-clamp-1">
                    {item.title}
                  </p>

                  <p className="text-xs text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Library */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">Library</h2>

            <button className="text-sm text-blue-600 hover:underline">
              View all
            </button>
          </div>

          <div className="space-y-3">
            <div className="border rounded-2xl p-4 hover:bg-gray-50 transition">
              <p className="font-medium">Retina Diseases</p>
              <p className="text-sm text-gray-500">
                Learn retinal disorders and diagnosis
              </p>
            </div>

            <div className="border rounded-2xl p-4 hover:bg-gray-50 transition">
              <p className="font-medium">Optic Nerve Atlas</p>
              <p className="text-sm text-gray-500">
                High-quality ophthalmic references
              </p>
            </div>

            <div className="border rounded-2xl p-4 hover:bg-gray-50 transition">
              <p className="font-medium">Clinical Refraction</p>
              <p className="text-sm text-gray-500">
                Refraction notes and tutorials
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
