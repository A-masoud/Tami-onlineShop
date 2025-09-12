"use client";
import { useEffect, useState } from "react";
import { ShoppingCart, LogIn, ChevronDown, Search } from "lucide-react";

const cn = (...c) => c.filter(Boolean).join(" ");

export default function HeaderUp() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* هدر دسکتاپ: fixed بالا + گلس + تیره‌تر شدن */}
      <header
        dir="rtl"
        className={cn(
          "hidden lg:block",
          "fixed top-0 left-0 right-0 z-50 w-full",
          "transition-[background,box-shadow,border] duration-300",
          "backdrop-blur-md border-b",
          scrolled
            ? "bg-black/60 border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]"
            : "bg-black/30 border-white/5"
        )}
      >
        <div className="mx-auto max-w-none px-6">
          <div className="h-16 flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 shrink-0 text-white" aria-label="خانه">
              <div className="h-9 w-9 rounded-full bg-white text-black grid place-items-center font-black">T</div>
              <span className="hidden xl:inline font-bold tracking-tight">TAMI SHOP</span>
            </a>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-2 text-sm">
              <a className="px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition" href="#">خانه</a>
             <div
                className="
                  relative group
                  before:content-[''] before:absolute before:left-0 before:right-0 before:top-full before:h-2
                "
              >
                <button className="flex items-center gap-1 px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">
                  دسته‌بندی‌ها <ChevronDown size={16} />
                </button>

                {/* کانتینر فاصله + موقعیت */}
                <div className="absolute right-0 top-full min-w-56 pt-2 z-50">
                  {/* خود منو */}
                  <div
                    className="
                      rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 p-2
                      opacity-0 translate-y-1 pointer-events-none
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                      focus-within:opacity-100 focus-within:translate-y-0 focus-within:pointer-events-auto
                      transition duration-150
                    "
                  >
                    {['بهداشت','آرایشی','خانه و سبک زندگی','سوپرمارکت'].map(item => (
                      <a
                        key={item}
                        href="#"
                        className="block px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>  
              <a className="px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition" href="#">پرفروش‌ترین‌ها</a>
              <a className="px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition" href="#">تخفیف‌دارها</a>
              <a className="px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition" href="#">سوالی دارید؟</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={18} />
                  <input
                    className="peer w-56 lg:w-72 rounded-2xl bg-white/5 text-white placeholder-white/40 border border-white/10 outline-none py-2.5 pl-9 pr-4 focus:bg-white/10 focus:border-white/20 transition"
                    placeholder="دنبال چی می‌گردی؟"
                  />
                </div>
              </div>
              <a href="#" className="hidden md:inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white px-3 py-2 transition" title="ورود / ثبت‌نام">
                <LogIn size={18} /><span className="text-sm">ورود/ثبت‌نام</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white px-3 py-2 transition" title="سبد خرید">
                <ShoppingCart size={18} /><span className="hidden sm:inline text-sm">سبد خرید</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}