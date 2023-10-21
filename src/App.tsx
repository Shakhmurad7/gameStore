import { Route, Routes } from "react-router"
import Home from "./pages/Home/home"
import About from "./pages/About/about"

function App() {


  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
   </>
  )
}

export default App
