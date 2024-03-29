import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import PortfolioHighlights from "./components/portfolioHighlights/PortfolioHighlights";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <About/>
       <Skills/>
       <PortfolioHighlights/>
       {/* <Portfolio/> */}
       {/* <Testimonials/> */}
       <Contact/>
     </div>
    </div>
  );
}

export default App;
