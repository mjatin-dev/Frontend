import React from "react";
import styles from "./style.module.scss";

export const Button = ({
  description,
  disabled,
  variant = "default",
  onClick,
  size = "medium",
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={
          disabled ? styles.disabled : `${styles[variant]} ${styles[size]}`
        }
      >
        {description}
      </button>
    </div>
  );
};
