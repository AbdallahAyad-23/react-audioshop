import React, { useContext } from "react";
import Button from "../Button/Button";
import styles from "./Cart.module.css";
import Modal from "../Modal/Modal";
import { Context as CartContext } from "../../context/cartContext";
import useCart from "../../hooks/useCart";
const Cart = () => {
  const {
    state: { showCart },
    toggleCart,
    incQuantity,
    removeAll,
  } = useContext(CartContext);
  const [cartItems] = useCart();
  return (
    <Modal show={showCart} onClick={toggleCart}>
      <div className={styles.cart}>
        {cartItems.length ? (
          <>
            {" "}
            <div className={styles.cart__header}>
              <h4>cart ({cartItems.length})</h4>
              <button onClick={removeAll}>Remove All</button>
            </div>
            {cartItems.length ? (
              <ul className={styles.cart__items}>
                {cartItems.map((citem) => (
                  <li className={styles.cart__item} key={citem.id}>
                    <div className={styles.item__left}>
                      <img
                        src={`/images/cart/image-${citem.slug}.jpg`}
                        className={styles.item__img}
                        alt={citem.name}
                      />
                      <div>
                        <p>{citem.slug ? citem.slug.split("-")[0] : null}</p>
                        <p>$ {citem.price}</p>
                      </div>
                    </div>
                    <div className={styles.item__quantity}>
                      <button
                        className={styles.item__inc}
                        onClick={() => incQuantity(citem.id, -1)}
                      >
                        -
                      </button>
                      <p className={styles.item__number}>{citem.quantity}</p>
                      <button
                        className={styles.item__inc}
                        onClick={() => incQuantity(citem.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className={styles.cart__total}>
              <p>TOTAL</p>
              <p>
                $ {cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0)}
              </p>
            </div>
            <Button
              link="/checkout"
              orange
              title="checkout"
              onClick={toggleCart}
            />
          </>
        ) : (
          <p>Cart is empty.</p>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
