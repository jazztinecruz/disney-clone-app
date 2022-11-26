import Image from "next/image";

const Billboard = () => {
  return (
    <div className="w-full sticky top-0 aspect-video overflow-hidden">
      <Image
        src="/images/lightyear.jpg"
        alt="lightyear"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Billboard;
