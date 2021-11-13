import React from "react";
import Card from "../Card/Card";
import headphones from "../../assets/images/shared/desktop/imageheadphones.png";
import speakers from "../../assets/images/shared/desktop/imagespeakers.png";
import earphones from "../../assets/images/shared/desktop/imageearphones.png";
import styles from "./Cards.module.css";
const Cards = () => {
  return (
    <div className={styles.cards}>
      <Card
        title="headphones"
        src={headphones}
        link="/category/headphones"
        alt="headphones"
      />
      <Card
        title="speakers"
        src={speakers}
        link="/category/speakers"
        alt="speakers"
      />
      <Card
        title="earphones"
        src={earphones}
        link="/category/earphones"
        alt="earphones"
      />
    </div>
  );
};

export default Cards;
