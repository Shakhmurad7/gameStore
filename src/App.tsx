import { Route, Routes } from "react-router"
import Home from "./pages/Home/home"
import About from "./pages/About/about"
import Connect from "./pages/Connect/connect"
import Single from "./layout/single"
import SingUP from "./pages/Sing-up/singUP"
import Marketplace from "./pages/Marketplace/marketplace"

function App() {


  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/connect" element={<Connect/>} />
      <Route path="/SingUP" element={<SingUP/>} />
      <Route path="/marketplace" element={<Marketplace/>} />
      <Route path="/connect/:id" element={<Single/>} />
    </Routes>
   </>
  )
}

export default App
