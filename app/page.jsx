import styles from "./page.module.css"
import HeroVideo from "./ui/page-components/HeroVideo/HeroVideo";
import Container from "react-bootstrap/Container";
import fonts from "./ui/fonts.css";
import BrawlerSlider from "./ui/page-components/BrawlerSlider/BrawlerSlider";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <HeroVideo />
      <div>
      <Container fluid className={`${styles.Container}`}>
        <BrawlerSlider />
        <div className={`d-flex justify-content-start`}>
          <Container>
            <Image
              alt="Phone and screenshot"
              src="/media/edited-phone-image.png" /* image = https://wall.alphacoders.com/big.php?i=1279154 */
              height={1200}
              width={1200}
              className={`${styles.phonepos} `}
            />
          </Container>
          <Container className={`${styles.bodytext} mt-5 `}>
            <h1> 
              Your Ultimate Brawl Stars Tracker 🚀
            </h1>
            <h3>
              <ul>
              <li>🏆 Leaderboards at Your Fingertips: Stay ahead of the competition by tracking your progress and comparing stats with top players worldwide.</li>
              <br />
              <li>📊 In-Depth Player Stats: Dive into detailed statistics for each brawler, from win rates to power levels – empowering you to refine your strategies.</li>
              <br />
              <li>🌟 Event Notifications: Never miss a critical event again! Receive instant notifications for upcoming events, challenges, and special promotions.</li>
              </ul>
            </h3>
         
          </Container>
        </div>
      </Container>
      </div>

    </>
  );
}

  

