import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Maps = () => {
  const { data, error } = useSWR('https://api.brawlapi.com/v1/maps', fetcher);

  if (error) return <div>Failed to load maps</div>;
  if (!data) return <div>Loading...</div>;

  const gemGrabMaps = data.filter(map => map.game_modes.includes('gemGrab'));
  const brawlBallMaps = data.filter(map => map.game_modes.includes('brawlBall'));
  const hotZoneMaps = data.filter(map => map.game_modes.includes('hotZone'));

  return (
    <div>
      <section id="Gem-Grab">
        <h2>Gem Grab</h2>
        <p>Collect gems and hold them to win!</p>
        {gemGrabMaps.map(map => (
          <div key={map.id}>
            <h3>{map.name}</h3>
            <img src={map.image_url} alt={map.name} />
          </div>
        ))}
      </section>
      <section id="Brawl-Ball">
        <h2>Brawl Ball</h2>
        <p>Score goals to win!</p>
        {brawlBallMaps.map(map => (
          <div key={map.id}>
            <h3>{map.name}</h3>
            <img src={map.image_url} alt={map.name} />
          </div>
        ))}
      </section>
      <section id="Hot-Zone">
        <h2>Hot Zone</h2>
        <p>Control the zone to win!</p>
        {hotZoneMaps.map(map => (
          <div key={map.id}>
            <h3>{map.name}</h3>
            <img src={map.image_url} alt={map.name} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Maps;


/*
// Usage
const gameMode = 'SHOWDOWN';
const maps = await getMapsByGameMode(gameMode);
console.log(maps);


const Maps = () => {
  
  const [gemGrabMaps, setGemGrabMaps] = useState([]);
  const [brawlBallMaps, setBrawlBallMaps] = useState([]);
  const [hotZoneMaps, setHotZoneMaps] = useState([]);

  useEffect(() => {
    const fetchMaps = async () => {
      const response = await fetch('https://api.brawlapi.com/v1/maps');
      const data = await response.json();
      setGemGrabMaps(data.find(mode => mode.name === 'GemGrab').maps);
      setBrawlBallMaps(data.find(mode => mode.name === 'Brawl Ball').maps);
      setHotZoneMaps(data.find(mode => mode.name === 'Hot Zone').maps);
    };

    fetchMaps();
  }, []);

  return (
    <div>
      <section id="Gem-Grab">
        <h2>Gem Grab</h2>
        <p>Collect gems and hold them to win!</p>
        <ul>
          {gemGrabMaps.map(map => (
            <li key={map.id}>
              <img src={map.image} alt={map.name} />
              <p>{map.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section id="Brawl-Ball">
        <h2>Brawl Ball</h2>
        <p>Score goals to win!</p>
        <ul>
          {brawlBallMaps.map(map => (
            <li key={map.id}>{map.name}</li>
          ))}
        </ul>
      </section>
      <section id="Hot-Zone">
        <h2>Hot Zone</h2>
        <p>Control the zone to win!</p>
        <ul>
          {hotZoneMaps.map(map => (
            <li key={map.id}>{map.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
*/

  