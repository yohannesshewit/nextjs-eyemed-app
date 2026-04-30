import {
  Book,
  BookA,
  BookOpen,
  Calculator,
  CalculatorIcon,
  ChartBar,
  Clock,
  Eye,
  EyeOff,
  FileWarning,
  Home,
  HospitalIcon,
  Image,
  Library,
  LibraryIcon,
  Lightbulb,
  LucideEye,
  Power,
  ScanEye,
  Search,
  Star,
  Sun,
  SwatchBook,
} from "lucide-react";

export default function SideBar() {
  return (
    <div className="  hidden  bg-white rounded-r-2xl md:block w-64 lg:w-72 p-3 min-h-screen">
      <div className="flex items-center gap-3  p-3 rounded-lg">
        <Eye className="text-blue-400  w-10 h-8 border-3 border-gray-950 ring-2 ring-blue-400 rounded-4xl " />

        <div className="leading-tight">
          <p className="font-bold text-lg md:text-xl text-blue-900">
            EyeMed Library
          </p>
          <p className="text-gray-500 text-xs md:text-sm">
            Ophthalmology Resources
          </p>
        </div>
      </div>
      <div className=" p-3 h-[50vh] mt-5 space-y-2 text-gray-700 font-medium ">
        <div className="flex items-center gap-2 p-2 rounded-xl transition hover:bg-blue-100 hover:text-blue-500 hover:font-semibold cursor-pointer">
          <Home />
          <p>Home</p>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-xl transition hover:bg-blue-100 hover:text-blue-500 hover:font-semibold cursor-pointer">
          <Calculator />
          <p>Calculators</p>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-xl transition hover:bg-blue-100 hover:text-blue-500 hover:font-semibold cursor-pointer">
          <HospitalIcon />
          <p>Clinical Tools</p>
        </div>{" "}
        <div className="flex items-center gap-2 p-2 rounded-xl transition hover:bg-blue-100 hover:text-blue-500 hover:font-semibold cursor-pointer">
          <Image />
          <p>Images Atlas</p>{" "}
        </div>{" "}
        <div className="flex items-center gap-2 p-2 rounded-xl transition hover:bg-blue-100 hover:text-blue-500 hover:font-semibold cursor-pointer">
          <BookOpen />
          <p>Library</p>{" "}
        </div>
        <hr className="" />
        <div className="flex items-center gap-2 p-2 rounded-xl transition hover:bg-blue-100 hover:text-blue-500 hover:font-semibold cursor-pointer">
          <Star /> <p>Favorites</p>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-xl transition hover:bg-blue-100 hover:text-blue-500 hover:font-semibold cursor-pointer">
          <Clock />
          <p>History</p>
        </div>
      </div>
      <div className="flex flex-col justify-center  bg-gray-100 py-5 px-3 space-y-2 text-gray-700 font-medium rounded-2xl">
        <div className="flex  gap-2 items-center pb-3">
          <Lightbulb className="text-red-600 ml-3" />{" "}
          <p className="font-bold">Quick Access</p>
        </div>
        <div className="flex  gap-3 items-center">
          <CalculatorIcon /> <p>Eye Power Calculator</p>
        </div>
        <div className="flex  gap-3 items-center">
          <LucideEye /> <p>IOL Power Calculator</p>
        </div>
        <div className="flex  gap-3 items-center">
          <ChartBar /> <p>Visual Acuity Assessment</p>
        </div>
        <div className="flex  gap-3 items-center">
          {" "}
          <FileWarning />
          <p>IOP Risk Assessment</p>
        </div>
        <div className="flex  gap-3 items-center">
          <ScanEye /> <p>Keratomerty Calculator</p>
        </div>
      </div>
    </div>
  );
}
