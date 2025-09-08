import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ShoppingBagIcon,
  MapPinIcon,
  BarsArrowDownIcon,
  FireIcon,
  PercentBadgeIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export function HeadeDown() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLink =
    "flex items-center gap-1 text-sm text-gray-600 hover:text-blue-700 transition whitespace-nowrap";
  const navIcon = "w-5 h-5";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { label: "سوالی دارید", icon: QuestionMarkCircleIcon },
    { label: "شگفت‌انگیزها", icon: PercentBadgeIcon },
    { label: "پرفروش‌ترین‌ها", icon: FireIcon },
    { to: "/products", label: "همه محصولات", icon: ShoppingBagIcon },
    { to: "/", label: "خانه", icon: HomeIcon },
  ];

  return (
    <header className="bg-black shadow p-4 flex  gap-3 lg:flex-row  justify-between lg:items-center">
  {/* شهر و عرضه کالا */}
  <div className="flex flex-col items-center gap-2 flex-nowrap">
    <div className="flex items-center justify-center w-44 border border-gray-500 p-1  rounded-full whitespace-nowrap shrink-0 text-[10px] sm:text-xs px-1.5 sm:px-2">
      <MapPinIcon className="w-3.5 sm:w-4 text-red-400" />
      <span className="text-white mr-1">شهر خود را انتخاب کنید</span>
    </div>

    <div className="flex items-center w-44 border border-white p-1 rounded-full text-white whitespace-nowrap shrink-0 text-[10px]  px-1.5 ">
      <Link to={'/addProduct'}> افزودن کالا/Admin</Link>
    </div>
  </div>

  {/* دسته‌بندی + همبرگری */}
  <div className="relative flex items-center gap-2 lg:static" ref={menuRef}>
    <Link className={`${navLink} text-[11px] sm:text-xs`}>
      <BarsArrowDownIcon className={`${navIcon} w-4 sm:w-5`} />
      دسته‌بندی محصولات
    </Link>

    {/* همبرگری (موبایل) */}
    <button
      className="min-[810px]:hidden p-2 rounded hover:bg-gray-300 transition"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      <Bars3Icon className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700" />
    </button>

    {/* منوی موبایل */}
    <div
      className={`absolute top-full right-0 mt-2 w-44 sm:w-40 bg-white shadow rounded-md  p-2 z-50 flex flex-col gap-2 transition-all duration-300 origin-top-right ${
        menuOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"
      }`}
    >
      {links.map(({ to = "#", label, icon: Icon }, i) => (
        <Link key={i} to={to} className={`${navLink} text-[11px]  sm:text-xs`}>
          <Icon className="w-4 sm:w-5" />
          {label}
        </Link>
      ))}
    </div>
  </div>

  {/* منوی کامل (دسکتاپ) */}
  <nav className="hidden min-[810px]:flex gap-4 items-center">
    {links.map(({ to = "#", label, icon: Icon }, i) => (
      <Link key={i} to={to} className={`${navLink} text-[11px] sm:text-xs`}>
        <Icon className="w-4 sm:w-5" />
        {label}
      </Link>
    ))}
  </nav>
</header>

  );
}
