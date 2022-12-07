import "./general.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Button({
  String: label,
  String: className,
  Function: onClick,
  FontAwesomeIcon: icon,
}) {
  return (
    <button
    style={{ cursor: 'pointer'}}
      className={className}
      onClick={onClick}
      >
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {label}
    </button>
  );
}
