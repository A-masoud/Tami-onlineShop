
import { Heart } from "lucide-react";

export function ProductTitleAndPopularity({ title, category, popularity }) {
  return (
    <div className="flex justify-between items-center mt-4">
      <div>
        <p className="text-sm text-gray-400">محبوبیت</p>
        <div className="flex items-center gap-1">
          <Heart className="text-[var(--quaternary-color)] w-5 h-5" />
          <span className="text-[var(--quaternary-color)] font-semibold">{popularity}</span>
        </div>
      </div>
      <div className="text-right">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-400 text-sm">{category}</p>
      </div>
    </div>
  );
}
