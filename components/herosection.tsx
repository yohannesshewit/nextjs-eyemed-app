import {
  Book,
  BookOpen,
  Calculator,
  HospitalIcon,
  Image,
  Library,
  LibraryIcon,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

export default function Herosection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 ">
      <div className="flex flex-col justify-center items-center text-center shadow-xl  hover:scale-105 transition-transform duration-300 ease-in-out  hover:shadow-xl cursor-pointer bg-green-50  space-y-2 p-4 rounded-2xl  ">
        <Calculator className="text-green-600 bg-green-100 rounded-full  h-16 w-16 p-2  " />{" "}
        <p className="text-green-500 font-bold ">Calculators</p>
        <p className="text-gray-600">
          Essential
          <br /> opthalmology calculators for daily practice.
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
        <Stethoscope className="text-blue-600 bg-blue-100 rounded-full  h-16 w-16 p-3  " />{" "}
        <p className="text-blue-500 font-bold">Consult Time</p>
        <p className="text-gray-600 ">
          Connect with <br />
          professionals for personalized advice.
        </p>
        <Link
          href="/consult"
          className="bg-blue-400 text-white w-full py-2 rounded-lg"
        >
          Explore Tools
        </Link>{" "}
        <p className="text-gray-600">15+ Tools</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center shadow-xl  hover:scale-105 transition-transform duration-300 ease-in-out  hover:shadow-xl cursor-pointer bg-violet-50 space-y-2 p-4 rounded-2xl">
        <Image className="text-violet-600 bg-violet-100 rounded-full  h-16 w-16 p-3  " />
        <p className="text-violet-500 font-bold">Image Atlas</p>
        <p className="text-gray-600 ">
          High-quality
          <br /> clinical and anatomical images.
        </p>{" "}
        <Link
          href="/image-atlas"
          className="bg-violet-400 text-white w-full py-2 rounded-lg"
        >
          Explore Atlas
        </Link>
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
        <Link
          href=""
          className="bg-orange-400 text-white py-2 w-full rounded-lg"
        >
          Explore Libray
        </Link>
        <p className="text-gray-600 ">2000+ Topics</p>
      </div>
    </div>
  );
}
