import { Routes, Route } from "react-router-dom";
import "./App.css";
import backgroundImage from "./Assets/Terraria.jpg";

// 컴포넌트와 페이지들 불러오기
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import IntroPage from "./pages/IntroPage";
import DevelopersPage from "./pages/DevelopersPage"; // <-- 이 줄을 추가하세요.

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
        {/* 아래 Route를 추가하여 DevelopersPage를 연결합니다. */}
        <Route path="/developers" element={<DevelopersPage />} />
        {/* <Route path="/news" element={<NewsPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
