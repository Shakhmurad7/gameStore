import { Link } from "react-router-dom";
import Navbar from "./navbar"
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
   <div className="Header-container">
        <Link to={'/'} >
      <div className="header-left">
        <img src={'../img/Storefront.svg'} />
        <h2>NFT Marketplace</h2>
      </div>
        </Link>
      <div className="header-right">
        <Navbar/>
            <Link to={'/contact'}>
            <Link to={'/SingUP'} >
          <div className="sing-up">
              <AiOutlineUser/>
              <p>Sign Up</p>
          </div>
            </Link>
            </Link>
      </div>
   </div> 
  )
}

export default Header