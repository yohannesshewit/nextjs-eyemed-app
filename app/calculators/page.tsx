import AccommodationCalculator from "@/calculators/Accomodation Calculator";
import CorneaPowerCalculator from "@/calculators/Cornea Power Calculator";
import GlaucomaRiskCalculator from "@/calculators/Glaucoma Risk Calculators";
import IOLCalculator from "@/calculators/Iol Calculator";
import RefractionCalculator from "@/calculators/Refraction Calculator";
import { ArrowRight, Eye } from "lucide-react";

export default function CalculatorsPage() {
  return (
    <div className="bg-white m-2 rounded-2xl min-h-screen p-14 md:p-4 lg:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-bold text-gray-800 text-3xl md:text-4xl">
          Calculators
        </h1>
        <p className="text-gray-500 mt-1">
          Clinical calculators for ophthalmology practice
        </p>
      </div>

      {/* Grid card */}
      <div className="hidden  gap-5  md:grid grid-cols-5 ">
        {/* Card */}
        <div className="bg-blue-50 flex flex-col justify-center items-center rounded-2xl px-4 py-6 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer text-center ">
          <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-3">
            <Eye className="text-blue-600" />
          </div>
          <h2 className="font-semibold text-gray-800">
            IOL Power <br /> Calculator
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Calculate intraocular lens power using biometry measurements.
          </p>
          <div className="flex items-center justify-center gap-1 mt-3 text-blue-600 font-medium border border-blue-500 rounded-sm py-1 bg-blue-100 w-full">
            <span>Calculate</span>
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="bg-green-50 flex flex-col justify-center items-center rounded-2xl px-4 py-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
          <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-3">
            <Eye className="text-green-600" />
          </div>
          <h2 className="font-semibold text-gray-800">
            Refraction <br /> Calculator
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Calculate spherical equivalent and clinical interpretation.
          </p>
          <div className="flex items-center gap-1 mt-3 text-green-600 font-medium border  border-green-500 bg-green-100 w-full justify-center  rounded-sm py-1">
            <span>Calculate</span>
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="bg-violet-50 rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col justify-center items-center  px-4 py-6 text-center">
          <div className="bg-violet-100 w-12 h-12 flex items-center justify-center rounded-full mb-3">
            <Eye className="text-violet-600" />
          </div>
          <h2 className="font-semibold text-gray-800">
            Glaucoma Risk <br /> Calculator
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Assess glaucoma risk <br />
            based on clinical <br />
            parameters.
          </p>
          <div className="flex items-center gap-1 mt-3 text-violet-600 font-medium bg-violet-100 border-violet-500 w-full justify-center  rounded-sm py-1 border">
            <span>Calculate</span>
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col justify-center items-center  px-4 py-6 text-center">
          <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full mb-3">
            <Eye className="text-orange-600" />
          </div>
          <h2 className="font-semibold text-gray-800">
            Accommodation <br /> Calculator
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Calculate amplitude of accommodation based on age.
          </p>
          <div className="flex items-center gap-1 mt-3 text-orange-600 font-medium border bg-orange-100 border-orange-500 w-full justify-center  rounded-sm py-1">
            <span>Calculate</span>
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="bg-red-50 rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col justify-center items-center  px-4 py-6 text-center">
          <div className="bg-red-100 w-12 h-12 flex items-center justify-center rounded-full mb-3">
            <Eye className="text-red-600" />
          </div>
          <h2 className="font-semibold text-gray-800">
            Corneal Power <br /> Calculator
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Calculate corneal power <br /> from keratometry <br /> readings.
          </p>
          <div className="flex items-center gap-1 mt-3 text-red-600 font-medium border border-red-500 bg-red-100 w-full justify-center  rounded-sm py-1">
            <span>Calculate</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
      {/* calculators grid */}
      <div className="grid md:grid-cols-5 grid-cols items-stretch md:gap-4 gap-14 bg-white rounded-2xl mt-4 ">
        <IOLCalculator />
        <RefractionCalculator />
        <GlaucomaRiskCalculator />
        <AccommodationCalculator />
        <CorneaPowerCalculator />
      </div>
    </div>
  );
}
