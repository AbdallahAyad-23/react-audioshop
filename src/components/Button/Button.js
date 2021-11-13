import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";
const Button = ({ orange, black, clear, link, title, onClick }) => {
  return (
    <NavLink
      onClick={onClick}
      to={link}
      className={`${styles.btn} ${orange && styles["btn--orange"]} ${
        black && styles["btn--black"]
      } ${clear && styles["btn--clear"]}`}
    >
      {title}
    </NavLink>
  );
};

export default Button;
