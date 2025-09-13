// Category.jsx
import { useEffect, useMemo, useState } from "react";
import jacketImg from "../assets/men-jacket.png";
import shoes1 from "../assets/shoes1.png";
import shoes2 from "../assets/shoes2.png";
import vestImg from "../assets/jacket-2.png";

/* Icons (JSX only) */
function Heart({ filled }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}
function Bag() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 2h12l1 7H5l1-7z"/><path d="M3 9h18l-1 11H4L3 9z"/><path d="M9 13h6"/>
    </svg>
  );
}
function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 3H2l8 9v7l4 2v-9l8-9z"/>
    </svg>
  );
}
function SortIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 18h6M3 6h18M3 12h12"/>
    </svg>
  );
}

/* Utils */
const toman = (n) => `${new Intl.NumberFormat("fa-IR").format(n)} تومان`;
const cls = (...arr) => arr.filter(Boolean).join(" ");

/* Mock Data */
const PRODUCTS = [
  {
    id: "ct-001",
    title: "کت بارانی تقویت‌شده",
    price: 4200000,
    img: jacketImg,
    category: "کت‌ها",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#111111", "#7a5230"],
    material: "polyester",
    brand: "Unity",
    season: "autumn",
    dateAdded: "2025-08-29",
    popularity: 96,
    discount: 20,
  },
  {
    id: "ct-002",
    title: "جلیقه یونیتی",
    price: 2200000,
    img: vestImg,
    category: "هودی‌ها",
    sizes: ["S", "M", "L"],
    colors: ["#222222", "#c0c0c0"],
    material: "cotton",
    brand: "Unity",
    season: "winter",
    dateAdded: "2025-07-10",
    popularity: 75,
    discount: 10,
  },
  {
    id: "ct-003",
    title: "شلوار تاکتیکال",
    price: 1200000,
    img: vestImg,
    category: "کت‌ها",
    sizes: ["M", "L", "XL"],
    colors: ["#1f2937"],
    material: "polyester",
    brand: "UrbanX",
    season: "winter",
    dateAdded: "2025-06-25",
    popularity: 80,
    discount: 15,
  },
  {
    id: "sh-001",
    title: "کفش چرمی کلاسیک",
    price: 2000000,
    img: shoes1,
    category: "کفش‌ها",
    sizes: ["40", "41", "42", "43"],
    colors: ["#000000", "#6b3f1d"],
    material: "leather",
    brand: "Arman",
    season: "autumn",
    dateAdded: "2025-09-01",
    popularity: 88,
  },
  {
    id: "sh-002",
    title: "کفش رانینگ",
    price: 3800000,
    img: shoes2,
    category: "کفش‌ها",
    sizes: ["40", "41", "42"],
    colors: ["#1e3a8a", "#e5e7eb"],
    material: "polyester",
    brand: "Fleet",
    season: "summer",
    dateAdded: "2025-08-15",
    popularity: 60,
  },
  {
    id: "bg-001",
    title: "کیف شانه‌ای مینیمال",
    price: 1650000,
    img: vestImg,
    category: "کیف‌ها",
    sizes: ["Free"],
    colors: ["#111111", "#4b5563"],
    material: "leather",
    brand: "Linea",
    season: "all",
    dateAdded: "2025-05-20",
    popularity: 70,
    discount: 12,
  },
];

const CATEGORIES = [
  { key: "کت‌ها", name: "کت‌ها", img: jacketImg },
  { key: "کفش‌ها", name: "کفش‌ها", img: shoes1 },
  { key: "کیف‌ها", name: "کیف‌ها", img: vestImg },
  { key: "هودی‌ها", name: "هودی‌ها", img: vestImg },
];

/* Reusable */
function LikeButton({ pressed, onToggle, label = "پسندیدن" }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onToggle}
      className={cls(
        "absolute top-3 left-3 grid place-items-center w-8 h-8 rounded-full",
        "border border-white/15 transition focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-white/40",
        pressed ? "bg-[var(--primary-color)] text-[var(--quinary-color)]" : "text-[var(--tertiary-color)] hover:scale-110"
      )}
    >
      <Heart filled={pressed} />
    </button>
  );
}

