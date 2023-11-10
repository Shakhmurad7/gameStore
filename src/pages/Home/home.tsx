import PageContainer from "../../companents/pageContainer"
import Carthome from "../../layout/Cart-home";
import CartBlock from "../../layout/CartBlock";
import CartImg from "../../layout/CartImg";
import style from "./index.module.css"
import {BsRocketTakeoffFill} from "react-icons/bs";
import {IoMdEye} from "react-icons/io";
import Data from "../../layout/date";
import Carthome3 from "../../layout/Carthome3";
import {AiOutlineMail} from "react-icons/ai";
import { Link } from "react-router-dom";
function Home() {
  return (
    <PageContainer>
        <div className={style['hero-container']}>
          <div className={style['hero-left']}>
            <h1>Discover Digital Art & Collect NFTs</h1>
            <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
              <Link to={'/Marketplace'}>
              <div className={style['hero-icon']}>
              <BsRocketTakeoffFill/>
              <h5>Get Started</h5>
              </div>
            </Link>
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

<Link to={"/Marketplace"}>
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
                  <img style={{transform:"none"}} src={'./img/Secondary Photo Placeholder (1).svg'} />
                  <p>MrFox</p>
                </div>
              </div>
            </div>
</Link>
<Link to={"/Marketplace"}>

            <div className={style['section-img-block']}>
              <img src={'./img/Primary Photo Placeholder (1).png'} />
              <div className={style['setion-img-row']}>
                <img src={'./img/Secondary Photo Placeholder (2).svg'} />
                <img src={'./img/Secondary Photo Placeholder (3).svg'} />
                <img src={'./img/Number of additional NFTs.svg'} />
              </div>
              <div className={style['section-text-row']}>
                <h2>DSGN Animals</h2>
                <div className={style['section-img-text-row']}>
                  <img style={{transform:"none"}} src={'./img/Secondary Photo Placeholder (1).svg'} />
                  <p>MrFox</p>
                </div>
              </div>
            </div>
</Link>
<Link to={"/Marketplace"}>


            <div className={style['section-img-block']}>
              <img src={'./img/Primary Photo Placeholder (2).png'} />
              <div className={style['setion-img-row']}>
                <img src={'./img/Secondary Photo Placeholder (4).svg'} />
                <img src={'./img/Secondary Photo Placeholder (5).svg'} />
                <img src={'./img/Number of additional NFTs.svg'} />
              </div>
              <div className={style['section-text-row']}>
                <h2>DSGN Animals</h2>
                <div className={style['section-img-text-row']}>
                  <img  style={{transform:"none"}}src={'./img/Secondary Photo Placeholder (1).svg'} />
                  <p>MrFox</p>
                </div>
              </div>
            </div>
</Link>

          </div>
        </div>

<div className={style['cart-container']}>
  <div className={style['section-cart-top-text']}>
    <div className={style['section-text-left']}>
      <h2>Top creators</h2>
      <p>Checkout Top Rated Creators on the NFT Marketplace</p>
    </div>
    <Link to={"/Ranking"}>
    <div className={style['section-text-right']}>
      <BsRocketTakeoffFill/>
      <p>View Rankings</p>
    </div>
    </Link>
  </div>
        <Carthome/>
</div>

{/* -----cart-block-item---- */}
<div className={style['section-home-cart']}>
  <CartImg/>
</div>

{/* -----cart-2----- */}
<div className={style['cart-container']}>
  <div className={style['section-cart-top-text']}>
    <div className={style['section-text-left']}>
      <h2>Discover More NFTs</h2>
      <p>Explore new trending NFTs</p>
    </div>
      <Link to={'/connect'}>
            <div className={style['section-text-right']}>
                <IoMdEye/>
                <p>See All</p>
            </div>
        </Link>
  </div>
    <CartBlock/>
</div>
{/* ----Date---- */}

<Data/>

{/* ----Cart-3----- */}
<div className={style['cart-big-container-3']}>
  <Carthome3/>
</div>

<div className={style['container-messaje']}>
    <img src={'./img/Photo (1).png'} />
    <div className={style['container-messaje-block']}>
      <h1>Join our weekly digest</h1>
      <p>Get exclusive promotions & updates straight to your inbox.</p>
      <div className={style['messaje-row']}>
        <input type="text" placeholder="Enter your email here" />
        <div className={style['messaje-icon']}>
          <AiOutlineMail/>
          <p>Subscribe</p>
        </div>
      </div>
    </div>
</div>

    </PageContainer>
  )
}

export default Home