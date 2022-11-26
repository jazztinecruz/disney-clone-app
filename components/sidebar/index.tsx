"use client";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  TvIcon,
  FilmIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import MenuIcon from "./menu";
import { useState } from "react";

const Sidebar = () => {
  const [showFade, setShowFade] = useState(false);

  return (
    <section className="relative h-screen w-32 bg-black grid grid-cols-[auto, 1fr] py-6 sticky top-0 left-0 bottom-0 z-50">
      <Image
        src="/images/disney-logo.svg"
        alt="disney logo"
        width="70"
        height="70"
        className="z-[100] mx-auto "
      />

      <div
        className={`${
          showFade ? "block" : "hidden"
        } fixed inset-0 w-screen h-full bg-gradient-to-r from-black to-black/20`}></div>
      <div
        onMouseEnter={() => setShowFade(true)}
        onMouseLeave={() => setShowFade(false)}
        className="h-auto w-full flex flex-col place-items-center cursor-pointer group z-50">
        <div className="w-full">
          <MenuIcon Icon={UserIcon} label="Home" />
          <MenuIcon Icon={MagnifyingGlassIcon} label="Search" />
          <MenuIcon Icon={HomeIcon} label="Home" />
          <MenuIcon Icon={TvIcon} label="Series" />
          <MenuIcon Icon={FilmIcon} label="Movies" />
          <MenuIcon Icon={SparklesIcon} label="Originals" />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
