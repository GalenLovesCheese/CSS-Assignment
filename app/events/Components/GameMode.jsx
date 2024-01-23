"use client";

import styles from './GameMode.module.css';
const GameModes = [
    {
      id: 'Gem-Grab',
      name: 'Gem Grab',
    },
    {
      id: 'Brawl-Ball',
      name: 'Brawl Ball',
    },
    {
      id: 'Show-down',
      name: 'Showdown',
    },
    {
        id: 'Heist',
        name: 'Heist',
    },
    {
        id: 'Bounty',
        name: 'Bounty',
    },
    {
        id: 'Siege',
        name: 'Siege',
    },
    {
        id: 'Hot-Zone',
        name: 'Hot Zone',
    },
    {
        id: 'Knockout',
        name: 'Knockout',
    },
    {
        id: 'Big-Game',
        name: 'Big Game',
    },
    {
        id: 'Robo-Rumble',
        name: 'Robo Rumble',
    },
    {
        id: 'Boss-Fight',
        name: 'Boss Fight',
    },
    {
        id: 'Wipeout',
        name: 'Wipeout',
    },
    {
        id: 'Power-Play',
        name: 'Power Play',
    },
  ];
  
  export default function GameMode() {
      return (
          <div className={`${styles.gamemode}`}>
              <div className={`${styles.gamemodetitle}`}>
              <h1>Popular Game Modes</h1><br/>
              </div>
              <div className={`${styles.gamemodes}`}>
                  {GameModes.map((mode) => (
                    <div className={`${styles.item}`} key={mode.id}>
                          <h2>{mode.name}</h2>
                      </div>
                  ))}
              </div>
          </div>
      )
  }
  


/*
const handleClick = () => {
  window.location.href = '/maps#game-mode-3'
  const section = document.querySelector('#game-mode-3')
  section.scrollIntoView({ behavior: 'smooth' })
}

const GameMode = () => {
  return (
    <div>
      <h1>Game Modes</h1>
      <button onClick={handleClick}>Redirect to Maps</button>
    </div>
  )
}
*/