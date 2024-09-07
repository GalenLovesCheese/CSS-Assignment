//For Landing page
"use client";
import React from "react";

import styles from "./HeroImage.module.css";
import Image from "next/legacy/image";

const HeroImage = () => {
  return (
    <div className={`${styles.heroImageContainer}`}>
      <img
        alt="Double down arrow"
        src="/media/hero_image.jpg"
        className={`${styles.heroImage} d-inline-block align-center text-white position-absoulte ml-4`}
      />
      <div className={`${styles.heroSubText} d-flex align-items-center`}>
        <span className={styles.text}>Welcome to BrawlHub</span>
        <a href="#slider">
          <Image
            alt="Double down arrow"
            src="/media/down-arrow.gif"
            height={120}
            width={120}
            className={` d-inline-block align-center text-white position-absoulte ml-4`}
          />
        </a>
      </div>
    </div>
  );
};

export default HeroImage;
