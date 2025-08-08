import { Routes, Route } from "react-router-dom";
import "./App.css";
import backgroundImage from "./Assets/Terraria.jpg";

// 컴포넌트와 페이지들 불러오기
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import IntroPage from "./pages/IntroPage";
// 아직 만들지 않은 페이지는 나중에 추가할 수 있습니다.
// import DevelopersPage from './pages/DevelopersPage';
// import NewsPage from './pages/NewsPage';

function App() {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar /> {/* 모든 페이지에 Navbar 표시 */}
      <Routes>
        {/* 경로 설정 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<IntroPage />} />
        {/* <Route path="/developers" element={<DevelopersPage />} /> */}
        {/* <Route path="/news" element={<NewsPage />} /> */}
      </Routes>
      <Footer /> {/* 모든 페이지에 Footer 표시 */}
    </div>
  );
}

export default App;
