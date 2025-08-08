import { Routes, Route } from "react-router-dom";
import "./App.css";
import backgroundImage from "./Assets/Terraria.jpg";

// 컴포넌트와 페이지
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import IntroPage from "./pages/IntroPage";
import DevelopersPage from "./pages/DevelopersPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/developers" element={<DevelopersPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
