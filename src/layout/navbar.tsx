import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className="Navbar">
        <ul>
            <Link to={'/'}>Marketplace</Link>
            <Link to={'/about'}>Rankings</Link>
            <Link to={'/contact'}>Connect a wallet</Link>
        </ul>
    </div>
  )
}

export default Navbar