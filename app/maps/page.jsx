"use client";

import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/legacy/image";
import React from "react";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Maps() {
    const { data, error } = useSWR('https://api.brawlapi.com/v1/maps', fetcher);

    if (error) return <div>Failed to load maps</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <><div data-section-id>
            <section id="GemGrab">
                <h2>Gem Grab</h2>
                <p>Collect gems and hold them to win!</p>
            </section>
            <section id="BrawlBall">
                <h2>Brawl Ball</h2>
                <p>Score goals to win!</p>
            </section>
            <section id="Showdown">
                <h2>Showdown</h2>
                <p>Survive to win!</p>
            </section>
            <section id="Heist">
                <h2>Heist</h2>
                <p>Attack or defend to win!</p>
            </section>
            <section id="Bounty">
                <h2>Bounty</h2>
                <p>Collect stars to win!</p>
            </section>
            <section id="Siege">
                <h2>Siege</h2>
                <p>Collect bolts to win!</p>
            </section>
            <section id="HotZone">
                <h2>Hot Zone</h2>
                <p>Control the zone to win!</p>
            </section>
            <section id="Knockout">
                <h2>Knockout</h2>
                <p>Eliminate the enemy team to win!</p>
            </section>
            <section id="Takedown">
                <h2>Takedown</h2>
                <p>Deal the most damage to the boss to win!</p>
            </section>
            <section id="BigGame">
                <h2>Big Game</h2>
                <p>Defeat the boss to win!</p>
            </section>
            <section id="RoboRumble">
                <h2>Robo Rumble</h2>
                <p>Defend the safe to win!</p>
            </section>
            <section id="BossFight">
                <h2>Boss Fight</h2>
                <p>Defeat the boss to win!</p>
            </section>
            <section id="SuperCityRampage">
                <h2>Super City Rampage</h2>
                <p>Defeat the boss to win!</p>
            </section>
            <section id="PowerPlay">
                <h2>Power Play</h2>
                <p>Play to win!</p>
            </section>
        </div>
        <div className={`${styles.maps_title}`}>
                <h1>All Maps</h1>
            </div><div className={`${styles.Container}`}>
                <div className={`${styles.maps_container}`}>
                    {data.list.map((item, i) => (
                        <div key={i} className={`${styles.maps_item}`}>
                            <h1 className={`${styles.maps_name}`}>{item.name}</h1>
                            <img src={item.imageUrl} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div></>
    )
}

