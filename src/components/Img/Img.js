import { useRef, useEffect } from "react";

const Img = (props) => {
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
    <img
      ref={el}
      data-src={props.src}
      alt={props.alt}
      className={props.className}
    />
  );
};

export default Img;
