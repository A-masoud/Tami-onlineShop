export function ToggleSwitch({ checked, onChange, label }) {
  return (
    <div className="flex items-center gap-2 ">
      <label className="relative inline-block w-10 h-6 ">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-full h-full bg-gray-500 rounded-full peer-checked:bg-green-400 transition-colors"></div>
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-4"></div>
      </label>
      {label && <span className="text-xs text-gray-700">{label}</span>}
    </div>
  );
}
