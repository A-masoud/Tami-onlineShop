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
    <footer className="bg-black text-gray-600 pt-10 pb-20 lg:pb-0 mt-10 text-sm" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

const Footer = () => {
  return (
    <footer className="relative">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 pt-0 pb-6 sm:pb-8">
        <div
          className="
            relative z-20
            grid grid-cols-2 md:grid-cols-4
            rounded-xl md:rounded-2xl overflow-hidden
            border border-white/5 bg-black/5 backdrop-blur-md
            shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]
            divide-y divide-white/10 md:divide-y-0 md:divide-x
            [direction:rtl]
          "
        >
          {socials.map((s) => <SocialItem key={s.label} {...s} />)}
        </div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="
              grid grid-cols-2 md:grid-cols-4
              gap-x-6 gap-y-6
              border-t border-white/10
              pt-6 sm:pt-8 md:pt-10 pb-4
            ">
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