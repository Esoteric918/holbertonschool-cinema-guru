import React from "react";
import './general.css';

export default function SelectInput({
  String: label,
  Array: options,
  String: className,
  String: value,
  Function: setValue,
}) {
  const handleSelect = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="select-input">
      <label>
        {label}
        <select
          className={className}
          value={value}
          onChange={handleSelect}
          {...options}
        >
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
