import { useRef, useEffect } from "react";

const Img = ({ src, alt, className }) => {
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

  return <img ref={el} data-src={src} alt={alt} className={className} />;
};

export default Img;
