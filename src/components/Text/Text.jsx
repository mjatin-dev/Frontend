import React from "react";
import styles from "./style.module.scss";

const Text = ({ heading, text, variant = "default" }) => {
  return (
    <div>
      {heading === "h1" && <h1 className={styles[variant]}>{text}</h1>}
      {heading === "h2" && <h2 className={styles[variant]}>{text}</h2>}
      {heading === "h3" && <h3 className={styles[variant]}>{text}</h3>}
      {heading === "h4" && <h4 className={styles[variant]}>{text}</h4>}
      {heading === "h5" && <h5 className={styles[variant]}>{text}</h5>}
      {heading === "h6" && <h6 className={styles[variant]}>{text}</h6>}
      {heading === "p" && <p className={styles[variant]}>{text}</p>}
      {heading === "span" && <span className={styles[variant]}>{text}</span>}
    </div>
  );
};

export default Text;
