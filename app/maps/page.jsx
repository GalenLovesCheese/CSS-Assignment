/* Maps page by Teo Hong Rui Freddy*/
"use client";

import React from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import Image from "next/image";

function Banner() {
  return (
      <div className={`${styles.banner}`}>
          <img src="/media/Background.jpg"></img>
          <div className={`${styles.bannertext}`}>
              <div className={`${styles.whitebox}`}>
                  <h1>Maps</h1>
                  <p>Navigate your way to victory!</p>
              </div>
          </div>
      </div>
  )
}
