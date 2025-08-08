import "./App.css";
import backgroundImage from "./Assets/Terraria.jpg";

function App() {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* 네비게이션 바 */}
      <header className="navbar">
        <div className="logo">TERRACRAFT</div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">게임설명</a>
            </li>
            <li>
              <a href="#">제작진</a>
            </li>
            <li>
              <a href="#">소식</a>
            </li>
          </ul>
        </nav>
        <a href="#" className="nav-button">
          Download
        </a>
      </header>

      {/* 메인 히어로 섹션 */}
      <main className="hero-section">
        <h1 className="game-title">TERRACRAFT</h1>
        <p className="tagline">제작하고, 전투하고, 생존하라.</p>
        <a href="#" className="hero-button">
          Download Now
        </a>
        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">Discord</a>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="footer">
        <p>&copy; 2025 CodeBlack Developers. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
