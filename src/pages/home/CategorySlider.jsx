import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // آیکون فلش‌ها
import suit from "../../assets/categury/Untitled-4.png";
import sheos from "../../assets/categury/Untitled-5.png";
import tshirt from "../../assets/categury/Untitled-3.png";
import accesory from "../../assets/categury/Untitled-6.png";
import necktie from "../../assets/categury/Untitled-8.png";
import watch from "../../assets/categury/Untitled-9.png";
import jacet from "../../assets/categury/Untitled-7.png";
import pants from "../../assets/categury/Untitled-10.png";
import hoodei from "../../assets/categury/Untitled-11.png";

const categories = [
  { id: 1, name: "کت و شلوار", image: suit },
  { id: 2, name: "تیشرت", image: tshirt },
  { id: 3, name: "کفش", image: sheos },
  { id: 4, name: "اکسسوری", image: accesory },
  { id: 5, name: "ژاکت", image: jacet },
  { id: 6, name: "کراوات", image: necktie },
  { id: 7, name: "ساعت", image: watch },
  { id: 8, name: "شلوار", image: pants },
  { id: 9, name: "هودی", image: hoodei },
];

export function CategorySlider() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="my-10 w-full max-w-10/12 mx-auto">
      <h2 className="text-2xl text-[#E6E4B2] text-right md:text-3xl font-bold mr-2 mb-6">
        دسته‌بندی پوشاک
      </h2>

     
      <div className="relative">
        
        <button
          onClick={scrollLeft}
          className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-[#FA6320] p-2 border-white border rounded-full z-20"
        >
          <ChevronLeft size={28} />
        </button>

       
        <button
          onClick={scrollRight}
          className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-[#FA6320] p-2 border-white border rounded-full z-20"
        >
          <ChevronRight size={28} />
        </button>

       
        <div
          ref={scrollRef}
          className="flex bg-gray-300 space-x-4 mx-auto overflow-x-auto scrollbar-hide border border-o rounded-xl py-2 px-2 scroll-smooth"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="min-w-[150px] md:min-w-[200px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer border border-gray-800 relative"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end justify-center">
                <span className="text-[#FA6320] font-bold text-lg pb-3 drop-shadow-md">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
