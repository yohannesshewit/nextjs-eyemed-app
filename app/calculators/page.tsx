import AccommodationCalculator from "@/calculators/Accomodation Calculator";
import CorneaPowerCalculator from "@/calculators/Cornea Power Calculator";
import GlaucomaRiskCalculator from "@/calculators/Glaucoma Risk Calculators";
import IOLCalculator from "@/calculators/Iol Calculator";
import RefractionCalculator from "@/calculators/Refraction Calculator";
import { ArrowRight, Eye, Gauge, Glasses, Ruler, ScanEye } from "lucide-react";

export default function CalculatorsPage() {
  return (
    <div className="mx-6 my-2  md:m-2 rounded-2xl min-h-screen bg-green-300/10 p-5 md:p-5 lg:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-bold  text-3xl md:text-4xl">Calculators</h1>
        <p className="text-muted-foreground mt-1">
          Clinical calculators for ophthalmology practice
        </p>
      </div>

      {/* Grid card */}
      <div className="hidden  gap-5  md:grid grid-cols-5 ">
        {/* Card */}
        <div className="bg-emerald-50 dark:bg-emerald-600/20 flex flex-col justify-center items-center rounded-2xl px-4 py-6 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer text-center ">
          <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-full mb-3">
            <Eye className="text-emerald-600" />
          </div>
          <h2 className="font-semibold ">
            IOL Power <br /> Calculator
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Calculate intraocular lens power using biometry measurements.
          </p>
          <div className="flex items-center justify-center gap-1 mt-3 text-emerald-600 font-medium border border-emerald-500 rounded-sm py-1 bg-emerald-100 w-full">
            <span>Calculate</span>
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-600/20 flex flex-col justify-center items-center rounded-2xl px-4 py-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
          <div className="bg-cyan-100 w-12 h-12 flex items-center justify-center rounded-full mb-3">
            <Glasses className="text-cyan-600" />
          </div>
          <h2 className="font-semibold ">
            Refraction <br /> Calculator
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Calculate spherical equivalent and clinical interpretation.
          </p>
          <div className="flex items-center gap-1 mt-3 text-cyan-600 font-medium border  border-cyan-500 bg-cyan-100 w-full justify-center  rounded-sm py-1">
            <span>Calculate</span>
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-600/20 rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col justify-center items-center  px-4 py-6 text-center">
          <div className="bg-red-100 w-12 h-12 flex items-center justify-center rounded-full mb-3">
            <Gauge className="text-red-600" />
          </div>
          <h2 className="font-semibold ">
            Glaucoma Risk <br /> Calculator
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Assess glaucoma risk <br />
            based on clinical <br />
            parameters.
          </p>
          <div className="flex items-center gap-1 mt-3 text-red-600 font-medium bg-red-100 border-red-500 w-full justify-center  rounded-sm py-1 border">
            <span>Calculate</span>
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-600/20 rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col justify-center items-center  px-4 py-6 text-center">
          <div className="bg-slate-100 w-12 h-12 flex items-center justify-center rounded-full mb-3">
            <Ruler className="text-slate-600" />
          </div>
          <h2 className="font-semibold ">
            Accommodation <br /> Calculator
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Calculate amplitude of accommodation based on age.
          </p>
          <div className="flex items-center gap-1 mt-3 text-slate-600 font-medium border bg-slate-100 border-slate-500 w-full justify-center  rounded-sm py-1">
            <span>Calculate</span>
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-600/20 rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col justify-center items-center  px-4 py-6 text-center">
          <div className="bg-indigo-100 w-12 h-12 flex items-center justify-center rounded-full mb-3">
            <ScanEye className="text-indigo-600" />
          </div>
          <h2 className="font-semibold ">
            Corneal Power <br /> Calculator
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Calculate corneal power <br /> from keratometry <br /> readings.
          </p>
          <div className="flex items-center gap-1 mt-3 text-indigo-600 font-medium border border-indigo-500 bg-indigo-100 w-full justify-center  rounded-sm py-1">
            <span>Calculate</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
      {/* calculators grid */}
      <div className="grid md:grid-cols-5 grid-cols items-stretch md:gap-4 gap-14 rounded-2xl mt-4 ">
        <IOLCalculator />
        <RefractionCalculator />
        <GlaucomaRiskCalculator />
        <AccommodationCalculator />
        <CorneaPowerCalculator />
      </div>
    </div>
  );
}
