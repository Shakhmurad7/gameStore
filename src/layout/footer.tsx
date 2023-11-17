import { Link } from "react-router-dom"


function Footer() {
  return (
    <>
<div className="footer-big-container">

  <div className="footer-contaiiner">
     <div className="footer-left">

      <div className="footer-left-block-top">
        <img src={'../img/Storefront.svg'} />
        <h2>NFT Marketplace</h2>
      </div>
      <p>NFT marketplace UI created with Anima for Figma.</p>
      <p>Join our community</p>

      <div className="footer-left-icon">
        <img src={'../img-icon/DiscordLogo.svg'}/>
        <img src={'../img-icon/InstagramLogo.svg'} />
        <img src={'../img-icon/TwitterLogo.svg'} />
        <img src={'../img-icon/YoutubeLogo.svg'} />
      </div>

     </div>

     <div className="footer-left-block">
     <div className="footer-center">
        <h2>Explore</h2>
        <Link to={'/'} ><p>Marketplace</p></Link>
        <Link to={'/about'} ><p>Rankings</p></Link>
        <Link to={"/contact"}> <p>Connect a wallet</p></Link>
     </div>

     <div className="footer-right">
      <h2>Join our weekly digest</h2>
      <p>Get exclusive promotions & updates straight to your inbox.</p>
      <div className="footer-input">
        <input type="text" placeholder="enter you email here" />
        <button>Subscribe</button>
      </div>
     </div>

     </div>
     
  </div>

  <div className="footer-end">
    <p>Ⓒ NFT Market. Use this template freely.</p>
  </div>

   </div>
    </>
  )
}

export default Footer