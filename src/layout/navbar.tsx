import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className="Navbar">
        <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </ul>
    </div>
  )
}

export default Navbar