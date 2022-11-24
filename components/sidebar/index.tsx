import Image from "next/image";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  TvIcon,
  FilmIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import MenuIcon from "./menu";

const Sidebar = () => {
  return (
    <section className="h-screen w-32 bg-black grid grid-cols-[auto, 1fr] py-6">
      <Image
        src="/images/disney-logo.svg"
        alt="disney logo"
        width="70"
        height="70"
        className="z-[100] mx-auto "
      />

      <div className="h-auto w-full flex flex-col items-center gap-8 cursor-pointer group z-50">
        <div className="hidden group-hover:block absolute top-0 bottom-0 left-0 w-[500px] bg-gradient-to-r from-black to-black/20"></div>
        <div className="relative w-6 h-6 rounded-full z-50 flex items-center gap-6 opacity-50 hover:opacity-100 hover:scale-110 hover:font-bold transition-all duration-150">
          <Image
            src="/images/profile.png"
            alt="disney logo"
            fill
            className="rounded-full object-cover opacity-75 group-hover:opacity-100"
          />
          <span className="absolute left-10 bottom-0 hidden group-hover:block group-hover:animate-fade text-white z-50 text-lg whitespace-nowrap">
            My Space
          </span>
        </div>
        <MenuIcon Icon={MagnifyingGlassIcon} label="Search" />
        <MenuIcon Icon={HomeIcon} label="Home" />
        <MenuIcon Icon={TvIcon} label="Series" />
        <MenuIcon Icon={FilmIcon} label="Movies" />
        <MenuIcon Icon={SparklesIcon} label="Originals" />
      </div>
    </section>
  );
};

export default Sidebar;
