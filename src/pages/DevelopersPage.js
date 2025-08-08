import React from "react";
import "../App.css"; // 공통 스타일

// 1. Assets 폴더에서 프로필 이미지들을 불러옵니다.
import seungjunImg from "../Assets/seungjoon.png";
import yunseongImg from "../Assets/yoonsung.png";
import seongjunImg from "../Assets/sungjoon.png";
import hyunsooImg from "../Assets/hyunsu.png";
import jonghoImg from "../Assets/jongho.png";
import yejoonImg from "../Assets/yejoon.png";

// 개발자 데이터를 배열로 관리하면 코드가 더 깔끔해집니다.
const developers = [
  {
    name: "승준",
    role: "Project Manager",
    description: "전체적인 프로젝트 관리 및 기획을 담당",
    imgSrc: seungjunImg,
  },
  {
    name: "윤성",
    role: "Player System",
    description: "플레이어 캐릭터 구조체 및 상태 관리를 구현",
    imgSrc: yunseongImg,
  },
  {
    name: "성준",
    role: "Inventory & Item System",
    description: "인벤토리 UI 및 아이템 관리 시스템을 개발",
    imgSrc: seongjunImg,
  },
  {
    name: "현수",
    role: "Map Generation & Rendering",
    description: "랜덤 맵 생성 알고리즘과 렌더링을 구현",
    imgSrc: hyunsooImg,
  },
  {
    name: "종호",
    role: "Monster & Combat System",
    description: "몬스터 AI 및 다양한 행동 패턴을 구현",
    imgSrc: jonghoImg,
  },
  {
    name: "예준",
    role: "Crafting System & Block Manipulation",
    description: "제작대 UI 및 레시피 시스템을 개발",
    imgSrc: yejoonImg,
  },
];

function DevelopersPage() {
  return (
    <main className="content-section">
      <h1 className="page-title">TEAM CODE-BLACK</h1>
      <div className="developer-list">
        {developers.map((dev, index) => (
          <div key={index} className="developer-card">
            <img
              src={dev.imgSrc}
              alt={`${dev.name} 프로필 사진`}
              className="developer-img"
            />
            <h3 className="developer-name">{dev.name}</h3>
            <h3>
              <span className="developer-role">{dev.role}</span>
            </h3>
            <p className="developer-description">{dev.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default DevelopersPage;
