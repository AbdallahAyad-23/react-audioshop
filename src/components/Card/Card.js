import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import rightArrow from "../../assets/images/shared/desktop/icon-arrow-right.svg";
import Img from "../Img/Img";
const Card = ({ title, src, alt, link }) => {
  return (
    <div className={styles.card}>
      <Img className={styles.card__img} src={src} alt={alt} />
      <div className={styles.card__bottom}>
        <h1 className={styles.card__title}>{title}</h1>

        <NavLink className={styles.link} to={link}>
          <div className={styles.card__btn}>
            <p>SHOP</p>
            <Img src={rightArrow} alt="right arrow" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
