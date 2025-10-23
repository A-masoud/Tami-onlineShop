import { Heart } from "lucide-react";

export function ProductTitleAndPopularity({ title, category, popularity }) {
  return (
    <div className="flex bg-neutral-900 p-2.5 rounded-2xl justify-between items-center mt-3 sm:mt-4">
      <div>
        <p className=" sm:text-sm text-gray-400">محبوبیت</p>
        <div className="flex items-center gap-1">
          <Heart className="text-[var(--quaternary-color)]  w-5 " />
          <span className="text-[var(--quaternary-color)]  text-sm font-semibold">{popularity}</span>
        </div>
      </div>
      <div className="text-right">
        <h2 className="text-xl font-bold" style={{ direction: "rtl", unicodeBidi: "embed" }}>{title}</h2>
        <p className="text-gray-400 text-sm">{category}</p>
      </div>
    </div>
  );
}
