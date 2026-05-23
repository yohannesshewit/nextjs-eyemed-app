import FeaturesSection from "./featuressection";
import Footer from "./footer";
import Herosection from "./herosection";
import Navbar from "./navbar";

export default function Main() {
  return (
    <div className="bg-transparent w-full  min-h-screen md:rounded-l-2xl pl-2  pr-2  ">
      <Herosection />
      <FeaturesSection />
    </div>
  );
}
