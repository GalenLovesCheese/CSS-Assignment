"use client";

import Link from 'next/link';
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
        id: 'Hot-Zone',
        name: 'Hot Zone',

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
        id: 'Show-down',
        name: 'Showdown',
    },
    {
        id: 'Wipeout',
        name: 'Wipeout',
    },
    {
        id: 'Big-Game',
        name: 'Big Game',
    },
    {
        id: 'Knockout',
        name: 'Knockout',
    },
    {
        id: 'Boss-Fight',
        name: 'Boss Fight',
    },
    {
        id: 'Power-Play',
        name: 'Power Play',
        
    },
    {
        id: 'Robo-Rumble',
        name: 'Robo Rumble',
    },
  ];

const handleClick = (id) => {
    window.location.href = `/maps#${id}`;
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({ behavior: 'smooth' });
}

export default function GameMode() {
    return (
        <div className={`${styles.gamemode}`}>
            <div className={`${styles.gamemodetitle}`}>
                <h1>Popular Game Modes</h1><br/>
            </div>
            <div className={`${styles.gamemodes}`}>
                {GameModes.map((mode) => (
                    <div className={`${styles.item}`} key={mode.id}>
                        <h2 onClick={() => handleClick(mode.id)}>{mode.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

  /*
  const handleClick = (id) => {
    const button = document.querySelector(`#${id}`);
    window.location.href = `/maps#${id}`;
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  export default function GameMode() {
    return (
      <div className={`${styles.gamemode}`}>
        <div className={`${styles.gamemodetitle}`}>
          <h1>Popular Game Modes</h1><br/>
        </div>
        <div className={`${styles.gamemodes}`}>
          {GameModes.map((mode) => (
            <div className={`${styles.item}`} key={mode.id}>
              <button id={mode.id} onClick={() => handleClick(mode.id)}>
                <h2>{mode.name}</h2>
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
*/

/*
  export default function GameMode() {
      return (
          <div className={`${styles.gamemode}`}>
            const handleClick = (id) => {
            window.location.href = '/map'};
              <div className={`${styles.gamemodetitle}`}>
              <h1>Popular Game Modes</h1><br/>
              </div>
              <div className={`${styles.gamemodes}`}>
                  {GameModes.map((mode) => (
                    <div className={`${styles.item}`} key={mode.id}>
                          <Link href="/maps">
                              <h2>{mode.name}</h2>
                          </Link>
                      </div>
                  ))}
              </div>
          </div>
      )
  }

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