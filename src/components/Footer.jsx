import React from "react";

const socials = [
  { label: "فیسبوک", href: "#" },
  { label: "توییتر", href: "#" },
  { label: "یوتیوب", href: "#" },
  { label: "اینستاگرام", href: "#" },
];

function SocialItem({ label, href }) {
  const ref = React.useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--x", `-9999px`);
    el.style.setProperty("--y", `-9999px`);
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative isolate flex items-center justify-between gap-3 p-4 sm:p-5 md:p-6 bg-black/40 hover:bg-black/50 backdrop-blur-md text-zinc-300 transition-colors hover:text-[#FA6320]"
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:radial-gradient(150px_100px_at_var(--x)_var(--y),rgba(255,255,255,.12),transparent_70%)]"
        aria-hidden="true"
      />
      <span className="relative z-10 text-[13px] sm:text-sm leading-5">{label}</span>
      <svg
        className="relative z-10 size-4 sm:size-[18px] md:size-5 transition-transform duration-300 group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </a>
  );
}

const Footer = () => {
  return (
    <footer className="relative">
      {/* سوشال‌بار */}
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 pt-0 pb-6 sm:pb-8">
        <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-md shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] divide-y divide-white/10 md:divide-y-0 md:divide-x [direction:rtl]">
          {socials.map((s) => (
            <SocialItem key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* بدنه فوتر */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 border-t border-white/10 pt-6 sm:pt-8 md:pt-10 pb-4">
            <div className="text-center md:text-right">
              <h3 className="text-[11px] sm:text-xs tracking-widest text-zinc-100/90 mb-2.5 sm:mb-3">درباره ما</h3>
              <ul className="space-y-2 sm:space-y-2.5 leading-6">
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">قیمت‌ها</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">تماس با ما</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">سؤالات متداول</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">بلاگ</a></li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-[11px] sm:text-xs tracking-widest text-zinc-100/90 mb-2.5 sm:mb-3">پشتیبانی</h3>
              <ul className="space-y-2 sm:space-y-2.5 leading-6">
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">مرکز کمک</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">قوانین</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">حریم خصوصی</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">امنیت</a></li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-[11px] sm:text-xs tracking-widest text-zinc-100/90 mb-2.5 sm:mb-3">جامعه</h3>
              <ul className="space-y-2 sm:space-y-2.5 leading-6">
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">فروم</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">رویدادها</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">همکاران</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">فرصت‌های شغلی</a></li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-[11px] sm:text-xs tracking-widest text-zinc-100/90 mb-2.5 sm:mb-3">رسانه</h3>
              <ul className="space-y-2 sm:space-y-2.5 leading-6">
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">سرمایه‌گذاران</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">شرایط استفاده</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">کوکی‌پالیسی</a></li>
                <li><a className="text-zinc-200 hover:text-[#FA6320] transition-colors text-[13px] sm:text-sm" href="#">مسائل حقوقی</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 py-4 text-xs text-zinc-400 text-center">
            © {new Date().getFullYear()} پوشاک تامی — تمامی حقوق محفوظ است.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };