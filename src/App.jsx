import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"

function App(){
  return <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<About/>}/>
      <Route path="/" element={<About/>}/>
    </Routes>
    <Footer/>
  </div>
}

export default App