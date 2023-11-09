import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className="Navbar">
        <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/Marketplace'}>Marketplace</Link>
            <Link to={'/ranking'}>Rankings</Link>
            <Link to={'/connect'}>Connect a wallet</Link>
        </ul>
    </div>
  )
}

export default Navbar