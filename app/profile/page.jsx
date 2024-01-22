import { FetchPlayerData } from './FetchPlayerData';
import PlayerProfile from './PlayerProfile';

const Home = () => {
  const playerTag = '#80YRY82LG'; // Replace with an actual player tag

  return (
    <div>
      <script src='/profile/api.js' />
      <PlayerProfile />
      <FetchPlayerData />
    </div>
  );
};

export default Home;