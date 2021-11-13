import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Cards from "../../components/Cards/Cards";
import End from "../../components/End/End";
import styles from "./Product.module.css";
import { Context as CartContext } from "../../context/cartContext";
import { Context as ProductsContext } from "../../context/productContext";
const Product = () => {
  const { addProduct } = useContext(CartContext);
  const {
    state: { products },
  } = useContext(ProductsContext);
  const { name } = useParams();
  const [result, setResult] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setResult(products.find((obj) => obj.slug === name));
  }, [name, products]);
  const incQuantity = (quan) => {
    setQuantity((prevState) => (prevState + quan < 1 ? 1 : prevState + quan));
  };
  let item;
  if (result) {
    item = (
      <>
        <div className={styles.item}>
          <picture className={styles.item__imgcontainer}>
            <source
              media="(min-width:992px)"
              srcset={`/images${result.image.desktop}`}
            />
            <source
              media="(min-width:768px)"
              srcset={`/images${result.image.tablet}`}
            />
            <source
              media="(min-width:576px)"
              srcset={`/images${result.image.mobile}`}
            />
            <img
              src={`/images${result.image.mobile}`}
              className={styles.item__img}
              alt={result.name}
            />
          </picture>
          <div className={styles.item__info}>
            {result.new ? (
              <h1 className={styles.item__new}>new product</h1>
            ) : null}
            <h1 className={styles.item__name}>{result.name}</h1>
            <p className={styles.item__description}>{result.description}</p>
            <p className={styles.item__price}>$ {result.price}</p>
            <div className={styles.item__options}>
              <div className={styles.item__quantity}>
                <button
                  className={styles.item__inc}
                  onClick={() => incQuantity(-1)}
                >
                  -
                </button>
                <p className={styles.item__number}>{quantity}</p>
                <button
                  className={styles.item__inc}
                  onClick={() => incQuantity(1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addProduct(result.id, quantity)}
                className={styles.item__add}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className={styles.features}>
          <h1 className={styles.features__title}>features</h1>
          <p className={styles.features__info}>{result.features}</p>
        </div>
        <div className={styles.box}>
          <h1 className={styles.box__title}>in the box</h1>
          <ul className={styles.box__list}>
            {result.includes.map((i) => (
              <li className={styles.box__item} key={i.item}>
                <span className={styles.box__quantity}>{i.quantity}x</span>
                {i.item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.gallery}>
          {Object.values(result.gallery).map((im) => (
            <picture className={styles.gallery__img} key={im.item__description}>
              <source
                media="(min-width:992px)"
                srcset={`/images${im.desktop}`}
              />
              <source
                media="(min-width:768px)"
                srcset={`/images${im.tablet}`}
              />
              <source
                media="(min-width:576px)"
                srcset={`/images${im.mobile}`}
              />
              <img
                src={`/images${im.mobile}`}
                alt={result.name}
                className={styles.gallery__img}
              />
            </picture>
          ))}
        </div>
        <div className={styles.maylike}>
          <h1>you may also like</h1>
          <ul className={styles.maylike__list}>
            {result.others.map((o) => (
              <li className={styles.maylike__item} key={o.slug}>
                <picture className={styles.maylike__img}>
                  <source
                    media="(min-width:992px)"
                    srcset={`/images${o.image.desktop}`}
                  />
                  <source
                    media="(min-width:768px)"
                    srcset={`/images${o.image.tablet}`}
                  />
                  <source
                    media="(min-width:576px)"
                    srcset={`/images${o.image.mobile}`}
                  />
                  <img
                    src={`/images${o.image.mobile}`}
                    alt={o.name}
                    className={styles.maylike__img}
                  />
                </picture>
                <h2>{o.name}</h2>
                <Button
                  link={`/category/${o.category}/${o.slug}`}
                  orange
                  title="see product"
                />
              </li>
            ))}
          </ul>
        </div>
        <Cards />
        <End />
      </>
    );
  }
  return <div className={styles.container}>{item}</div>;
};
export default Product;
