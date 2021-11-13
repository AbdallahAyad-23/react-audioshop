import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/shared/desktop/logo.svg";
import cart from "../../assets/images/shared/desktop/cart.svg";
import styles from "./Header.module.css";
import { Context } from "../../context/cartContext";
const Header = ({ setShow, show }) => {
  const { toggleCart, state } = useContext(Context);
  return (
    <header className={styles.header}>
      {show ? (
        <svg
          onClick={() => setShow(false)}
          className={styles.header__hamburger}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      ) : (
        <svg
          onClick={() => setShow(true)}
          className={styles.header__hamburger}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      )}
      <Link to="/" className={styles.header__logo}>
        <img src={logo} alt="logo" />
      </Link>
      <ul className={styles.header__items}>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.header__item} ${
                isActive ? styles["header__item--active"] : null
              }`
            }
            to="/"
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.header__item} ${
                isActive ? styles["header__item--active"] : null
              }`
            }
            to="/category/headphones"
          >
            headphones
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.header__item} ${
                isActive ? styles["header__item--active"] : null
              }`
            }
            to="/category/speakers"
          >
            speakers
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.header__item} ${
                isActive ? styles["header__item--active"] : null
              }`
            }
            to="/category/earphones"
          >
            earphones
          </NavLink>
        </li>
      </ul>
      <div className={styles.header__cartcontainer}>
        {state.cart.length ? (
          <p className={styles.header__quantity}>
            {state.cart.reduce((acc, i) => acc + i.quantity, 0)}
          </p>
        ) : null}
        <img
          src={cart}
          alt="cart"
          className={styles.header__cart}
          onClick={toggleCart}
        />
      </div>
    </header>
  );
};

export default Header;
