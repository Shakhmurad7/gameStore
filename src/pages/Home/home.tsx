import PageContainer from "../../companents/pageContainer"
import style from "./index.module.css"
import {BsRocketTakeoffFill} from "react-icons/bs";
function Home() {
  return (
    <PageContainer>
        <div className={style['hero-container']}>
          <div className={style['hero-left']}>
            <h1>Discover Digital Art & Collect NFTs</h1>
            <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
            <div className={style['hero-icon']}>
            <h3>Get Started</h3>
            <BsRocketTakeoffFill/>
            </div>
            <div className={style['hero-page']}>
              <div className={style['hero-block']}>
                <b>240k+ </b>
                <p>Total Sale</p>
              </div>
              <div className={style['hero-block']}>
                <b>100k+ </b>
                <p>Auctions</p>
              </div>
              <div className={style['hero-block']}>
                <b>240k+ </b>
                <p>Artists</p>
              </div>
            </div>
          </div>
          <div className={style['hero-right']}>
            <img src={'./img/Image Placeholder.png'} />
          </div>
        </div>
    </PageContainer>
  )
}

export default Home