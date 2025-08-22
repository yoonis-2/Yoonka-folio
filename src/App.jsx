import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"

function App(){
  return <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/view-work" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/learn-more" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/view-all" element={<Project/>}/>
      <Route path="/" element={<About/>}/>
    
    </Routes>
    <Footer/>
  </div>
}

export default App