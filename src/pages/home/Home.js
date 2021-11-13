import React from "react";
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";

import mobspeaker from "../../assets/images/home/mobile/image-speaker-zx9.png";
import tabspeaker from "../../assets/images/home/tablet/tabspeaker.png";
import desspeaker from "../../assets/images/home/desktop/speakerzx.png";
import mobzx7 from "../../assets/images/home/mobile/image-speaker-zx7.jpg";
import tabzx7 from "../../assets/images/home/tablet/image-speaker-zx7.jpg";
import deszx7 from "../../assets/images/home/desktop/image-speaker-zx7.jpg";
import mobearphones from "../../assets/images/home/mobile/image-earphones-yx1.jpg";
import tabearphones from "../../assets/images/home/tablet/earphonestab.jpg";
import desearphones from "../../assets/images/home/desktop/earphones.jpg";

import Button from "../../components/Button/Button";
import Cards from "../../components/Cards/Cards";
import End from "../../components/End/End";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <div className={styles.main}>
        <Cards />
        <div className={styles.speaker}>
          <picture className={styles.speaker__img}>
            <source media="(min-width:992px)" srcset={desspeaker} />
            <source media="(min-width:768px)" srcset={tabspeaker} />
            <source media="(min-width:576px)" srcset={mobspeaker} />
            <img
              src={mobspeaker}
              className={styles.speaker__img}
              alt="speaker"
            />
          </picture>
          <div className={styles.speaker__info}>
            <h1>
              zx9
              <br />
              speaker
            </h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              black
              link="/category/speakers/zx9-speaker"
              title="see product"
            />
          </div>
        </div>
        <div className={styles.zx7speaker}>
          <picture>
            <source media="(min-width:992px)" srcset={deszx7} />
            <source media="(min-width:768px)" srcset={tabzx7} />
            <source media="(min-width:576px)" srcset={mobzx7} />
            <img
              className={styles.zx7speaker__img}
              src={mobzx7}
              alt="zx7 speaker"
            />
          </picture>
          <div className={styles.zx7speaker__info}>
            <h1>zx7 speaker</h1>
            <Button
              clear
              link="/category/speakers/zx7-speaker"
              title="see product"
            />
          </div>
        </div>

        <picture>
          <source media="(min-width:992px)" srcset={desearphones} />
          <source media="(min-width:768px)" srcset={tabearphones} />
          <source media="(min-width:576px)" srcset={mobearphones} />
          <img
            className={styles.earphones}
            src={mobearphones}
            alt="earphones"
            loading="lazy"
          />
        </picture>
        <div className={styles.yx1}>
          <h1>yx1 earphones</h1>
          <Button
            clear
            link="/category/earphones/yx1-earphones"
            title="see product"
          />
        </div>
        <End />
      </div>
    </div>
  );
};

export default Home;
