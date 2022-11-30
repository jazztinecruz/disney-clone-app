"use client";
import Image from "next/image";

interface Props {
  bgImage: any;
  alt: string;
  videoLink: string;
}

const Sponsor = ({ bgImage, alt, videoLink }: Props) => {
  return (
    <div className="relative bg-card-dark group aspect-video rounded-md grid items-center justify-center cursor-pointer hover:scale-125 hover:z-[100] transition-all duration-300">
      <video
        autoPlay
        loop
        muted
        className="hidden group-hover:block absolute inset-0 w-full h-full">
        <source src={videoLink} type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-14 h-14 lg:w-36 lg:h-36 relative">
          <Image
            src={bgImage}
            alt={alt}
            fill
            className="object-contain group-hover:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
