import menModel from "../../assets/categury/image_2025-09-15_21-30-10.png"
import { SocialCard } from "./SocialCard ";
export function HeroBanner() {
  return (
    <div className="relative w-auto h-[px]">
      <img 
      src={menModel} 
      alt="" 
      className=" w-full h-full  object-contain rounded-3xl z-0"
     />
     <SocialCard/>
   
   
   <div className="absolute bottom-0 sm:h-20 bg-black p-1.5 sm:pt-2.5 sm:pr-2.5 pl-0 pb-0">
   <button class="flex justify-center items-center border-2 border-orange-800 text-[8px] sm:text-sm md:text-xl rounded-bl-xl  md:rounded-bl-2xl sm:gap-2 h-full hover:brightness-110 hover:animate-pulse font-bold px-4 py-2  sm:p-2 sm:px-6  bg-gray-300 shadow-lg shadow-orange-600/50 text-">درباره تامی شاپ
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>

   </button>
  </div>



    </div>
  );
}
