import React from "react";
import styles from "./Notfound.module.css";
const Notfound = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>404</h1>
        <p>Page not found.</p>
      </div>
    </div>
  );
};

export default Notfound;
