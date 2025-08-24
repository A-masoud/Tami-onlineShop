export function ColorSelector({ colors, selectedColor, setSelectedColor }) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <p className="font-semibold">انتخاب رنگ:</p>
      <div className="flex gap-4 flex-wrap">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            aria-label={`انتخاب رنگ ${color}`}
            style={{ backgroundColor: color }}
            className={`w-10 h-10 sm:w-8 sm:h-8 xs:w-6 xs:h-6 rounded-full border-4 transition cursor-pointer ${
              selectedColor === color ? "border-blue-600 shadow-lg" : "border-gray-300"
            }`}
          />
        ))}
        <button
          aria-label="بدون رنگ"
          onClick={() => setSelectedColor(null)}
          className={`w-10 h-10 sm:w-8 sm:h-8 xs:w-6 xs:h-6 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-xs font-semibold transition ${
            selectedColor === null ? "border-blue-600 shadow-lg text-blue-600" : ""
          }`}
        >
          هیچ رنگی
        </button>
      </div>
      {selectedColor !== null ? (
        <p className="mt-2 text-sm text-right">
          رنگ انتخاب شده: <span style={{ color: selectedColor }}>{selectedColor}</span>
        </p>
      ) : (
        <p className="mt-2 text-sm text-gray-500 text-right">هیچ رنگی انتخاب نشده است</p>
      )}
    </div>
  );
}
