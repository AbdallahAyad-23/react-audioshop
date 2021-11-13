import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.orangebar}></div>

      <NavLink to="/">
        <img src="/images/shared/desktop/logo.svg" alt="logo" />
      </NavLink>
      <ul className={styles.footer__list}>
        <li>
          <NavLink className={styles.footer__item} to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.footer__item} to="/category/headphones">
            headphones
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.footer__item} to="/category/speakers">
            speakers
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.footer__item} to="/category/earphones">
            earphones
          </NavLink>
        </li>
      </ul>

      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p>Copyright 2021. All Rights Reserved</p>
      <ul className={styles.footer__social}>
        <li className={styles.footer__item}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/shared/desktop/icon-facebook.svg"
              alt="facebook"
            />
          </a>
        </li>
        <li className={styles.footer__item}>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/shared/desktop/icon-twitter.svg" alt="twitter" />
          </a>
        </li>
        <li className={styles.footer__item}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/shared/desktop/icon-instagram.svg"
              alt="instagram"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
