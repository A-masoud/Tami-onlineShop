// Header-Down.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { Home, ListTree, Search, ShoppingCart, User2 } from "lucide-react";

const cx = (...c) => c.filter(Boolean).join(" ");

export default function HeaderDown() {
  const [scrolled, setScrolled] = useState(false);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const [topH, setTopH] = useState(56);   // fallback
  const [bottomH, setBottomH] = useState(72);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (topRef.current) setTopH(topRef.current.offsetHeight);
      if (bottomRef.current) {
        const h = bottomRef.current.offsetHeight;
        setBottomH(h);
        // ارتفاع نوار پایین را به صورت سراسری اعلام کن (برای شیت فیلتر)
        document.documentElement.style.setProperty("--tabbar-h", `${h}px`);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    const id = setInterval(measure, 200);
    setTimeout(() => clearInterval(id), 1200);
    return () => {
      window.removeEventListener("resize", measure);
      clearInterval(id);
    };
  }, []);

  return (
    <>
      {/* ===== هدر بالای موبایل ===== */}
      <header
        ref={topRef}
        dir="rtl"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
        className={cx(
          "lg:hidden fixed top-0 inset-x-0 z-50",
          "h-14 flex items-center",
          "backdrop-blur-md border-b",
          scrolled ? "bg-black/60 border-white/10" : "bg-black/30 border-white/5"
        )}
      >
        <div className="flex items-center justify-between w-full px-4">
          <div className="w-9 grid place-items-center">
            <div className="h-8 w-8 rounded-full bg-white text-black grid place-items-center text-xs font-black">T</div>
          </div>
          <h1 className="text-white font-bold tracking-tight text-base">پوشاک تامی</h1>
          <div className="w-9" aria-hidden />
        </div>
      </header>

      {/* اسپیسر برابر ارتفاع هدر */}
      <div className="lg:hidden" style={{ height: topH }} aria-hidden />

      {/* ===== نوار پایین موبایل ===== */}
      <nav
        ref={bottomRef}
        dir="rtl"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        className={cx(
          "lg:hidden fixed bottom-0 inset-x-0 z-50",
          "backdrop-blur-md border-t",
          scrolled ? "bg-black/60 border-white/10" : "bg-black/30 border-white/5"
        )}
        aria-label="پیمایش پایین موبایل"
      >
        <ul className="grid grid-cols-5 px-2 py-2">
          {[
            { icon: <Home size={22} />, label: "خانه", href: "#" },
            { icon: <ListTree size={22} />, label: "دسته‌ها", href: "#" },
            { icon: <Search size={24} />, label: "جستجو", href: "#" },
            { icon: <ShoppingCart size={22} />, label: "سبد", href: "#" },
            { icon: <User2 size={22} />, label: "حساب", href: "#" },
          ].map((item) => (
            <li key={item.label} className="flex justify-center">
              <a className="flex flex-col items-center justify-center gap-1 text-[11px] text-white/90" href={item.href}>
                <div className="p-2 rounded-2xl border border-white/10 bg-white/5">{item.icon}</div>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* اسپیسر برابر ارتفاع نوار پایین */}
      <div className="lg:hidden" style={{ height: bottomH }} aria-hidden />
    </>
  );
}