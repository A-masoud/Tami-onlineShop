export function ProductImage({ src, alt }) {
  return (
    <div className="flex flex-col items-center  bg-neutral-900 rounded-2xl  gap-2.5 p-3.5   w-full ">
      {/* عکس اصلی */}
      
        <img
          src={src}
          alt={alt}
          className="w-full md:h-[300px] rounded-lg object-contain"
        />
     

      {/* تصاویر کوچک زیر عکس اصلی */}
      <div className="flex gap-3 justify-center">
        <img
          src={src}
          alt={alt}
          className="w-16 lg:w-20  object-contain rounded-md border border-gray-500 cursor-pointer hover:border-black"
        />
        <img
          src={src}
          alt={alt}
          className=" w-16 lg:w-20  object-contain rounded-md border border-gray-500 cursor-pointer hover:border-black"
        />
        <img
          src={src}
          alt={alt}
          className="w-16 lg:w-20  object-contain rounded-md border border-gray-500 cursor-pointer hover:border-black"
        />
      </div>
    </div>
  );
}
