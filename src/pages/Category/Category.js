import React, { useContext, useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import Button from "../../components/Button/Button";
import styles from "./Category.module.css";
import End from "../../components/End/End";
import { Context as ProductsContext } from "../../context/productContext";
const Category = ({ category }) => {
  const {
    state: { products },
  } = useContext(ProductsContext);
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults(products.filter((obj) => obj.category === category));
  }, [category, products]);
  return (
    <div className={styles.container}>
      <h1 className={styles.hero}>{category}</h1>
      <main className={styles.main}>
        <div className={styles.items}>
          {results
            .sort((a, b) => (a.new ? -1 : 1))
            .map((obj) => (
              <div className={styles.item} key={obj.id}>
                <picture className={styles.item__imgcontainer}>
                  <source
                    media="(min-width:992px)"
                    srcset={`/images${obj.image.desktop}`}
                  />
                  <source
                    media="(min-width:768px)"
                    srcset={`/images${obj.image.tablet}`}
                  />
                  <source
                    media="(min-width:576px)"
                    srcset={`/images${obj.image.mobile}`}
                  />
                  <img
                    src={`/images${obj.image.mobile}`}
                    className={styles.item__img}
                    alt={obj.name}
                  />
                </picture>
                <div className={styles.item__info}>
                  {obj.new ? (
                    <h1 className={styles.item__new}>new product</h1>
                  ) : null}
                  <h1 className={styles.item__name}>{obj.name}</h1>
                  <p className={styles.item__description}>{obj.description}</p>
                  <Button
                    orange
                    link={`/category/${category}/${obj.slug}`}
                    title="see product"
                  />
                </div>
              </div>
            ))}
        </div>
        <Cards />
        <End />
      </main>
    </div>
  );
};

export default Category;
