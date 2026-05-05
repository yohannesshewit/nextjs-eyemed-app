import {
  Book,
  BookOpen,
  Calculator,
  HospitalIcon,
  Image,
  Library,
  LibraryIcon,
} from "lucide-react";
import Link from "next/link";

export default function Herosection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 ">
      <div className="flex flex-col justify-center items-center text-center shadow-xl  hover:scale-105 transition-transform duration-300 ease-in-out  hover:shadow-xl cursor-pointer bg-green-50  space-y-2 p-4 rounded-2xl  ">
        <Calculator className="text-green-600 bg-green-100 rounded-full  h-16 w-16 p-2  " />{" "}
        <p className="text-green-500 font-bold ">Calculators</p>
        <p className="text-gray-600">
          Essential opthalmology <br />
          calculators for daily practice.
        </p>
        <Link
          href="/calculators"
          className="bg-green-400 text-white w-full py-2 rounded-lg "
        >
          Explore Calculators
        </Link>{" "}
        <p className="text-gray-600">12+ Calculators</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out  hover:shadow-xl cursor-pointer bg-blue-50 space-y-2 p-4 rounded-2xl">
        <HospitalIcon className="text-blue-600 bg-blue-100 rounded-full  h-16 w-16 p-3  " />{" "}
        <p className="text-blue-500 font-bold">Clinical Tools</p>
        <p className="text-gray-600 ">
          Clinical assessment tools and
          <br />
          scoring systems.
        </p>
        <button className="bg-blue-400 text-white w-full py-2 rounded-lg">
          Explore Tools
        </button>{" "}
        <p className="text-gray-600">15+ Tools</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center shadow-xl  hover:scale-105 transition-transform duration-300 ease-in-out  hover:shadow-xl cursor-pointer bg-violet-50 space-y-2 p-4 rounded-2xl">
        <Image className="text-violet-600 bg-violet-100 rounded-full  h-16 w-16 p-3  " />
        <p className="text-violet-500 font-bold">Image Atlas</p>
        <p className="text-gray-600 ">
          High-quality clinical images <br />
          and diagrams.
        </p>{" "}
        <button className="bg-violet-400 text-white w-full py-2 rounded-lg">
          Explore Atlas
        </button>
        <p className="text-gray-600 ">1000+ images</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out  hover:shadow-xl cursor-pointer  bg-orange-50 space-y-2 p-4 rounded-2xl">
        <BookOpen className="text-orange-600 bg-orange-100 rounded-full  h-16 w-16 p-3  " />
        <p className="text-orange-500 font-bold">Library</p>
        <p className="text-gray-600 ">
          Comprehensive opthtalmology
          <br />
          knowledge library.
        </p>
        <button className="bg-orange-400 text-white py-2 w-full rounded-lg">
          Explore Libray
        </button>
        <p className="text-gray-600 ">2000+ Topics</p>
      </div>
    </div>
  );
}
