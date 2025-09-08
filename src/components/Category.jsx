import { useState } from "react";
import jacketImg from "../assets/men-jacket.png";
import shoes1 from "../assets/shoes1.png";
import shoes2 from "../assets/shoes2.png";
import vestImg from "../assets/jacket-2.png";

function Heart({ filled }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

function Bag() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2h12l1 7H5l1-7z"/><path d="M3 9h18l-1 11H4L3 9z"/><path d="M9 13h6"/>
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  );
}

export default function Category() {
  const [likedA, setLikedA] = useState(false);
  const [likedB, setLikedB] = useState(false);

  const cardBase =
    "rounded-3xl border border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,.3)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl";
  const brownGrad =
    "bg-[linear-gradient(180deg,rgba(250,99,32,.28)_0%,rgba(34,24,18,.65)_45%,rgba(0,0,0,.75)_100%)]";

  return (
    <div dir="rtl" className="w-full py-10 flex justify-center">
      <div
        className="rounded-[32px] p-4 shadow-2xl border border-white/10
                   bg-[var(--primary-color-light)] text-[var(--secondary-color)]
                   w-[min(92vw,430px)] sm:w-[400px] md:w-[420px] lg:w-[430px]
                   sm:scale-[1.02] md:scale-[1.08] lg:scale-[1.14] xl:scale-[1.2]
                   origin-top transition-transform"
      >
        <header className="mb-4 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <b className="text-stone-300 tracking-wider">پوشاک</b>
            <b className="tracking-wider text-[var(--quaternary-color)]">تامی</b>
          </div>
          <button
            className="relative rounded-2xl p-2 bg-[#313131] border border-white/10 hover:scale-105 transition-transform"
            aria-label="سبد خرید"
          >
            <CartIcon />
            <span className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 rounded-full grid place-items-center text-[10px] font-bold text-white bg-[var(--quinary-color)]">
              4
            </span>
          </button>
        </header>

        <section className={`relative mb-3 ${cardBase} overflow-hidden h-[220px]`}>
          <img src={jacketImg} alt="کت بارانی" className="absolute inset-0 w-full h-full object-cover object-[40%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-[55%] p-4 flex flex-col justify-center z-10">
            <div className="mb-2 flex items-center gap-1 text-[11px] font-bold text-[var(--quaternary-color)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 11v2h3l4 4V7L6 11H3zM14 7h2v10h-2zM18 9h2v6h-2z"/></svg>
              <span>عرض محدود</span>
            </div>
            <h2 className="text-[20px] font-black leading-tight drop-shadow-sm">کت بارانی تقویت‌شده</h2>
            <button className="mt-3 inline-flex items-center gap-1 rounded-xl px-6 py-2 text-sm font-bold text-[var(--primary-color)] bg-[var(--quaternary-color)] hover:brightness-110 transition">
              مشاهده مجموعه
            </button>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3 mb-3">
          <button
            className="relative aspect-[1/1] rounded-3xl overflow-hidden border border-white/10
                       shadow-[inset_0_0_20px_rgba(0,0,0,.35)]
                       bg-[linear-gradient(180deg,rgba(250,99,32,.25)_0%,#1b1b1b_70%,#0e0e0e_100%)]
                       flex items-center justify-center
                       transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-14 h-14 text-[var(--secondary-color)] opacity-90" fill="currentColor" aria-hidden="true">
              <path d="M296 357.9L296 528C296 554.5 274.5 576 248 576L144 576C117.5 576 96 554.5 96 528L96 334.5C96 325 98.8 315.8 104.1 307.9L152 236.1C157.3 228.2 160.1 219 160.1 209.5L160 112C160 85.5 181.5 64 208 64L211.5 64C211.8 64 212.1 64 212.5 64C213.1 64 213.7 64 214.3 64C233.1 64 248.4 73.7 258.4 82.8C267.7 91.2 286.9 104 320.1 104C353.3 104 372.5 91.2 381.8 82.8C391.8 73.7 407.1 64 425.9 64C426.5 64 427.1 64 427.7 64C428 64 428.3 64 428.7 64L432 64C458.5 64 480 85.5 480 112L480 209.5C480 219 482.8 228.2 488.1 236.1L536 307.9C541.3 315.8 544.1 325 544.1 334.5L544 528C544 554.5 522.5 576 496 576L392 576C365.5 576 344 554.5 344 528L344 357.9C344 354 344.5 350.1 345.4 346.3L399.6 129.4C381.9 141.2 355.8 152 320 152C284.2 152 258.1 141.2 240.4 129.4L294.6 346.2C295.6 350 296 353.9 296 357.8zM192 520C214.1 520 232 502.1 232 480C232 457.9 214.1 440 192 440C169.9 440 152 457.9 152 480C152 502.1 169.9 520 192 520zM159.5 319.5C154.8 324.2 154.8 331.8 159.5 336.5L175 352L159.5 367.5C154.8 372.2 154.8 379.8 159.5 384.5C164.2 389.2 171.8 389.2 176.5 384.5L192 369L207.5 384.5C212.2 389.2 219.8 389.2 224.5 384.5C229.2 379.8 229.2 372.2 224.5 367.5L209 352L224.5 336.5C229.2 331.8 229.2 324.2 224.5 319.5C219.8 314.8 212.2 314.8 207.5 319.5L192 335L176.5 319.5C171.8 314.8 164.2 314.8 159.5 319.5zM400 344L400 384C400 392.8 407.2 400 416 400L456 400C469.3 400 480 389.3 480 376C480 362.7 469.3 352 456 352L448 352L448 344C448 330.7 437.3 320 424 320C410.7 320 400 330.7 400 344z"/>
            </svg>
            <span className="absolute bottom-3 right-3 font-bold">کت‌ها</span>
          </button>

          <div className="relative aspect-[1/1] rounded-3xl overflow-hidden border border-white/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img src={shoes1} alt="کفش چرمی" className="w-full h-full object-cover" />
            <span className="absolute top-3 right-3 text-[13px] font-extrabold px-2 py-1 rounded-lg bg-black/50 text-white">
              ۲,۰۰۰,۰۰۰ تومان
            </span>
            <div className="absolute bottom-3 left-3 flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[var(--quaternary-color)]" />
              <span className="w-2 h-2 rounded-full bg-white/30" />
              <span className="w-2 h-2 rounded-full bg-white/30" />
            </div>
          </div>

          <button
            className="relative aspect-[1/1] rounded-3xl overflow-hidden border border-white/10
                       shadow-[inset_0_0_20px_rgba(0,0,0,.35)]
                       bg-[linear-gradient(180deg,rgba(250,99,32,.25)_0%,#1b1b1b_70%,#0e0e0e_100%)]
                       flex items-center justify-center
                       transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 text-[var(--secondary-color)] opacity-90" fill="currentColor" aria-hidden="true">
              <path d="M320 96V80c0-26.5-21.5-48-48-48H240c-26.5 0-48 21.5-48 48v16H80c-26.5 0-48 21.5-48 48v272c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H320zm-96 0V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v16h-64z"/>
            </svg>
            <span className="absolute bottom-3 right-3 font-bold">کیف‌ها</span>
          </button>

          <div className="relative aspect-[1/1] rounded-3xl overflow-hidden border border-white/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img src={shoes2} alt="کفش چرمی" className="w-full h-full object-cover" />
            <span className="absolute top-3 right-3 text-[13px] font-extrabold px-2 py-1 rounded-lg bg-black/50 text-white">
              ۳,۸۰۰,۰۰۰ تومان
            </span>
            <div className="absolute bottom-3 left-3 flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[var(--quaternary-color)]" />
              <span className="w-2 h-2 rounded-full bg-white/30" />
              <span className="w-2 h-2 rounded-full bg-white/30" />
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between mx-1 mb-2">
          <b className="text-[15px]">محصولات محبوب</b>
          <span className="inline-flex items-center gap-1 text-xs text-[var(--tertiary-color)]">
            <Bag /> فیلترها
          </span>
        </div>

        <section className="grid grid-cols-2 gap-3 pb-2">
          <div className={`relative p-3 ${cardBase} ${brownGrad}`}>
            <div className="absolute top-3 right-3 text-[12px] font-bold px-2 py-1 rounded-lg border border-white/10 bg-[var(--primary-color)] text-[var(--tertiary-color)]">-10%</div>
            <button
              aria-label="پسندیدن"
              onClick={() => setLikedA((v) => !v)}
              className={`absolute top-3 left-3 grid place-items-center w-7 h-7 rounded-full border border-white/15 transition ${likedA ? "bg-[var(--primary-color)] text-[var(--quinary-color)]" : "text-[var(--tertiary-color)] hover:scale-110"}`}
            >
              <Heart filled={likedA} />
            </button>
            <img src={vestImg} alt="جلیقه یونیتی" className="mt-9 rounded-2xl aspect-[3/2] object-cover" />
            <div className="mt-3 flex items-end justify-between">
              <div className="text-sm">جلیقه یونیتی</div>
              <div className="text-sm font-bold px-2 py-1 rounded-lg border border-white/10 bg-[var(--primary-color)]">۲,۲۰۰,۰۰۰ تومان</div>
            </div>
          </div>

          <div className={`relative p-3 ${cardBase} ${brownGrad}`}>
            <div className="absolute top-3 right-3 text-[12px] font-bold px-2 py-1 rounded-lg border border-white/10 bg-[var(--primary-color)] text-[var(--tertiary-color)]">-15%</div>
            <button
              aria-label="پسندیدن"
              onClick={() => setLikedB((v) => !v)}
              className={`absolute top-3 left-3 grid place-items-center w-7 h-7 rounded-full border border-white/15 transition ${likedB ? "bg-[var(--primary-color)] text-[var(--quinary-color)]" : "text-[var(--tertiary-color)] hover:scale-110"}`}
            >
              <Heart filled={likedB} />
            </button>
            <img src={vestImg} alt="شلوار" className="mt-9 rounded-2xl aspect-[3/2] object-cover" />
            <div className="mt-3 flex items-end justify-between">
              <div className="text-sm">شلوار</div>
              <div className="text-sm font-bold px-2 py-1 rounded-lg border border-white/10 bg-[var(--primary-color)]">۱,۲۰۰,۰۰۰ تومان</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}