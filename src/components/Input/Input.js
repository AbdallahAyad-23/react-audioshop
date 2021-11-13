import React from "react";
import styles from "./Input.module.css";
const Input = ({
  type,
  placeholder,
  error,
  value,
  onChange,
  onBlur,
  name,
  title,
}) => {
  return (
    <div className={`${styles.input} ${error && styles["input--red"]}`}>
      <p className={styles.input__name}>{title}</p>
      <p className={styles.input__error}>{error}</p>
      <input
        className={styles.input__input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
