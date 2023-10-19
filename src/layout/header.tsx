import { Link } from "react-router-dom";
import Navbar from "./navbar"
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
   <div className="Header-container">
      <div className="header-left">
        <img src={'./Storefront.svg'} />
        <h2>NFT Marketplace</h2>
      </div>
      <div className="header-right">
        <Navbar/>
            <Link to={'/contact'}>
          <div className="sing-up">
              <AiOutlineUser/>
              <p>Sign Up</p>
          </div>
            </Link>
      </div>
   </div> 
  )
}

export default Header