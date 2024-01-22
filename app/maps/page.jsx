/* Maps page by Teo Hong Rui Freddy*/
"use client";

import React from "react";
import useSWR from "swr";
import styles from "./page.module.css";

function Banner() {
  return (
      <div className={`${styles.banner}`}>
          <img src="/media/Background.jpg"></img>
          <div className={`${styles.bannertext}`}>
              <div className={`${styles.whitebox}`}>
                  <h1>Events</h1>
                  <p>Navigate your way to victory!</p>
              </div>
          </div>
      </div>
  )
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App1() {
  const IP_API_URL = "https://api.brawlapi.com/v1/gamemodes";
  const { data, error, isLoading } = useSWR(IP_API_URL, fetcher);

  if (error) {
    return <h1>failed to load</h1>;
  }
  if (isLoading) {
    return <h1 className="loading">loading...</h1>;
  }

  return (
    <div className={`${styles.Container}`}>
      <div className={`${styles.brawlers_container}`}>
        {data.list.map((item, i) => (
          <div key={i} className={`${styles.brawler_item}`}>
            <h1 className={`${styles.brawler_name}`}>{item.name}</h1>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
