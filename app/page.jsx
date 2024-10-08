/* page.jsx / Landing page by Tay King Yu, Galen*/

import styles from "./page.module.css";
import HeroImage from "./ui/page-components/HeroImage/HeroImage";
import Container from "react-bootstrap/Container";
import fonts from "./ui/fonts.css";
import BrawlerSlider from "./ui/page-components/BrawlerSlider/BrawlerSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroImage />
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
            <Container className={`pe-5 me-4 mt-5 `}>
              <h1>
                Discover the excitement at your fingertips with BrawlHub! 🚀
              </h1>
              <h3>
                <ul>
                  <li>🗺️ Map Mayhem: Navigate strategic maps like a pro.</li>
                  <br />
                  <li>
                    {" "}
                    🤖 Brawler Mystery: Find our more about the different
                    brawlers
                  </li>
                  <br />
                  <li>
                    🧠 Memory Challenge:: Test your memory with our mini-game.
                  </li>
                </ul>
              </h3>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}
