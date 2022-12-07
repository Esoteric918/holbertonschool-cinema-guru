import "./general.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input({
	String: label,
	String: type,
	String: className,
	String: value,
	Function: setValue,
	Object: inputAttributes,
	Object: icon,
}) {
	const handleInput = (event) => {
		setValue(event.target.value);
	};
	return (
		<div className="input-wrapper">
			<label className="input-label">
				{icon && <FontAwesomeIcon icon={icon} />}
				{label}
				<input
					className={`input ${className}`}
					type={type}
					value={value}
					onChange={handleInput}
					{...inputAttributes}
				/>
			</label>
		</div>
	);
}
