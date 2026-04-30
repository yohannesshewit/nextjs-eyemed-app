import {
  PersonStanding,
  PowerOffIcon,
  Search,
  Sidebar,
  SidebarOpen,
  Sun,
  User,
} from "lucide-react";

export default function Main() {
  return (
    <div className=" bg-white w-full md:w-4/5 min-h-screen md:rounded-l-2xl pl-5 pt-5 pr-5">
      <div className="flex items-center justify-around">
        <div className="md:hidden ">
          <Sidebar />
        </div>
        <div className="  flex justify-center border-2 border-blue-300 w-[50%] md:w-[60%] p-2 rounded-2xl gap-5 text-gray-700 font-medium hover:ring-1 hover:ring-blue-400 ">
          <Search />
          <input
            className="w-[90%]  border-none outline-none "
            type="search"
            name=""
            id=""
            placeholder="Search Calculators,tools,images,topics"
          />
        </div>
        <div>
          <Sun />
        </div>
        <div className="flex items-center gap-2">
          <User className="bg-blue-100 rounded-full h-8 w-8 p-1" />{" "}
          <p className="text-shadow-gray-600 font-bold">
            Dr. Yohannes.T <br />
            <span className="font-medium">Optometrist</span>{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
