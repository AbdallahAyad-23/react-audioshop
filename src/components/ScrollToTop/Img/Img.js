import { useRef, useEffect } from "react";

import styles from "./Img.module.css";

const Img = ({ src, alt, square, circle }) => {
  const el = useRef(null);

  const preloadImage = (img) => {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
  };
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  });
  useEffect(() => {
    imgObserver.observe(el.current);
  }, []);

  return (
    <div className={styles.img_container}>
      <img
        ref={el}
        data-src={src}
        alt={alt}
        className={`${styles.img} ${square && styles.square} ${
          circle && styles.circle
        }`}
      />
    </div>
  );
};

export default Img;
