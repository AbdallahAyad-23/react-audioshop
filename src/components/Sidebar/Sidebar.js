import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
const Sidebar = ({ show, setShow }) => {
  return (
    <>
      <div
        onClick={() => setShow(false)}
        className={`${styles.backdrop} ${show && styles["backdrop--show"]}`}
      ></div>
      <div className={`${styles.sidebar} ${show && styles["sidebar--show"]}`}>
        <ul className={styles.sidebar__items}>
          <li className={styles.sidebar__item}>
            <NavLink className={styles.sidebar__link} to="/category/headphones">
              headphones
            </NavLink>
          </li>
          <li className={styles.sidebar__item}>
            <NavLink className={styles.sidebar__link} to="/category/speakers">
              speakers
            </NavLink>
          </li>
          <li className={styles.sidebar__item}>
            <NavLink className={styles.sidebar__link} to="/category/earphones">
              earphones
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
