import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Safety from "./components/safety/Safety";
import Footer from "./pages/footer/Footer";
import NavBar from "./pages/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
