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
                  <h1>Maps</h1>
                  <p>Navigate your way to victory!</p>
              </div>
          </div>
      </div>
  )
}

export default function Maps() {
  return (
    <>
    <Banner/>
    <div className={`${styles.section_container}`}>
      <div className={`${styles.GemGrabsection}`}>
        <div id="GemGrab">
          <h1>Gem Grab</h1>
          <img></img>
        </div>
      </div>
      <div className={`${styles.BrawlBallsection}`}>
        <div id="BrawlBall">
          <h1>Brawl Ball</h1>
        </div>
      </div>
      <div className={`${styles.ShowDownsection}`}>
        <section id="Showdown">
        <h1>Showdown</h1>
        </section>
      </div>
      <div className={`${styles.Heistsection}`}>
        <section id="Heist">
        <h1>Heist</h1>
        </section>
      </div>
      <div className={`${styles.Bountysection}`}>
        <section id="Bounty">
        <h1>Bounty</h1>
        </section>
      </div>
      <div className={`${styles.Siegesection}`}>
        <section id="Siege">
        <h1>Siege</h1>
        </section>
      </div>
      <div className={`${styles.HotZonesection}`}>
        <section id="HotZone">
          <h1>Hot Zone</h1>
        </section>
      </div>
      <div className={`${styles.KnockOutsection}`}>
        <section id="Knockout">
          <h1>Knockout</h1>
        </section>
      </div>
      <div className={`${styles.TakeDownsection}`}>
        <section id="Takedown">
          <h1>Takedown</h1>
        </section>
      </div>
      <div className={`${styles.BigGamesection}`}>
        <section id="BigGame">
          <h1>Big Game</h1>
        </section>
      </div>
      <div className={`${styles.RoboRumblesection}`}>
        <section id="RoboRumble">
          <h1>Robo Rumble</h1>
        </section>
      </div>
      <div className={`${styles.BossFightsection}`}>
        <section id="BossFight">
          <h1>Boss Fight</h1>
        </section>
      </div>
      <div className={`${styles.SuperCityRampagesection}`}>
        <section id="SuperCityRampage">
          <h1>Super City Rampage</h1>
        </section>
      </div>
      <div className={`${styles.PowerPlaysection}`}>
        <section id="PowerPlay">
          <h1>Power Play</h1>
        </section>
      </div>
    </div>
  </>
  );
}
