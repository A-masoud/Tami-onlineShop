import { useState } from "react";

const demoProducts = [
  { id: 1, title: "کفش اسپرت" },
  { id: 2, title: "کلاه زمستانی" },
  { id: 3, title: "کت مردانه" },
  { id: 4, title: "عینک آفتابی" },
  { id: 5, title: "ساعت مچی" },
];

export function SearchBox() {
  const [query, setQuery] = useState("");

  const filtered = demoProducts.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md mx-auto ">
      <input
  type="text"
  placeholder="دنبال چی می‌گردی؟"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="w-full p-3 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-right
    placeholder:text-sm text-amber-50 sm:placeholder:text-base md:placeholder:text-lg"
/>

      <svg
        className="w-5 h-5 text-white absolute left-3 top-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z"
        />
      </svg>

      {query && (
        <ul className="absolute w-full bg-white shadow-lg text-right rounded-lg mt-2 z-10 max-h-60 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <li
                key={item.id}
                className="p-3 hover:bg-gray-100 cursor-pointer"
              >
                {item.title}
              </li>
            ))
          ) : (
            <li className="p-3 text-gray-500 text-sm">هیچ نتیجه‌ای پیدا نشد.</li>
          )}
        </ul>
      )}
    </div>
  );
}
