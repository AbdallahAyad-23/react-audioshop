import React, { useState } from "react";
import useCart from "../../hooks/useCart";
import Button from "../Button/Button";
import Img from "../Img/Img";
import Modal from "../Modal/Modal";
import styles from "./Summary.module.css";
const Summary = ({ onClose, show }) => {
  const [showAll, setShowAll] = useState(false);
  const [cartItems] = useCart();
  return (
    <Modal onClick={onClose} show={show}>
      <div className={styles.summary}>
        <div className={styles.right}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1 className={styles.summary__message}>
          thank you <br />
          for your order
        </h1>
        <p className={styles.summary__email}>
          You will receive an email confirmation shortly.
        </p>
        <div className={styles.summary__items}>
          <ul className={styles.summary__list}>
            {cartItems.length ? (
              !showAll ? (
                <li className={styles.summary__item} key={cartItems[0].id}>
                  <div className={styles.item__left}>
                    <Img
                      src={
                        require(`../../assets/images/cart/image-${cartItems[0].slug}.jpg`)
                          .default
                      }
                      className={styles.item__img}
                      alt={cartItems[0].name}
                    />
                    <div>
                      <p>
                        {cartItems[0].slug
                          ? cartItems[0].slug.split("-")[0]
                          : null}
                      </p>
                      <p>$ {cartItems[0].price}</p>
                    </div>
                  </div>
                  <p className={styles.item__quantity}>
                    x{cartItems[0].quantity}
                  </p>
                </li>
              ) : (
                cartItems.map((citem) => (
                  <li className={styles.summary__item} key={citem.id}>
                    <div className={styles.item__left}>
                      <Img
                        src={
                          require(`../../assets/images/cart/image-${citem.slug}.jpg`)
                            .default
                        }
                        className={styles.item__img}
                        alt={citem.name}
                      />
                      <div>
                        <p>{citem.slug ? citem.slug.split("-")[0] : null}</p>
                        <p>$ {citem.price}</p>
                      </div>
                    </div>
                    <p className={styles.item__quantity}>x{citem.quantity}</p>
                  </li>
                ))
              )
            ) : null}

            {cartItems.length > 1 ? (
              <li className={styles.showmore}>
                <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className={styles.showmore}
                >
                  {showAll
                    ? "View less"
                    : `and ${cartItems.length - 1} other item(s)`}
                </button>
              </li>
            ) : null}
          </ul>
          <div className={styles.summary__total}>
            <p>grand total</p>
            <p>
              ${" "}
              {(
                cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0) +
                cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0) *
                  0.2 +
                50
              ).toFixed(2)}
            </p>
          </div>
        </div>
        <Button orange title="back to home" link="/" onClick={onClose} />
      </div>
    </Modal>
  );
};

export default Summary;
