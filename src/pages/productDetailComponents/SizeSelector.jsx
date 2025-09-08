import { useEffect, useMemo, useRef, useState } from "react";

export function SizeSelector({ sizes, selectedSize, setSelectedSize }) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const itemHeight = 56;
  const [pad, setPad] = useState(0);
  const [activeIndex, setActiveIndex] = useState(
    Math.max(0, sizes.indexOf(selectedSize))
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setPad(Math.max(0, Math.round(el.clientHeight / 2 - itemHeight / 2)));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const scroller = containerRef.current;
    if (!scroller) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const rect = scroller.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        let bestIdx = 0, bestDist = Infinity;
        itemsRef.current.forEach((item, idx) => {
          if (!item) return;
          const r = item.getBoundingClientRect();
          const d = Math.abs((r.top + r.height / 2) - centerY);
          if (d < bestDist) { bestDist = d; bestIdx = idx; }
        });
        if (bestIdx !== activeIndex) {
          setActiveIndex(bestIdx);
          setSelectedSize(sizes[bestIdx]);
        }
      });
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [activeIndex, sizes, setSelectedSize]);

  const scrollToIndex = (i) =>
    itemsRef.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });

  itemsRef.current = [];

  const padStyle = useMemo(
    () => ({ paddingTop: pad, paddingBottom: pad }),
    [pad]
  );

  return (
<<<<<<< Updated upstream
    <div className="relative w-16 h-full">
      <div
        ref={containerRef}
        style={padStyle}
        className="h-full overflow-y-auto snap-y snap-mandatory no-scrollbar rounded-2xl"
        role="listbox"
        aria-activedescendant={`size-${activeIndex}`}
      >
        {sizes.map((size, i) => {
          const active = i === activeIndex;
          return (
            <div
              key={size}
              id={`size-${i}`}
              ref={(el) => (itemsRef.current[i] = el)}
              role="option"
              aria-selected={active}
              onClick={() => { setActiveIndex(i); setSelectedSize(size); scrollToIndex(i); }}
              className={[
                "snap-center h-14 flex items-center justify-center font-semibold text-base relative",
                "transition-transform duration-150",
                active ? "scale-110" : "opacity-60",
              ].join(" ")}
            >
              {/* قرص سفید پشت آیتم فعال — توجه: z-0 (نه منفی) */}
              <span
                className={[
                  "absolute inset-x-2 inset-y-2 rounded-xl shadow-lg",
                  active ? "bg-white z-0" : "bg-transparent",
                ].join(" ")}
              />
              {/* متن روی قرص سفید */}
              <span className={active ? "text-neutral-900 relative z-10" : "text-indigo-200/80 relative z-10"}>
                {size}
              </span>
            </div>
          );
        })}
=======
    <div className="w-2/12 h-48 text-right">
      <h3 className="text-gray-500 mr-1.5">سایز</h3>
      <div className="h-full flex flex-col gap-2 p-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold ${
              selectedSize === size
                ? "bg-[var(--quaternary-color)] text-black"
                : " text-gray-400"
            }`}
          >
            {size}
          </button>
        ))}
>>>>>>> Stashed changes
      </div>
    </div>
  );
}