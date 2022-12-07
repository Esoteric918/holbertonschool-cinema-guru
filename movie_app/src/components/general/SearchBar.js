import React from "react";
import "./general.css";

export default function SearchBar({ String: title, String: setTitle }) {
  function handleInput(e) {
    setTitle(e.target.value);
  }

  return (
    <div className="search_bar">
      <input
        type={"text"}
        placeholder="Search Movies"
        title={title}
        onChange={handleInput}
      />
    </div>
  );
}
