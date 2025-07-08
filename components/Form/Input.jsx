import { useState, useEffect } from "react";

export default function Input({ label, id, width, type, numeric = false, error = false, ...props }) {

  const [showError, setShowError] = useState(error);
  const [showNumericWarn, setShowNumericWarn] = useState(false);

  useEffect(()=>{
    setShowError(error);
  }, [error]);

  function handleChange(e) {
    let value = e.target.value;
    if (numeric) {
      value = value.replace(/\D+/g, ""); // remove non-digits
      e.target.value = value;
    }
    if (showError && value.trim() !== "") {
      setShowError(false);
    }
    // props.onChange?.(e);
  }

  function handleKeyDown(e) {
    if (!numeric) {
      // props.onKeyDown?.(e);
      return;
    }
    const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    if (!/^[0-9]$/.test(e.key) && !allowed.includes(e.key)) {
      setShowNumericWarn(true);
      setTimeout(() => setShowNumericWarn(false), 1500);
      e.preventDefault();
    }
    // props.onKeyDown?.(e);
  }

  return (
    <div className='relative py-1'>
      <input
        type={type || "text"}
        id={id}
        name={id}
        placeholder=' '
        {...props}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        inputMode={numeric ? "numeric" : undefined}
        pattern={numeric ? "[0-9]*" : undefined}
        className={
          "peer border-b-2 border-gray-300 focus:outline-none focus:border-[#e87f05] bg-transparent mt-8 pb-2 " +
          width
        }
      />
      <label
        htmlFor={id}
        className='absolute left-1 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-10 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#e87f05] hover:cursor-text'>
        {label} {showError && <span className="text-red-500 font-bold">!</span>}
      </label>
      {numeric && showNumericWarn && (
        <span className="absolute text-xs text-white left-1 -bottom-4">Only numeric values allowed</span>
      )}
    </div>
  );
}
