/* Events page by Teo Hong Rui Freddy*/
"use client";

import Link from "next/link";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/legacy/image";
import React, {useState, useEffect} from "react";
import useSWR from 'swr';
import { Modal } from 'react-bootstrap';

const fetcher = (url) => fetch(url).then((res) => res.json());
const gameModes = [{name: "Gem Grab", id: "GemGrab"}, {name: "Brawl Ball", id: "BrawlBall"},{name: "Showdown", id: "Showdown"}, {name: "Heist", id: "Heist"}, {name: "Bounty", id: "Bounty"}, {name: "Siege", id: "Siege"}, {name: "Hot Zone", id: "HotZone"}, {name: "Knockout", id: "Knockout"}, {name: "Takedown", id: "Takedown"}, {name: "Big Game", id: "BigGame"}, {name: "Robo Rumble", id: "RoboRumble"}, {name: "Boss Fight", id: "BossFight"}, {name: "Super City Rampage", id: "SuperCityRampage"}, {name: "Power Play", id: "PowerPlay"}];
const gameModeIds = gameModes.map(item => item.id);
const gameModeNames = gameModes.map(item => item.name);

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

function currentEvents(){

}

function GameMode() {
    function navigateToPage(event) {
    const sectionId = event.target.dataset.sectionId;
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function moveToSection(gameMode) {
    return (
    <div key={gameMode.id} data-section-id={gameMode.id} onClick={navigateToPage}>
      {gameMode.name}
    </div>
    );
  }

  return (
    <div className={`${styles.gamemode}`}>
      <div className={`${styles.gamemodetitle}`}>
        <h1>Popular Game Modes</h1><br/>
      </div>
      <div className={`${styles.gamemodes}`}>
        {gameModes.map((gameMode) => (
          <div className={`${styles.gamemodecard}`} onClick={navigateToPage}>
            {moveToSection()}
            <div>{gameMode}</div>
          </div>
        ))}
      </div>
    </div> 
  );
}

/*
function GameMode() {
  function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={`${styles.gamemode}`}>
      <div className={`${styles.gamemodetitle}`}>
        <h1>Popular Game Modes</h1><br/>
      </div>
      <div className={`${styles.gamemodes}`}>
        {gameModes.map((gameMode, index) => (
          <div className={`${styles.gamemodecard}`} onClick={() => scrollToSection(`section-${index}`)}>
            <div>{gameMode}</div>
          </div>
        ))}
      </div>
      {gameModes.map((gameMode, index) => (
        <h2 id={`section-${index}`}>{gameMode}</h2>
      ))}
    </div> 
  );
}
*/


export default function EventPage() {
  const { data, error } = useSWR('https://api.brawlapi.com/v1/events', fetcher);
  const [showModal, setShowModal] = useState(false);

  if (error) return <div>Failed to load events</div>;
  if (!data) return <div>Loading...</div>;

  const handleEventClick = (event) => {
    setShowModal(true);
    setSelectedEvent(event);
  };

  var currentDate, endTime, timeLeft, daysLeft;

  return (
    <div>
      <Banner />
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
          <Modal.Title>Event Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{"Gem Grab"}</h1>
          <h2>{"stuff"}</h2>
        </Modal.Body>
      </Modal>
    </div>
  );
}

/*
export default function EventPage() {
    const { data, error } = useSWR('https://api.brawlapi.com/v1/events', fetcher);
    const [showModal, setShowModal] = useState(false);
    if (error) return <div>Failed to load events</div>;
    if (!data) return <div>Loading...</div>;
    const handleEventClick = () => {
      setShowModal(true);
    };
    var currentDate, endTime, timeLeft, daysLeft;
    return (
        <div>
            <Banner />
            <div className={`${styles.events_title}`}>
                <h1>Events Happenning Now</h1>
            </div>
            <div className={`${styles.Container}`}>
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
                        <Modal.Title>Event Details</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {<h1>Gem Grab</h1>}
                      </Modal.Body>
                      </Modal>

                  </div>
                );
}
*/
/*
<Modal show={showModal} onHide={() => setShowModal(false)}>
<Modal.Header closeButton>
  <Modal.Title>Event Details</Modal.Title>
</Modal.Header>
<Modal.Body>
  <h1>{selectedEvent.slot.name}</h1>
  <h2>{selectedEvent.map.gameMode.name}</h2>
</Modal.Body>
</Modal>
*/