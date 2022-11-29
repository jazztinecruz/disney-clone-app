"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  bgImage: any;
  alt: string;
  videoLink: string;
}

const Sponsor = ({ bgImage, alt, videoLink }: Props) => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setPlayVideo(true);
      }}
      onMouseLeave={() => setPlayVideo(false)}
      className="bg-card-dark aspect-video rounded-md grid items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
      {playVideo ? (
        <video src={videoLink} autoPlay controls width={300} height={300} />
      ) : (
        <div className="w-20 h-5 md:w-28 md:h-7 lg:w-40 lg:h-14 relative">
          <Image src={bgImage} alt={alt} fill className="object-contain" />
        </div>
      )}
    </div>
  );
};

export default Sponsor;
