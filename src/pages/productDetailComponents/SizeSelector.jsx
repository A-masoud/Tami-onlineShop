import { useEffect, useRef, useState } from "react";

export function SizeSelctor({
  options = [],
  value,
  onChange,
  className = "",
  itemClass = "",
}) {
  const scrollerRef = useRef(null);
  const [itemH, setItemH] = useState(0);
  const [padPx, setPadPx] = useState(0);
  const [index, setIndex] = useState(() =>
    Math.max(0, options.indexOf(value ?? options[0]))
  );

  // اندازه آیتم و padding دقیق (بر اساس ارتفاع ظرف)
  useEffect(() => {
    const el = scrollerRef.current;
    const it = el?.querySelector("[data-item]");
    if (el && it) {
      const h = it.getBoundingClientRect().height;
      setItemH(h);
      const c = el.clientHeight;
      setPadPx(Math.max(0, (c - h) / 2)); // ← پدینگ دینامیک
    }
  }, [options]);

  // سینک با prop value
  useEffect(() => {
    if (value == null) return;
    const i = options.indexOf(value);
    if (i !== -1) setIndex(i);
  }, [value, options]);

  // اسکرول اولیه به مرکز
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !itemH) return;
    const top = padPx + index * itemH - (el.clientHeight - itemH) / 2;
    el.scrollTo({ top, behavior: "auto" });
  }, [itemH, padPx, index]);

  // تشخیص آیتم نزدیک مرکز
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !itemH) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const centerY = el.scrollTop + el.clientHeight / 2;
        const approx = Math.round((centerY - padPx - itemH / 2) / itemH);
        const clamped = Math.max(0, Math.min(options.length - 1, approx));
        if (clamped !== index) setIndex(clamped);
        ticking = false;
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [itemH, padPx, options.length, index]);

  useEffect(() => {
    onChange?.(options[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const goTo = (i) => {
    const el = scrollerRef.current;
    if (!el || !itemH) return;
    const top = padPx + i * itemH - (el.clientHeight - itemH) / 2;
    el.scrollTo({ top, behavior: "smooth" });
    setIndex(i);
  };

  return (
    <div className={`relative w-28 ${className}`}>
      {/* کادر انتخاب وسط */}
      <div
        className="pointer-events-none absolute left-1 right-1 top-1/2 -translate-y-1/2
                    h-12 rounded-xl ring-1 ring-white/15 bg-white/[0.02] backdrop-blur-[1px] z-10"
      />

      {/* لیست */}
      <div
        ref={scrollerRef}
        className="relative z-20 h-56 overflow-y-auto snap-y snap-mandatory
                   scroll-smooth text-center no-scrollbar pointer-events-auto
                   touch-pan-y overscroll-y-contain select-none"
        style={{ paddingTop: padPx, paddingBottom: padPx }}
        role="listbox"
        aria-activedescendant={`wp-${index}`}
      >
        {options.map((opt, i) => (
          <div
            key={opt}
            id={`wp-${i}`}
            data-item
            onClick={() => goTo(i)}
            role="option"
            aria-selected={i === index}
            className={`snap-center h-[60px] grid place-items-center transition
                        ${i === index ? "text-white font-bold scale-110"
                                      : "text-white/55"}
                        ${itemClass}`}
          >
            {opt}
          </div>
        ))}
      </div>

      {/* محو بالا */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10
                      bg-gradient-to-b from-[var(--primary-color-light)] to-transparent z-0" />

      {/* محو پایین */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10
                      bg-gradient-to-t from-[var(--primary-color-light)] to-transparent z-0" />
    </div>
  );
}
