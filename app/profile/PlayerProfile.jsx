"use client";
import React, { useState } from 'react';

const PlayerProfile = () => {
  const [playerTag, setPlayerTag] = useState('');
  const [playerData, setPlayerData] = useState(null);

  const handleInputChange = (event) => {
    setPlayerTag(event.target.value);
  };

  const handleFetchProfile = async () => {
    try {
      const trimmedPlayerTag = playerTag.trim();
      const encodedPlayerTag = encodeURIComponent(trimmedPlayerTag);
  
      const response = await fetch(`/api/profile/${encodedPlayerTag}`);
      console.log(response)
      const data = await response.json();
      console.log(data);
      setPlayerData(data);
    } catch (error) {
      console.error('Error fetching player profile:', error);
    }
  };
  
  return (
    <div>
      <h2>Brawl Stars Player Profile Fetcher</h2>
      <label>
        Enter player tag:
        <input type="text" value={playerTag} onChange={handleInputChange} />
      </label>
      <button onClick={handleFetchProfile}>Fetch Profile</button>

      {playerData && (
        <div>
          <h3>Player Information</h3>
          <pre>{JSON.stringify(playerData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PlayerProfile;