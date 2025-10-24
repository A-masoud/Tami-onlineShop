"use client";
import { useEffect, useState } from "react";
import { ShoppingCart, ChevronDown, Search } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/tommy shop logo.png'

const cn = (...c) => c.filter(Boolean).join(" ");

export default function HeaderUp() {
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!query.trim()) return setSuggestions([]);
      try {
        const res = await fetch(`http://localhost:5000/api/products/search?q=${query}`);
        const data = await res.json();
        setSuggestions(data.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    };

    const timeout = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSuggestions([]);
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
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
          <Link to="/" className="flex items-center gap-3 shrink-0 text-white" aria-label="خانه">
            <div className="w-15 rounded-full bg-white text-black grid place-items-center font-black">
              <img className="rounded-full" src={logo} alt="" />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 text-sm">
            <Link to="/" className="px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">خانه</Link>
            <div className="relative group before:content-[''] before:absolute before:left-0 before:right-0 before:top-full before:h-2">
              <button className="flex items-center gap-1 px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">
                دسته‌بندی‌ها <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 top-full min-w-56 pt-2 z-50">
                <div className="rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 p-2
                    opacity-0 translate-y-1 pointer-events-none
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                    focus-within:opacity-100 focus-within:translate-y-0 focus-within:pointer-events-auto
                    transition duration-150"
                >
                  {['بهداشت','آرایشی','خانه و سبک زندگی','سوپرمارکت'].map(item => (
                    <Link key={item} to="#" className="block px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10">{item}</Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="#" className="px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">پرفروش‌ترین‌ها</Link>
            <Link to="#" className="px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">تخفیف‌دارها</Link>
            <Link to="#" className="px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">سوالی دارید؟</Link>
          </nav>

          <div className="flex items-center gap-2 relative">
            <div className="hidden md:flex items-center gap-2">
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <Search className="absolute text-[#FA6320] left-3 top-1/2 -translate-y-1/2" size={18} />
                <input
                  className="peer w-56 lg:w-72 rounded-2xl bg-white/5 text-white placeholder-white/40 border border-white/10 outline-none py-2.5 pl-9 pr-4 focus:bg-white/10 focus:border-white/20 transition"
                  placeholder="دنبال چی می‌گردی؟"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {suggestions.length > 0 && (
                  <div className="absolute left-0 mt-1 w-full bg-black/80 backdrop-blur-md rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                    {suggestions.map((p) => (
                      <div
                        key={p._id}
                        className="px-3 py-2 text-white hover:bg-white/10 cursor-pointer"
                        onClick={() => {
                          setQuery(p.name);
                          setSuggestions([]);
                          navigate(`/search?q=${encodeURIComponent(p.name)}`);
                        }}
                      >
                        {p.name}
                      </div>
                    ))}
                  </div>
                )}
              </form>
            </div>

            <Link
              to="/login"
              state={{ backgroundLocation: location }}
              className="hidden md:inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white px-3 py-2 transition text-sm"
              title="ورود / ثبت‌نام"
            >
              ورود / ثبت‌نام
            </Link>

            <Link
              to="/masoudcart"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white px-3 py-2 transition"
              title="سبد خرید"
            >
              <ShoppingCart size={18} />
              <span className="hidden sm:inline text-sm">سبد خرید</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
