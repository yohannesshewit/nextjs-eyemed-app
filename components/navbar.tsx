import {
  PersonStanding,
  PowerOffIcon,
  Search,
  Sidebar,
  SidebarOpen,
  Sun,
  User,
} from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full px-6  py-8 gap-3 ">
      {/* Mobile menu */}
      <div className="md:hidden">
        <Sidebar />
      </div>

      {/* Search */}
      <div className="flex items-center border-2 border-blue-300 flex-1 max-w-md px-3 py-2 rounded-2xl gap-2 focus-within:ring-1 focus-within:ring-blue-400">
        <Search className="text-gray-500" />
        <input
          className="w-full outline-none bg-transparent"
          type="search"
          placeholder="Search calculators, tools..."
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <Sun className="cursor-pointer" />

        <div className="flex items-center gap-2">
          <User className="bg-blue-100 rounded-full h-8 w-8 p-1" />
          <p className="hidden md:block font-bold text-gray-700 leading-tight">
            Dr. Yohannes.T <br />
            <span className="font-medium text-sm">Optometrist</span>
          </p>
        </div>
      </div>
    </div>
  );
}
