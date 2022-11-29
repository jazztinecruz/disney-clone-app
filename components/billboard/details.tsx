import { PlayIcon, PlusIcon } from "@heroicons/react/24/solid";
import Button from "../Button";

const Details = () => {
  return (
    <div className="absolute -top-80 left-0 right-0 max-w-lg flex flex-col gap-4 z-[100]">
      <span className="text-6xl font-bold">LIGHTYEAR</span>
      <div className="font-semibold tracking-wider text-white/75 flex items-center gap-3">
        <span>2022</span>
        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
        <span>1hr 20m</span>
        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
        <span>English</span>
        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
        <span className="w-8 h-7 bg-rated-dark grid place-items-center rounded-sm">
          <span>PG</span>
        </span>
      </div>

      <p className="font-semibold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        tenetur?
      </p>

      <div className="font-semibold flex items-center gap-3">
        <span>Fantasy</span>
        <div>|</div>
        <span>Adventure</span>
      </div>

      <div className="w-full grid grid-cols-[1fr,auto] gap-6 items-center mt-6">
        <Button>
          <div className="flex items-center gap-3">
            <PlayIcon className="w-6 h-6" />
            <span className="font-bold tracking-wide whitespace-nowrap ">
              Watch Now
            </span>
          </div>
        </Button>

        <Button>
          <PlusIcon className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default Details;
