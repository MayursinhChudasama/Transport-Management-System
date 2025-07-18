import { useState, useEffect, useRef } from "react";

export default function MultiSelect({ label, id, options = [], value = "", onChange, error=false }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const containerRef = useRef(null);
  
  // Internal selected value so the component can work uncontrolled if parent doesn't manage state
  const [selected, setSelected] = useState(value);

  // Sync internal selection when the controlled `value` prop changes
  useEffect(() => {
    setSelected(value);
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (opt) => {
    setSelected(opt);          // update local state
    onChange?.(opt);           // inform parent if provided
    setOpen(false);
  };

  const displayText = selected ? selected : "Select";
  const clearSelection = (e) => {
    e.stopPropagation(); // prevent dropdown toggle
    setSelected("");
    onChange?.("");
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* hidden input so selected value is included in native form submission */}
      <input type="hidden" name={id} value={selected} />
      <button
        type="button"
        className="border-b-2 border-gray-300 pb-1 mt-8 text-left w-40 focus:outline-none focus:border-[#e87f05]"
        onClick={toggle}
        id={id}
      >
        <span className="text-sm text-gray-400">{label} {error && <span className="text-red-500 font-bold">!</span>}</span>
        <div className="flex items-center justify-between text-base text-gray-200">
          <span className="truncate flex-1">{displayText}</span>
          {selected ? (
            <span
              onClick={clearSelection}
              className="ml-2 text-gray-400 hover:text-gray-200 cursor-pointer"
            >
              &times;
            </span>
          ) : (
            <span className="ml-1 text-gray-400">{open ? "▲" : "▼"}</span>
          )}
        </div>
      </button>
      {open && (
        <div className="absolute z-20 mt-1 bg-[#1b1b1b] shadow-lg border border-gray-700 rounded w-40 max-h-48 overflow-auto">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 cursor-pointer text-sm text-gray-200"
            >
              <input
                type="radio"                
                checked={selected === opt}
                onChange={() => handleSelect(opt)}
                className="accent-[#e87f05]"
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
