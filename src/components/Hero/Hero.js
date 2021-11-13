import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__info}>
        <h4>NEW PRODUCT</h4>
        <h1>
          XX99 MARK II <br /> HEADPHONES
        </h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          orange
          link={`/category/headphones/xx99-mark-two-headphones`}
          title="see product"
        />
      </div>
    </div>
  );
};

export default Hero;
