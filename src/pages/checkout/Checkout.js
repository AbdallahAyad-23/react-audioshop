import React, { useContext, useState } from "react";
import styles from "./Checkout.module.css";
import Input from "../../components/Input/Input";
import Summary from "../../components/Summary/Summary";
import useCart from "../../hooks/useCart";
import { Context as CartContext } from "../../context/cartContext";
const Checkout = () => {
  const { removeAll } = useContext(CartContext);
  const [cartItems] = useCart();
  const [showSum, setShowSum] = useState(false);
  const [form, setForm] = useState({
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    phone: { value: "", error: "" },
    address: { value: "", error: "" },
    zip: { value: "", error: "" },
    city: { value: "", error: "" },
    country: { value: "", error: "" },
    payment: { value: "emoney", error: "" },
    emonnum: { value: "", error: "" },
    emonpin: { value: "", error: "" },
  });
  const checkAll = () => {
    let newForm;
    if (form.payment.value === "cash") {
      newForm = { ...form };
      delete newForm["emonnum"];
      delete newForm["emonpin"];
    } else {
      newForm = { ...form };
    }
    return (
      Object.values(newForm).every((field) => !field.error && field.value) &&
      cartItems.length
    );
  };
  const onBlur = (e) => {
    if (e.target.name === "email") {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(form.email.value.toLowerCase())) {
        setForm({
          ...form,
          [e.target.name]: {
            ...form[e.target.name],
            error: "Wrong format",
          },
        });
      }
    }
    if (e.target.name === "zip") {
      if (form.zip.value.length < 5) {
        setForm({
          ...form,
          [e.target.name]: {
            ...form[e.target.name],
            error: "Wrong format",
          },
        });
      }
    }
    if (!form[e.target.name].value) {
      setForm({
        ...form,
        [e.target.name]: {
          ...form[e.target.name],
          error: "Field cannot be empty",
        },
      });
    }
  };
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: {
        value: e.target.value,
        error: "",
      },
    });
  };
  const payHandler = () => {
    setShowSum(true);
  };

  const onCloseHandler = () => {
    removeAll();
    setShowSum(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.checkout}>
        <h1 className={styles.checkout__title}>checkout</h1>
        <div className={styles.billing}>
          <h4 className={styles.div__title}>billing details</h4>
          <Input
            onBlur={onBlur}
            onChange={onChangeHandler}
            name="name"
            error={form.name.error}
            value={form.name.value}
            title="Name"
            type="text"
            placeholder="John Doe"
          />
          <Input
            name="email"
            onBlur={onBlur}
            onChange={onChangeHandler}
            error={form.email.error}
            value={form.email.value}
            title="Email Address"
            type="text"
            placeholder="john@mail.com"
          />
          <Input
            name="phone"
            onBlur={onBlur}
            onChange={onChangeHandler}
            value={form.phone.value}
            error={form.phone.error}
            title="Phone Number"
            type="text"
            placeholder="+120255503136"
          />
        </div>
        <div className={styles.shipping}>
          <h4 className={styles.div__title}>shipping info</h4>
          <Input
            name="address"
            onBlur={onBlur}
            error={form.address.error}
            onChange={onChangeHandler}
            value={form.address.value}
            title="Your Address"
            placeholder="1337 Williams Avenue"
            type="text"
          />
          <Input
            name="zip"
            onBlur={onBlur}
            onChange={onChangeHandler}
            value={form.zip.value}
            error={form.zip.error}
            title="ZIP Code"
            type="text"
            placeholder="12345"
          />
          <Input
            name="city"
            onBlur={onBlur}
            onChange={onChangeHandler}
            value={form.city.value}
            error={form.city.error}
            title="City"
            type="text"
            placeholder="New York"
          />
          <Input
            name="country"
            onBlur={onBlur}
            onChange={onChangeHandler}
            value={form.country.value}
            error={form.country.error}
            title="Country"
            type="text"
            placeholder="United States"
          />
        </div>
        <div className={styles.payment}>
          <h4 className={styles.div__title}>payment details</h4>
          <div className={styles.radio}>
            <h4>payment method</h4>
            <div className={styles.radio__inputs}>
              <div className={styles.radio__input}>
                <input
                  type="radio"
                  id="emoney"
                  name="payment"
                  value="emoney"
                  checked={form.payment.value === "emoney"}
                  onChange={onChangeHandler}
                />
                <label htmlFor="emoney">e-Money</label>
              </div>

              <div className={styles.radio__input}>
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  value="cash"
                  checked={form.payment.value === "cash"}
                  onChange={onChangeHandler}
                />
                <label htmlFor="cash">Cash on Delivery</label>
              </div>
            </div>
          </div>
          {form.payment.value === "emoney" ? (
            <div className={styles.emoney}>
              <Input
                name="emonnum"
                value={form.emonnum.value}
                error={form.emonnum.error}
                onBlur={onBlur}
                onChange={onChangeHandler}
                title="e-Money Number"
                type="text"
                placeholder="238521993"
              />
              <Input
                value={form.emonpin.value}
                error={form.emonpin.error}
                name="emonpin"
                onBlur={onBlur}
                onChange={onChangeHandler}
                title="e-Money PIN"
                type="text"
                placeholder="6891"
              />
            </div>
          ) : (
            <p className={styles.cashtext}>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          )}
        </div>
      </div>
      <div className={styles.summary}>
        <h2 className={styles.summary__title}>summary</h2>
        {cartItems.length ? (
          <ul className={styles.summary__items}>
            {cartItems.map((citem) => (
              <li className={styles.summary__item}>
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
                <p className={styles.quantity}>x{citem.quantity}</p>
              </li>
            ))}
          </ul>
        ) : null}
        <div className={styles.summary_units}>
          <div className={styles.summary__unit}>
            <p>total</p>
            <p>
              $ {cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0)}
            </p>
          </div>
          <div className={styles.summary__unit}>
            <p>shipping</p>
            <p>$ 50</p>
          </div>
          <div className={styles.summary__unit}>
            <p>vat (included)</p>
            <p>
              ${" "}
              {(
                cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0) *
                0.2
              ).toFixed(2)}
            </p>
          </div>
        </div>
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
        <button
          onClick={payHandler}
          disabled={!checkAll()}
          className={styles.continue}
        >
          {"continue & pay"}
        </button>
      </div>
      <Summary show={showSum} onClose={onCloseHandler} />
    </div>
  );
};

export default Checkout;
