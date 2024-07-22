import { useState } from "react";

function Input({ onStateUplifting, maxLength }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (maxLength && inputValue.length > maxLength) {
      return; 
    }
    setValue(inputValue);
    onStateUplifting(inputValue.length);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      maxLength={maxLength}
      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
    />
  );
}

export default Input;
