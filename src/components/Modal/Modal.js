import React from "react";
import styles from "./Modal.module.css";
const Modal = ({ children, show, onClick }) => {
  return (
    <div className={`${styles.modal} ${show && styles["modal--open"]}`}>
      <div className={styles.modal__backdrop} onClick={onClick}></div>
      {children}
    </div>
  );
};

export default Modal;
