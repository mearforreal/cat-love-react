import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./compnent/nav/Nav";
import Home from "./compnent/home/Home";
import Favorites from "./compnent/fav/Favorites";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/fav" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
