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
    description:
      "플레이어 추적 알고리즘,\n보스 몬스터 스테이지,\n전투 시스템,\n프로젝트 관리",
    imgSrc: seungjunImg,
  },
  {
    name: "윤성",
    role: "Player System",
    description:
      "플레이어 물리 엔진 및 이동 시스템,\n상태 기반의 애니메이션 시스템,\n도구 장착 및 사용(스윙) 메커니즘",
    imgSrc: yunseongImg,
  },
  {
    name: "성준",
    role: "Inventory & Item System",
    description:
      "아이템DB시스템,\n아이템DB 기반의 인벤토리 시스템,\n게임의 전반적인 음향 시스템",
    imgSrc: seongjunImg,
  },
  {
    name: "현수",
    role: "Map Generation & Rendering",
    description:
      "콘솔 기반 렌더링,\n윈도우 API를 이용한 인풋,\n맵 생성,\n코드 정리",
    imgSrc: hyunsooImg,
  },
  {
    name: "종호",
    role: "Monster & Combat System",
    description: "몹 생성 시스템,\n몹 물리 엔진 적용",
    imgSrc: jonghoImg,
  },
  {
    name: "예준",
    role: "Crafting System & Block Manipulation",
    description:
      "블록 파괴 및 설치 시스템,\n도구 및 아이템 추가,\n제작 시스템,\nUI 최적화",
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
