import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/services" element={<h2>Services Page</h2>} />
        <Route path="/products" element={<h2>Products Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
