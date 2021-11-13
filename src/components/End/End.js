import React from "react";
import mobperson from "../../assets/images/shared/mobile/mobilegear.jpg";
import tabperson from "../../assets/images/shared/tablet/tabgear.jpg";
import desperson from "../../assets/images/shared/desktop/gearimage.jpg";
import styles from "./End.module.css";
const End = () => {
  return (
    <div className={styles.end}>
      <div className={styles.personcontainer}>
        <picture className={styles.personpic}>
          <source media="(min-width:992px)" srcset={desperson} />
          <source media="(min-width:768px)" srcset={tabperson} />
          <source media="(min-width:576px)" srcset={mobperson} />
          <img className={styles.personpic} src={mobperson} alt="person" />
        </picture>
      </div>
      <div className={styles.end__info}>
        <h1 className={styles.catch}>
          bringing you the <span>best</span> audio gear
        </h1>
        <p className={styles.info}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default End;
