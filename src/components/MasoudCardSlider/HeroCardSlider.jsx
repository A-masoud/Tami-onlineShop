import React from "react";
import { products } from "../../data/fakeData";
import "./HeroCardSlider.css";

const HeroCardSlider = () => {
  return (
    <div className="w-full h-full relative z-40">
      {/* موبایل: افقی اسکرول */}
      <div 
        className="md:hidden w-full overflow-x-auto scrollbar-hide" 
        style={{ 
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
          cursor: 'grab'
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          const container = e.currentTarget;
          const startX = e.pageX - container.offsetLeft;
          const scrollLeft = container.scrollLeft;
          
          const handleMouseMove = (e) => {
            const x = e.pageX - container.offsetLeft;
            const walk = (startX - x) * 2;
            container.scrollLeft = scrollLeft + walk;
          };
          
          const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            container.style.cursor = 'grab';
          };
          
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
          container.style.cursor = 'grabbing';
        }}
      >
        <div className="flex gap-6 px-4 py-6" style={{ width: 'calc(240px * 3 + 48px + 32px)' }}>
          {products.slice(0, 3).map((item) => (
            <div 
              className="w-60 xl:w-72 2xl:w-80 h-72 hover:scale-105 transition-all duration-700 relative shadow-2xl border-t-2 border-[var(--quaternary-color)]/30 flex flex-col items-center justify-center shadow-black/80 bg-gradient-to-b from-black/90 to-black/50 rounded-2xl flex-shrink-0" 
              key={item.id}
            >
              <img className="w-44 h-44 object-cover transition-all -translate-y-10 duration-500" src={item.image} alt={item.title} />
              <span className="text-white/10 absolute top-60">_________________________</span>
              <h3 className="text-white/80 new-text-shadow text-md mt-8 font-bold">{item.title}</h3>
              <span className="text-white/90 bg-[var(--quinary-color)] text-center rounded-full w-12 h-6 text-sm mt-2 absolute top-0 right-0 rotate-15">جدید</span>
              <p className="text-[var(--quaternary-color)]/70 animate-pulse new-text-shadow-2 text-xl font-semibold absolute top-55 left-8">{item.price.toLocaleString()} <span className="text-white/90 text-sm">تومان</span></p>
              <h3 className="text-[var(--quaternary-color)] text-md bg-gradient-to-br from-black/90 to-[var(--primary-color-light)]/70 hover:bg-[var(--quaternary-color)] transition-all duration-300 border-[1px] border-[var(--quaternary-color)]/40 hover:border-black hover:scale-95 hover:text-black hover:bg-gradient-to-br hover:from-[var(--quaternary-color)]/70 hover:to-[var(--quinary-color)] rounded-full py-2 cursor-pointer new-text-shadow-2 absolute top-75 right-auto mt-8 mb-8 px-8 font-bold">مشاهده مشخصات کالا</h3>
            </div>
          ))}
        </div>
      </div>

      {/* تبلت و دسکتاپ: ثابت و افقی */}
      <div className="hidden md:flex flex-row justify-center items-center gap-12 h-full">
        {products.slice(0, 3).map((item) => (
          <div 
            className="w-60 h-100 hover:scale-105 transition-all duration-700 relative shadow-2xl border-t-2 border-[var(--quaternary-color)]/30 flex flex-col items-center justify-center shadow-black/80 bg-gradient-to-b from-black/90 to-black/50 rounded-2xl" 
            key={item.id}
          >
            <img className="w-44 h-44 object-cover transition-all -translate-y-6 scale-90 duration-500" src={item.image} alt={item.title} />
            <span className="text-white/10 absolute top-52 w-44">_________________________</span>
            <h3 className="text-white/80 new-text-shadow text-lg mt-20 font-bold text-center px-2">{item.title}</h3>
            <span className="text-white/90 bg-[var(--quinary-color)] text-center rounded-full w-12 h-6 text-sm mt-2 absolute top-0 right-0 rotate-15">جدید</span>
            <p className="text-[var(--quaternary-color)]/70 animate-pulse new-text-shadow-2 text-2xl font-semibold absolute top-48 left-1/2 transform -translate-x-1/2 text-center">{item.price.toLocaleString()} <span className="text-white/90 text-base">تومان</span></p>
            
            {/* توضیحات اضافی برای دسکتاپ */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 text-[var(--quaternary-color)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>کیفیت عالی</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 text-[var(--quaternary-color)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ارسال سریع</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 text-[var(--quaternary-color)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ضمانت 2 ساله</span>
              </div>
            </div>
            
            <h3 className="text-[var(--quaternary-color)] p-2 w-full text-sm bg-gradient-to-br from-black/90 to-[var(--primary-color-light)]/70 hover:bg-[var(--quaternary-color)] transition-all duration-300 border-[1px] border-[var(--quaternary-color)]/40 hover:border-black hover:scale-95 hover:text-black hover:bg-gradient-to-br hover:from-[var(--quaternary-color)]/70 hover:to-[var(--quinary-color)] rounded-full cursor-pointer new-text-shadow-2 absolute -bottom-12 left-1/2 transform -translate-x-1/2  font-bold text-center">مشاهده مشخصات کالا</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCardSlider;
