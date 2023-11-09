import { Route, Routes } from "react-router"
import Home from "./pages/Home/home"
import Connect from "./pages/Connect/connect"
import Single from "./layout/single"
import SingUP from "./pages/Sing-up/singUP"
import Marketplace from "./pages/Marketplace/marketplace"
import Ranking from "./pages/Ranking/Ranking"

function App() {


  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Ranking" element={<Ranking/>} />
      <Route path="/connect" element={<Connect/>} />
      <Route path="/SingUP" element={<SingUP/>} />
      <Route path="/marketplace" element={<Marketplace/>} />
      <Route path="/connect/:id" element={<Single/>} />
    </Routes>
   </>
  )
}

export default App
