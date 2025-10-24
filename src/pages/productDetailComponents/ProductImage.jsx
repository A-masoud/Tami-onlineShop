import { useState } from "react";

export function ProductImage({ src, alt }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <div className="flex flex-col items-center bg-gradient-to-b from-gray-800 via-neutral-900 to-gray-950 rounded-2xl gap-2.5 p-3.5 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
       
        <div className="relative w-full cursor-pointer" onClick={() => setOpen(true)}>
          <img
            src={src}
            alt={alt}
            className="w-full md:h-[300px] rounded-lg object-contain border-2 border-gray-700 shadow-inner transition-shadow duration-300 hover:shadow-lg"
          />
        </div>

        
        <div className="flex gap-3 justify-center">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              className="w-16 lg:w-20 object-contain rounded-md border border-gray-500 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-red-500"
              onClick={() => setOpen(true)}
            />
          ))}
        </div>
      </div>

      
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl transform scale-90 transition-transform duration-300 hover:scale-100"
          />
        </div>
      )}
    </>
  );
}
