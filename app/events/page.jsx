/* Events page by Teo Hong Rui Freddy*/
"use client";

import styles from "./page.module.css";
import GameMode from "./Components/GameMode";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from "react";
import useSWR from 'swr';
import { Modal } from 'react-bootstrap';
import fonts from "../ui/fonts.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Banner() {
  return (
      <div className={`${styles.banner}`}>
          <img src="/media/Background4.jpg"></img>
          <div className={`${styles.bannertext}`}>
              <div className={`${styles.whitebox}`}>
                  <h1>Events</h1>
                  <p>Don’t miss out on the fun!</p>
              </div>
          </div>
      </div>
  )
}

var currentDate, endTime, timeLeft, daysLeft;

export default function EventPage() {
  const IP_API_URL = "https://api.brawlapi.com/v1/events";
  const { data, error, isLoading } = useSWR(IP_API_URL, fetcher);

  const [showModal, setShowModal] = React.useState(false);

  /*Keep track of the event 
  that was clicked on and is currently selected*/
  const [selectedEvent, setSelectedEvent] = React.useState(null); 
  
  const handleEventItemClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  if (error) {
    return <h1>failed to load</h1>;
  }
  if (isLoading) {
    return <h1 className="loading">loading...</h1>;
  }

  return (
    <div>
      <Banner />
      <GameMode />
      <div className={`${styles.events_title}`}>
        <h1>Events Happening Now</h1>
      </div>
      <div className={`${styles.Container}`} onClick={handleEventItemClick}>
        <div className={`${styles.events_container}`}>
          {data.active.map((item, i) => {
            currentDate = new Date();
            endTime = new Date(item.endTime);
            timeLeft = endTime.getTime() - currentDate.getTime();
            daysLeft = Math.ceil(timeLeft / (1000 * 3600 * 24));
            console.log(timeLeft);
            return (
              <div key={i} className={`${styles.events_item}`}>
                <h1 className={`${styles.brawler_name}`}>{item.name}</h1>
                <img src={item.imageUrl} alt={item.name} />
                <h1 className={`${styles.events_name}`}>{item.slot.name}</h1>
                <h2 className={`${styles.events_mode}`}>{item.map.gameMode.name}</h2>
                <h2 className={`${styles.events_time}`}>{daysLeft} days left</h2>
                <h2 className={`${styles.events_brawlers}`}>{item.map.stats.brawler}</h2>
                <img src={item.map.gameMode.imageUrl} alt={item.name} />
              </div>
            ); 
          })}
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false) }>
        <Modal.Header closeButton>
          <Modal.Title className={`${styles.event_title}`}>{selectedEvent ? selectedEvent.slot: ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{selectedEvent ? selectedEvent.map: ""}</h5>
        </Modal.Body>
      </Modal>
    </div>
  );
}



/*
const fetcher = (url) => fetch(url).then((res) => res.json());
const gameModes = [{name: "Gem Grab", id: "GemGrab"}, {name: "Brawl Ball", id: "BrawlBall"},{name: "Showdown", id: "Showdown"}, {name: "Heist", id: "Heist"}, {name: "Bounty", id: "Bounty"}, {name: "Siege", id: "Siege"}, {name: "Hot Zone", id: "HotZone"}, {name: "Knockout", id: "Knockout"}, {name: "Takedown", id: "Takedown"}, {name: "Big Game", id: "BigGame"{"}"}, {name: "Robo Rumble", id: "RoboRumble"}, {name: "Boss Fight", id: "BossFight"}, {name: "Super City Rampage", id: "SuperCityRampage"}, {name: "Power Play", id: "PowerPlay"}];

export default function EventPage() {
  const { data, error } = useSWR('https://api.brawlapi.com/v1/events', fetcher);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  if (error) return <div>Failed to load events</div>;
  if (!data) return <div>Loading...</div>;

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  var currentDate, endTime, timeLeft, daysLeft;

  return (
    <div>
      <Banner />
      <GameMode />
      <div className={`${styles.events_title}`}>
        <h1>Events Happening Now</h1>
      </div>
      <div className={`${styles.Container}`} onClick={handleEventClick}>
        <div className={`${styles.events_container}`}>
          {data.active.map((item, i) => {
            currentDate = new Date();
            endTime = new Date(item.endTime);
            timeLeft = endTime.getTime() - currentDate.getTime();
            daysLeft = Math.ceil(timeLeft / (1000 * 3600 * 24));
            console.log(timeLeft);
            return (
              <div key={i} className={`${styles.events_item}`}>
                <h1 className={`${styles.brawler_name}`}>{item.name}</h1>
                <img src={item.imageUrl} alt={item.name} />
                <h1 className={`${styles.events_name}`}>{item.slot.name}</h1>
                <h2 className={`${styles.events_mode}`}>{item.map.gameMode.name}</h2>
                <h2 className={`${styles.events_time}`}>{daysLeft} days left</h2>
                <h2 className={`${styles.events_brawlers}`}>{item.map.stats.brawler}</h2>
                <img src={item.map.gameMode.imageUrl} alt={item.name} />
              </div>
            ); 
          })}
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className={`${styles.event_title}`}>{selectedEvent ? selectedBrawler.name: ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{selectedEvent ? selectedEvent.name: ""}</h5>
        </Modal.Body>
      </Modal>
    </div>
  );
}
*/