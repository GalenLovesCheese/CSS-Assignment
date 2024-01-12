'use client';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './BackgroundVideo.module.css';


const HeroVideo = () => {
  return (
    <div className={styles.heroVideoContainer}>
      <video className={styles.heroVideo} autoPlay loop muted>
        <source src="/media/bs-trailer(edited).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={styles.heroSubText}
      ><h1>Welcome to Brawckers</h1>
      </div>
          
    </div>
  );
};

export default HeroVideo;
