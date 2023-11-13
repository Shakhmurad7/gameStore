import { useState } from "react"
import { Link } from "react-router-dom"
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [menu , setmenu] = useState(false)
  return (
    <>
    <div className={`Navbar ${menu? `navbar` : `none` }`}>
        <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/Marketplace'}>Marketplace</Link>
            <Link to={'/ranking'}>Rankings</Link>
            <Link to={'/connect'}>Connect a wallet</Link>
        </ul>
        <div onClick={()=>setmenu(false)} className="close">
            <AiOutlineClose/> 
        </div>
    </div>
          <div onClick={()=>setmenu(!menu)} className="CiMenuFries">
           {
             menu? <AiOutlineClose/> : <CiMenuFries/> 
            }
          </div>
            </>
  )
}

export default Navbar