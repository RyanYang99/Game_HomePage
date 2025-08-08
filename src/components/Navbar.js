import React from "react";
import { Link } from "react-router-dom"; // a 태그 대신 Link를 사용합니다.
import "../App.css"; // 스타일을 위해 App.css를 가져옵니다.

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/">
        {" "}
        <div className="logo">TERRACRAFT</div>
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/intro">게임설명</Link> {/* /intro 경로로 이동 */}
          </li>
          <li>
            <Link to="/developers">제작진</Link>
          </li>
          <li>
            <Link to="/news">소식</Link>
          </li>
        </ul>
      </nav>
      {/* 다운로드 버튼은 외부 링크나 파일 다운로드이므로 a 태그를 유지해도 좋습니다. */}
      <a href="/game/Terracraft.exe" download className="nav-button">
        Download
      </a>
    </header>
  );
}

export default Navbar;