const SORT_OPTIONS = [
  { key: "newest", label: "جدیدترین" },
  { key: "popular", label: "محبوب‌ترین" },
  { key: "price-asc", label: "ارزان‌ترین" },
  { key: "price-desc", label: "گران‌ترین" },
];

export default function Category() {
  const [likes, setLikes] = useState({});
  const [sortKey, setSortKey] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  // قفل اسکرول پشت شیت وقتی بازه
  useEffect(() => {
    if (showFilters) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => { document.documentElement.style.overflow = prev; };
    }
  }, [showFilters]);

  // Facets
  const prices = PRODUCTS.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const allSizes = Array.from(new Set(PRODUCTS.flatMap((p) => p.sizes)));
  const allColors = Array.from(new Set(PRODUCTS.flatMap((p) => p.colors)));
  const allMaterials = Array.from(new Set(PRODUCTS.map((p) => p.material)));
  const allBrands = Array.from(new Set(PRODUCTS.map((p) => p.brand)));
  const allSeasons = Array.from(new Set(PRODUCTS.map((p) => p.season)));

  const [filters, setFilters] = useState({
    categories: new Set(),
    sizes: new Set(),
    colors: new Set(),
    materials: new Set(),
    brands: new Set(),
    seasons: new Set(),
    priceMin: minPrice,
    priceMax: maxPrice,
  });

  // persist likes
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("likes") || "{}");
      setLikes(saved);
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const toggleLike = (id) => setLikes((prev) => ({ ...prev, [id]: !prev[id] }));

  const updateSet = (setName, value) => {
    setFilters((prev) => {
      const next = { ...prev, [setName]: new Set(prev[setName]) };
      const S = next[setName];
      if (S.has(value)) S.delete(value);
      else S.add(value);
      return next;
    });
  };

  const clearAllFilters = () =>
    setFilters({
      categories: new Set(),
      sizes: new Set(),
      colors: new Set(),
      materials: new Set(),
      brands: new Set(),
      seasons: new Set(),
      priceMin: minPrice,
      priceMax: maxPrice,
    });

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const inCat = filters.categories.size ? filters.categories.has(p.category) : true;
      const sizeOk = filters.sizes.size ? p.sizes.some((s) => filters.sizes.has(s)) : true;
      const colorOk = filters.colors.size ? p.colors.some((c) => filters.colors.has(c)) : true;
      const materialOk = filters.materials.size ? filters.materials.has(p.material) : true;
      const brandOk = filters.brands.size ? filters.brands.has(p.brand) : true;
      const seasonOk = filters.seasons.size ? filters.seasons.has(p.season) : true;
      const priceOk = (filters.priceMin ?? minPrice) <= p.price && p.price <= (filters.priceMax ?? maxPrice);
      return inCat && sizeOk && colorOk && materialOk && brandOk && seasonOk && priceOk;
    });
  }, [filters]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sortKey) {
      case "newest":
        arr.sort((a, b) => +new Date(b.dateAdded) - +new Date(a.dateAdded));
        break;
      case "popular":
        arr.sort((a, b) => b.popularity - a.popularity);
        break;
      case "price-asc":
        arr.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        arr.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return arr;
  }, [filtered, sortKey]);

  const cardBase =
    "rounded-3xl border border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,.3)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl";
  const brownGrad =
    "bg-[linear-gradient(180deg,rgba(250,99,32,.28)_0%,rgba(34,24,18,.65)_45%,rgba(0,0,0,.75)_100%)]";

  const CategoryBoxes = () => (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-10">
      {CATEGORIES.map((c) => (
        <button
          key={c.key}
          type="button"
          onClick={() => updateSet("categories", c.key)}
          className={cls(
            "relative aspect-[1/1] rounded-3xl overflow-hidden border border-white/10",
            "shadow-[inset_0_0_20px_rgba(0,0,0,.35)]",
            "transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
            filters.categories.has(c.key) ? "ring-2 ring-[var(--quaternary-color)]" : ""
          )}
          aria-pressed={filters.categories.has(c.key)}
          aria-label={`فیلتر بر اساس ${c.name}`}
        >
          <img src={c.img} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
          <span className="absolute bottom-3 right-3 font-bold px-2 py-1 rounded-xl bg-black/40 backdrop-blur text-white">
            {c.name}
          </span>
        </button>
      ))}
    </section>
  );

  const SpecialOffer = () => (
    <aside className={cls("relative", cardBase, brownGrad, "overflow-hidden p-4 sm:p-6 mb-6")}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,99,32,.25),transparent_60%)]" aria-hidden />
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-extrabold text-[var(--quaternary-color)] mb-1">پیشنهاد ویژه</div>
          <h3 className="font-black text-lg sm:text-xl">تا ۳۰٪ تخفیف روی کت‌های زمستانی</h3>
          <p className="text-sm text-[var(--tertiary-color)] mt-1">
            فقط تا جمعه این هفته — کد تخفیف: <b>WINTER30</b>
          </p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-xl px-4 py-2 font-bold text-[var(--primary-color)] bg-[var(--quaternary-color)] hover:brightness-110"
        >
          مشاهده
        </button>
      </div>
    </aside>
  );

  const ColorDot = ({ color, checked, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      aria-label={`رنگ ${color}`}
      className={cls("w-7 h-7 rounded-full border", checked ? "ring-2 ring-white" : "opacity-90 hover:opacity-100")}
      style={{ background: color, borderColor: "rgba(255,255,255,.3)" }}
    />
  );

  const Chip = ({ label, checked, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={cls(
        "px-3 py-1 rounded-xl border text-sm",
        checked ? "bg-white/10 border-white/30" : "bg-transparent border-white/10 hover:border-white/30"
      )}
      aria-pressed={checked}
    >
      {label}
    </button>
  );

  const FilterSection = ({ title, children }) => (
    <div className="mb-4">
      <div className="text-xs font-bold text-[var(--tertiary-color)] mb-2">{title}</div>
      {children}
    </div>
  );

  const FiltersPanel = () => (
    <aside className={cls("p-3 sm:p-4", cardBase, brownGrad)}>
      <FilterSection title="سایز">
        <div className="flex flex-wrap gap-2">
          {allSizes.map((s) => (
            <Chip key={s} label={s} checked={filters.sizes.has(s)} onClick={() => updateSet("sizes", s)} />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="رنگ">
        <div className="flex flex-wrap gap-2">
          {allColors.map((c) => (
            <ColorDot key={c} color={c} checked={filters.colors.has(c)} onClick={() => updateSet("colors", c)} />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="قیمت">
        <div className="grid grid-cols-2 gap-2 items-center">
          <div className="text-xs text-[var(--tertiary-color)]">از</div>
          <input
            type="number"
            inputMode="numeric"
            className="w-full px-2 py-1 rounded-lg bg-black/30 border border-white/10"
            value={filters.priceMin ?? minPrice}
            min={minPrice}
            max={filters.priceMax ?? maxPrice}
            onChange={(e) => setFilters((prev) => ({ ...prev, priceMin: Number(e.target.value) }))}
          />
          <div className="text-xs text-[var(--tertiary-color)]">تا</div>
          <input
            type="number"
            inputMode="numeric"
            className="w-full px-2 py-1 rounded-lg bg-black/30 border border-white/10"
            value={filters.priceMax ?? maxPrice}
            min={filters.priceMin ?? minPrice}
            max={maxPrice}
            onChange={(e) => setFilters((prev) => ({ ...prev, priceMax: Number(e.target.value) }))}
          />
        </div>
        <div className="mt-2 text-xs text-[var(--tertiary-color)]">
          {toman(filters.priceMin ?? minPrice)} — {toman(filters.priceMax ?? maxPrice)}
        </div>
      </FilterSection>

      <FilterSection title="جنس">
        <div className="flex flex-wrap gap-2">
          {allMaterials.map((m) => (
            <Chip key={m} label={m} checked={filters.materials.has(m)} onClick={() => updateSet("materials", m)} />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="برند">
        <div className="flex flex-wrap gap-2">
          {allBrands.map((b) => (
            <Chip key={b} label={b} checked={filters.brands.has(b)} onClick={() => updateSet("brands", b)} />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="فصل">
        <div className="flex flex-wrap gap-2">
          {allSeasons.map((s) => (
            <Chip key={s} label={s} checked={filters.seasons.has(s)} onClick={() => updateSet("seasons", s)} />
          ))}
        </div>
      </FilterSection>

      <div className="flex items-center justify-between gap-2 mt-4">
        <button type="button" onClick={clearAllFilters} className="text-xs text-[var(--tertiary-color)] underline underline-offset-4">
          حذف همه فیلترها
        </button>
        <div className="text-xs text-[var(--tertiary-color)]">{filtered.length} نتیجه</div>
      </div>
    </aside>
  );

  const ActiveFiltersBar = () => {
    const chips = [];
    filters.categories.forEach((v) => chips.push({ key: `cat-${v}`, label: v, onRemove: () => updateSet("categories", v) }));
    filters.sizes.forEach((v) => chips.push({ key: `size-${v}`, label: `سایز ${v}`, onRemove: () => updateSet("sizes", v) }));
    filters.colors.forEach((v) => chips.push({ key: `color-${v}`, label: `رنگ`, onRemove: () => updateSet("colors", v) }));
    filters.materials.forEach((v) => chips.push({ key: `mat-${v}`, label: v, onRemove: () => updateSet("materials", v) }));
    filters.brands.forEach((v) => chips.push({ key: `brand-${v}`, label: v, onRemove: () => updateSet("brands", v) }));
    filters.seasons.forEach((v) => chips.push({ key: `season-${v}`, label: v, onRemove: () => updateSet("seasons", v) }));

    return (
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {chips.map((c) => (
          <button
            key={c.key}
            onClick={c.onRemove}
            className="group flex items-center gap-2 text-xs border border-white/15 rounded-full px-3 py-1 bg-white/5 hover:bg-white/10"
          >
            <span>{c.label}</span>
            <span className="opacity-60 group-hover:opacity-100">×</span>
          </button>
        ))}
        {chips.length > 0 && (
          <button onClick={clearAllFilters} className="text-xs text-[var(--tertiary-color)] underline underline-offset-4">
            پاک‌سازی
          </button>
        )}
      </div>
    );
  };

  return (
    <main dir="rtl" className="bg-[var(--primary-color)] text-[var(--secondary-color)]">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* هیرو */}
        <section className={cls("relative", cardBase, "overflow-hidden h-[220px] sm:h-[260px] lg:h-[340px] mb-6 lg:mb-10")}>
          <img src={jacketImg} alt="کت بارانی" className="absolute inset-0 w-full h-full object-cover object-[40%_center]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" aria-hidden />
          <div className="absolute inset-y-0 left-0 w-[65%] sm:w-[55%] lg:w-[40%] p-4 sm:p-6 lg:p-8 flex flex-col justify-center z-10">
            <div className="mb-2 sm:mb-3 flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[var(--quaternary-color)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 11v2h3l4 4V7L6 11H3zM14 7h2v10h-2zM18 9h2v6h-2z"/>
              </svg>
              <span>عرض محدود</span>
            </div>
            <h2 className="text-[20px] sm:text-2xl lg:text-3xl font-black leading-tight drop-shadow-sm">کت بارانی تقویت‌شده</h2>
            <button
              type="button"
              className="mt-3 sm:mt-4 inline-flex items-center gap-1 rounded-xl px-5 sm:px-6 lg:px-7 py-2 lg:py-3
                         text-sm lg:text-base font-bold text-[var(--primary-color)]
                         bg-[var(--quaternary-color)] hover:brightness-110 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              مشاهده مجموعه
            </button>
          </div>
        </section>

        {/* پیشنهاد ویژه */}
        <SpecialOffer />

        {/* باکس دسته‌ها */}
        <CategoryBoxes />

        {/* نوار ابزار */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <ActiveFiltersBar />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowFilters((v) => !v)}
              className="md:hidden inline-flex items-center gap-2 text-xs border border-white/15 rounded-xl px-3 py-2"
            >
              <FilterIcon /> فیلترها
            </button>
            <label className="hidden md:flex items-center gap-2 text-xs border border-white/15 rounded-xl px-2 py-1">
              <SortIcon />
              <select value={sortKey} onChange={(e) => setSortKey(e.target.value)} className="bg-transparent outline-none">
                {SORT_OPTIONS.map((o) => (
                  <option key={o.key} value={o.key} className="bg-[#111]">
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {/* بدنه */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* پنل فیلتر دسکتاپ */}
          <div className="hidden md:block md:col-span-4 lg:col-span-3">
            <FiltersPanel />
          </div>

          {/* لیست محصولات */}
          <div className="md:col-span-8 lg:col-span-9">
            {/* سورت موبایل */}
            <div className="md:hidden mb-3">
              <label className="flex items-center justify-between gap-2 text-xs border border-white/15 rounded-xl px-3 py-2">
                <span className="flex items-center gap-2"><SortIcon /> مرتب‌سازی</span>
                <select value={sortKey} onChange={(e) => setSortKey(e.target.value)} className="bg-transparent outline-none">
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.key} value={o.key} className="bg-[#111]">{o.label}</option>
                  ))}
                </select>
              </label>
            </div>

            {/* شبکه محصولات */}
            <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 pb-4">
              {sorted.map((p) => (
                <article key={p.id} className={cls("relative p-3 sm:p-4", cardBase, brownGrad)}>
                  {typeof p.discount === "number" && (
                    <div className="absolute top-3 right-3 text-[11px] sm:text-[12px] font-bold px-2 py-1 rounded-lg border border-white/10 bg-[var(--primary-color)] text-[var(--tertiary-color)]">-{p.discount}%</div>
                  )}
                  <LikeButton pressed={!!likes[p.id]} onToggle={() => toggleLike(p.id)} label={`پسندیدن ${p.title}`} />
                  <img src={p.img} alt={p.title} className="mt-8 rounded-2xl aspect-[3/2] object-cover" loading="lazy" />
                  <div className="mt-3 flex items-end justify-between">
                    <div className="text-sm sm:text-[15px] leading-tight">
                      <div className="font-medium">{p.title}</div>
                      <div className="text-[11px] text-[var(--tertiary-color)] mt-0.5">{p.brand} • {p.material}</div>
                    </div>
                    <div className="text-xs sm:text-sm font-bold px-2 py-1 rounded-lg border border-white/10 bg-[var(--primary-color)]">{toman(p.price)}</div>
                  </div>
                </article>
              ))}
              {sorted.length === 0 && (
                <div className="col-span-full text-center text-sm text-[var(--tertiary-color)]">محصولی مطابق فیلترهای شما پیدا نشد.</div>
              )}
            </section>
          </div>
        </div>

        {/* bottom-sheet فیلتر موبایل (راه ۲) */}
        {showFilters && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* اوورلی تا لبِ بالای نوار پایین */}
            <div
              className="absolute inset-x-0 top-0 bottom-[var(--tabbar-h,0px)] bg-black/60"
              onClick={() => setShowFilters(false)}
            />
            {/* خود شیت */}
            <div
              className="
                absolute inset-x-0
                bottom-[var(--tabbar-h,0px)]
                max-h-[calc(100%_-_var(--tabbar-h,0px))]
                rounded-t-3xl p-4
                bg-[var(--primary-color)] border-t border-white/10
                pb-[calc(env(safe-area-inset-bottom)_+_16px)]
                overscroll-contain
              "
            >
              <div className="flex items-center justify-between mb-3">
                <b>فیلترها</b>
                <button type="button" className="text-sm" onClick={() => setShowFilters(false)}>بستن</button>
              </div>
              <FiltersPanel />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}