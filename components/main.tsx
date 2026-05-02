import Herosection from "./herosection";
import Navbar from "./navbar";

export default function Main() {
  return (
    <div className="bg-transparent w-full  min-h-screen md:rounded-l-2xl pl-2  pr-1">
      <div className="bg-white rounded-2xl pb-4 pl-2 pr-2">
        <Navbar />
        <Herosection />
      </div>
    </div>
  );
}
