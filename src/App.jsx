import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Upload from "./pages/upload";
import Drunk from "./pages/drunk";
import Sober from "./pages/sober";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/upload/drunk" element={<Drunk />} />
        <Route exact path="/upload/sober" element={<Sober />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
