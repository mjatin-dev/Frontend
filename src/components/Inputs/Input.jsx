import React from "react";
import styles from "./style.module.scss";

export const Input = ({
  placeholder,
  labelText,
  type = "text",
  error,
  errorText,
  onChange,
  onBlur,
  name,
  max,
  min,
  pattern,
  valueForDropDown,
  disabled,
  selected,
  value,
}) => {
  return (
    <div>
      {type === "select" ? (
        <div>
          <label>{labelText}</label>
          <select value={value} onChange={onChange}>
            <option disabled value="default" selected>
              Select
            </option>
            {valueForDropDown?.map((element) => {
              return (
                <option key={element} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </div>
      ) : (
        <div>
          <label>{labelText}</label>
          <input
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            name={name}
            disabled={disabled}
            max={max}
            min={min}
            pattern={pattern}
          />
          {error && <p>{errorText}</p>}
        </div>
      )}
    </div>
  );
};
