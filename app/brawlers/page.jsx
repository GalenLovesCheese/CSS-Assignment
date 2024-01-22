/* page.jsx/ brawlers page by Michael Joseph Tjokro*/

"use client";

import React from "react";
import fonts from "../ui/fonts.css"
import useSWR from "swr";
import styles from "./page.module.css";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App1() {
  const IP_API_URL = "https://api.brawlapi.com/v1/brawlers";
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
