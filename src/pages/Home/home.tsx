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

        <div className={style['section-container']}>
          <div className={style['section-top-text']}>
            <h2>Trending Collection</h2>
            <p>Checkout our weekly updated trending collection.</p>
          </div>
          <div className={style['section-img']}>
            <div className={style['section-img-block']}>
              <img src={'./img/Primary Photo Placeholder.png'} />
              <div className={style['setion-img-row']}>
                <img src={'./img/Secondary Photo Placeholder (1).svg'} />
                <img src={'./img/Secondary Photo Placeholder.svg'} />
                <img src={'./img/Number of additional NFTs.svg'} />
              </div>
              <div className={style['section-text-row']}>
                <h2>DSGN Animals</h2>
                <div className={style['section-img-text-row']}>
                  <img src={'./img/Secondary Photo Placeholder (1).svg'} />
                  <p>MrFox</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </PageContainer>
  )
}

export default Home