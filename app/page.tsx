import Main from "@/components/main";
import SideBar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-row gap-2 pt-1">
      <SideBar />
      <Main />
    </div>
  );
}
