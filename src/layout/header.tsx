import Navbar from "./navbar"

function Header() {
  return (
   <div className="Header-container">
      <div className="header-left">
        <img src={'./Storefront.svg'} />
        <h2>NFT Marketplace</h2>
      </div>
      <div className="header-right">
        <Navbar/>
          <div className="sing-up">
            <p>Sign Up</p>
            <i className="fa-solid fa-user"></i>
          </div>
      </div>
   </div> 
  )
}

export default Header