import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export function HeadeDown() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLink =
    "flex items-center gap-1 text-sm text-gray-600 hover:text-blue-700 transition whitespace-nowrap";
  const navIcon = "w-5 h-5";

  const renderIcon = (iconName) => {
    const iconProps = { className: navIcon, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" };
    
    switch (iconName) {
      case "home":
        return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
      case "shopping":
        return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>;
      case "fire":
        return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>;
      case "percent":
        return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
      case "question":
        return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
      default:
        return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>;
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { label: "سوالی دارید", icon: "question" },
    { label: "شگفت‌انگیزها", icon: "percent" },
    { label: "پرفروش‌ترین‌ها", icon: "fire" },
    { to: "/products", label: "همه محصولات", icon: "shopping" },
    { to: "/", label: "خانه", icon: "home" },
  ];

  return (
    <header className="bg-gray-200 shadow p-4 flex  gap-3 lg:flex-row  justify-between lg:items-center">
  {/* شهر و عرضه کالا */}
  <div className="flex flex-col items-center gap-2 flex-nowrap">
    <div className="flex items-center justify-center w-44 border border-gray-500 p-1  rounded-full whitespace-nowrap shrink-0 text-[10px] sm:text-xs px-1.5 sm:px-2">
      <svg className="w-3.5 sm:w-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span className="text-gray-500 mr-1">شهر خود را انتخاب کنید</span>
    </div>

    <div className="flex items-center w-44 border border-gray-500 p-1 rounded-full whitespace-nowrap shrink-0 text-[10px]  px-1.5 ">
      <Link to={'/addProduct'}> افزودن کالا/Admin</Link>
    </div>
  </div>

  {/* دسته‌بندی + همبرگری */}
  <div className="relative flex items-center gap-2 lg:static" ref={menuRef}>
    <Link className={`${navLink} text-[11px] sm:text-xs`}>
      <svg className={`${navIcon} w-4 sm:w-5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      دسته‌بندی محصولات
    </Link>

    {/* همبرگری (موبایل) */}
    <button
      className="min-[810px]:hidden p-2 rounded hover:bg-gray-300 transition"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {/* منوی موبایل */}
    <div
      className={`absolute top-full right-0 mt-2 w-44 sm:w-40 bg-white shadow rounded-md  p-2 z-50 flex flex-col gap-2 transition-all duration-300 origin-top-right ${
        menuOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"
      }`}
    >
      {links.map(({ to = "#", label, icon }, i) => (
        <Link key={i} to={to} className={`${navLink} text-[11px]  sm:text-xs`}>
          {renderIcon(icon)}
          {label}
        </Link>
      ))}
    </div>
  </div>

  {/* منوی کامل (دسکتاپ) */}
  <nav className="hidden min-[810px]:flex gap-4 items-center">
    {links.map(({ to = "#", label, icon }, i) => (
      <Link key={i} to={to} className={`${navLink} text-[11px] sm:text-xs`}>
        {renderIcon(icon)}
        {label}
      </Link>
    ))}
  </nav>
</header>

  );
}
