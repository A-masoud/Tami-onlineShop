import React from "react";

export function Home() {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Animated colorful blobs behind everything */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="40" />
          </filter>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopOpacity="0.95" stopColor="#FF7A7A" />
            <stop offset="100%" stopOpacity="0.9" stopColor="#FFB86B" />
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopOpacity="0.9" stopColor="#7AE0FF" />
            <stop offset="100%" stopOpacity="0.85" stopColor="#7B72FF" />
          </linearGradient>
        </defs>

        <g filter="url(#blur)">
          <path
            className="blob blob-1"
            d="M300,200 C360,120 480,120 560,200 C640,280 720,320 760,420 C800,520 700,620 600,640 C500,660 360,580 300,480 C240,380 240,280 300,200 Z"
            fill="url(#g1)"
            opacity="0.9"
          />
        </g>

        <g filter="url(#blur)">
          <path
            className="blob blob-2"
            d="M900,450 C960,370 1020,330 1080,360 C1140,390 1160,460 1120,520 C1080,580 1000,600 940,620 C880,640 820,600 780,540 C740,480 820,510 900,450 Z"
            fill="url(#g2)"
            opacity="0.85"
          />
        </g>
      </svg>

      {/* Glass card */}
      <div className="relative z-20 w-11/12 max-w-3xl p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl text-center">
        <h1 className="text-3xl font-semibold text-white mb-4">بچه ها خوبه؟</h1>
        <p className="text-sm text-slate-200/90 leading-relaxed mb-4">
          پشت این گلس همه‌چیز محو شده؛ فقط همین کارت مشخصه!
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm">خوبه</button>
          <button className="px-4 py-2 rounded-lg bg-transparent border border-white/10 text-slate-200 text-sm">هنوز جای کار داره</button>
        </div>
      </div>

      <style>{`
        @keyframes floatA {
          0% { transform: translate3d(0px, 0px, 0) scale(1); }
          33% { transform: translate3d(-20px, -10px, 0) scale(1.03); }
          66% { transform: translate3d(10px, 20px, 0) scale(0.97); }
          100% { transform: translate3d(0px, 0px, 0) scale(1); }
        }
        @keyframes floatB {
          0% { transform: translate3d(0px, 0px, 0) scale(1); }
          33% { transform: translate3d(30px, 10px, 0) scale(0.98); }
          66% { transform: translate3d(-15px, -25px, 0) scale(1.02); }
          100% { transform: translate3d(0px, 0px, 0) scale(1); }
        }

        .blob-1 {
          animation: floatA 10s ease-in-out infinite;
        }
        .blob-2 {
          animation: floatB 12s ease-in-out infinite;
        }

        .backdrop-blur-md { backdrop-filter: blur(10px) saturate(120%); }
      `}</style>
    </div>
  );
}
