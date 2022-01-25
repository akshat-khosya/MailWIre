import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="h-fit min-h-screen w-screen flex flex-col  justify-between bg-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
