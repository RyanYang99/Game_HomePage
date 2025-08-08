import React from "react";
import "../App.css"; // 동일한 스타일 시트를 사용합니다.
import gameplayGif from "../Assets/gameplay.gif";

function IntroPage() {
  return (
    // hero-section과 유사한 스타일을 사용하되, 내용은 다르게 구성합니다.
    <main className="content-section">
      <h1 className="page-title">게임 설명</h1>
      <div className="description">
        <h2>TERRACRAFT의 세계에 오신 것을 환영합니다!</h2>
        <p>
          TERRACRAFT는 무한한 가능성의 2D 샌드박스 게임입니다. 당신의 상상력이
          닿는 곳까지 모든 것을 만들고, 탐험하고, 생존해야 합니다.
        </p>
        <p>
          깊은 동굴을 탐험하여 희귀한 자원을 찾고, 강력한 무기와 갑옷을 제작하여
          위협적인 몬스터들과 보스들을 물리치세요. 자신만의 집을 짓거나 거대한
          성을 건설할 수도 있습니다. 모든 것은 당신의 손에 달려 있습니다.
        </p>
        <img
          src={gameplayGif}
          alt="게임 플레이 스크린샷"
          style={{
            marginTop: "20px",
            borderRadius: "8px",
            width: "100%", // 이미지가 부모 요소의 너비에 맞게 조절되도록 추가
            maxWidth: "600px", // 이미지의 최대 너비 제한
          }}
        />
        <h2>주요 특징</h2>
        <ul>
          <li>광활하고 무작위로 생성되는 월드</li>
          <li>수백 가지의 제작 아이템</li>
          <li>다양한 몬스터와 도전적인 보스들</li>
          <li>친구와 함께 즐기는 멀티플레이</li>
        </ul>
      </div>
    </main>
  );
}

export default IntroPage;
