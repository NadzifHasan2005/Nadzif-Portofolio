import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation.jsx"
import Home from "./Home.jsx"
import Skills from "./Skills.jsx"
import Experience from './Experience.jsx';
import Footer from "./Footer.jsx"

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App