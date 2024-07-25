import { useState } from "react"
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [menu , setmenu] = useState(false)
  return (
    <>
    <div className={`Navbar ${menu? `navbar` : `none` }`}>
        <ul>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/Marketplace'}>Marketplace</NavLink>
            <NavLink to={'/ranking'}>Rankings</NavLink>
            <NavLink to={'/connect'}>Connect a wallet</NavLink>
            <div className="singup-none">
              <NavLink to={'/SingUP'}>SingUP</NavLink>
            </div>
        </ul>
        <div onClick={()=>setmenu(false)} className="close">
            <AiOutlineClose/> 
        </div>
    </div>
          <div onClick={()=>setmenu(!menu)} className="CiMenuFries">
             <CiMenuFries/> 
          </div>
            </>
  )
}

export default Navbar