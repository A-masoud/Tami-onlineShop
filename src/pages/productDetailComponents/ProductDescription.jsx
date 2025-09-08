import { ChevronsRight } from "lucide-react";


export function ProductDescription({ description }) {
  return (
    <div className="flex-1  text-right">
      <h3 className="text-gray-500">توضیحات</h3>
      <div className="h-44 mt-2 flex flex-col justify-between ">
        <p className="text-[13px] text-neutral-300 overflow-hidden p-3.5 bg-neutral-900 rounded-2xl">
          {description}
        </p>
        <button className="h-12 flex justify-center items-center w-full my-2.5 text-sm text-[var(--quaternary-color)] bg-neutral-900 rounded-2xl">
          اطلاعات بیشتر
          <ChevronsRight />
        </button>
      </div>
    </div>
  );
}
