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
            <BsRocketTakeoffFill/>
            <h5>Get Started</h5>
            </div>
            <div className={style['hero-page']}>
              <div className={style['hero-block']}>
                <h2>240k+ </h2>
                <p>Total Sale</p>
              </div>
              <div className={style['hero-block']}>
                <h2>100k+ </h2>
                <p>Auctions</p>
              </div>
              <div className={style['hero-block']}>
                <h2>240k+ </h2>
                <p>Artists</p>
              </div>
            </div>
          </div>
          <div className={style['hero-right']}>
            <img src={'./img/Image Placeholder.png'} />
            <div className={style['hero-right-block']}>
              <h2>Space Walking</h2>
              <div className={style['hero-right-block-row']}>
                  <img src={'./img-icon/Avatar Placeholder.svg'} />
                  <p>Animakid</p>
              </div>
            </div>
          </div>
        </div>
    </PageContainer>
  )
}

export default Home