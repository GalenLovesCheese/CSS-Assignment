/* Sections by Teo Hong Rui Freddy*/

import useSWR from 'swr';
import styles from './Sections.module.css';
import Buttons from './Buttons';
import React, { useEffect, useState } from 'react';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Sections = () => {
  const { data, error } = useSWR('https://api.brawlapi.com/v1/maps', fetcher);
  const [selectedGameMode, setSelectedGameMode] = useState('Gem-Grab');

  if (error) return <div>Failed to load maps</div>;
  if (!data) return <div>Loading...</div>;

  const handleGameModeChange = (gameModeId) => {
    setSelectedGameMode(gameModeId);
  };

  return (
    <>
      <Buttons onGameModeChange={handleGameModeChange} />
      <div className={`${styles.Container}`}>
        <div className={`${styles.GemGrab}`} id="Gem-Grab"> 
          {data.list
            .filter((map) => map.gameMode.name === "Gem Grab")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>
        <div className={`${styles.GemGrab}`} id="Brawl-Ball">
          {data.list
            .filter((map) => map.gameMode.name === "Brawl Ball")
            .map((map, i) => (
              <div key={i} className={`${styles.maps_item}`}>
                <h2>{map.name}</h2>
                <img src={map.imageUrl} alt={map.name} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Sections;

/*
const Sections = () => {
  const { data, error } = useSWR('https://api.brawlapi.com/v1/maps', fetcher);
  const [selectedGameMode, setSelectedGameMode] = useState('Gem-Grab'); // Default to Gem Grab

  if (error) return <div>Failed to load maps</div>;
  if (!data) return <div>Loading...</div>;

  const handleGameModeChange = (gameModeId) => {
    setSelectedGameMode(gameModeId);
  };

  return (
    <>
      <Buttons onGameModeChange={handleGameModeChange} />
      <div className={`${styles.Container}`}>
        <div className={`${styles.GemGrab}`} id="Gem-Grab">
          <h2>Gem Grab</h2>
          {selectedGameMode === 'Gem-Grab' &&
            data.list
              .filter((map) => map.gameMode.name === 'Gem Grab') // Adjust 'gemGrab' based on your data structure
              .map((map, i) => (
                <div key={i} className={`${styles.maps_item}`}>
                  <h1 className={`${styles.maps_name}`}>{map.name}</h1>
                  <img src={map.imageUrl} alt={map.name} />
                </div>
              ))}
        </div>
        <div className={`${styles.BrawlBall}`} id="Brawl-Ball">
          <h2>Brawl Ball</h2>
          {selectedGameMode === 'Brawl-Ball' &&
            data.list
              .filter((map) => map.gameMode.name === 'Brawl Ball') // Adjust 'gemGrab' based on your data structure
              .map((map, i) => (
                <div key={i} className={`${styles.maps_item}`}>
                  <h1 className={`${styles.maps_name}`}>{map.name}</h1>
                  <img src={map.imageUrl} alt={map.name} />
                </div>
              ))}
        </div>
        <div className={`${styles.HotZone}`} id="Hot-Zone">
          <h2>Hot Zone</h2>
          {selectedGameMode === 'Hot-Zone' &&
            data.list
              .filter((map) => map.gameMode.name === 'Hot Zone') // Adjust 'gemGrab' based on your data structure
              .map((map, i) => (
                <div key={i} className={`${styles.maps_item}`}>
                  <h1 className={`${styles.maps_name}`}>{map.name}</h1>
                  <img src={map.imageUrl} alt={map.name} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Sections;
*/