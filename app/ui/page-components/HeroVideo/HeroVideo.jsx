//For Landing page
'use client';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './HeroVideo.module.css';
import fonts from "../../fonts.css";
import Image from "next/legacy/image";



const HeroVideo = () => {
  return (
    <div className={`${styles.heroVideoContainer}`}>
      <video className={styles.heroVideo} autoPlay loop muted>
        <source src="/media/bs-trailer(edited).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={`${styles.heroSubText} d-flex align-items-center`}
      >
        <span className={styles.text}>Welcome to Brawckers</span>
        <a href="#slider">
          <Image
              alt="Double down arrow"
              src="/media/down-arrow.gif"
              height={120}
              width={120}
              className= {` d-inline-block align-center text-white position-absoulte ml-4`}
            />
        </a>     
      </div>
      
          
    </div>
  );
};

export default HeroVideo;
