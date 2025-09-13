export function ProductImage({ src, alt }) {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      {/* عکس اصلی */}
      <div className="relative flex justify-center items-center w-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg z-10 object-contain"
        />

        {/* افکت SVG پشت عکس */}
        <svg
          className="absolute inset-0 w-full h-full z-0"
          viewBox="0 0 200 200"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="50,0 150,0 200,100 150,200 50,200 0,100"
            fill="rgba(128,128,128,0.4)" // طوسی شیشه‌ای
            stroke="white"
            strokeWidth="3"
            filter="url(#glow)"
          />
        </svg>
      </div>

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
