import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes,useLocation } from "react-router-dom";
import Login from "./pages/Login";
import IndexPage from "./components/Index";
function App() {
  const location=useLocation();
  console.log(location.pathname.split("/")[1]);
  return (
   
      <div className="h-fit min-h-screen w-screen flex flex-col  justify-between bg-gray-800">
        {location.pathname.split("/")[1]==='dashboard' ?<IndexPage />:""}
       {location.pathname.split("/")[1]==='dashboard'?"":<Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          
        </Routes>
        {location.pathname.split("/")[1]==='dashboard'?"":<Footer />}
      </div>
  
  );
}

export default App;
