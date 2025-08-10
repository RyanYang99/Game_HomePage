import React from "react";
import "../App.css"; // 동일한 스타일 시트를 사용합니다.
import battleGif from "../Assets/battle.gif";
import blockGif from "../Assets/block.gif";
import craftGif from "../Assets/craft.gif";
import farmingGif from "../Assets/farming.gif";

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
          src={farmingGif}
          alt="게임 플레이 스크린샷"
          style={{
            marginTop: "20px",
            borderRadius: "8px",
            width: "100%", // 이미지가 부모 요소의 너비에 맞게 조절되도록 추가
            maxWidth: "600px", // 이미지의 최대 너비 제한
          }}
        />
        <p>
          탐험과 수집 : 넓은 세계를 탐험하고 다양한 블록을수집 하고 자신만의
          건축물을 만들 수 있습니다.
        </p>
        <img
          src={craftGif}
          alt="게임 플레이 스크린샷"
          style={{
            marginTop: "20px",
            borderRadius: "8px",
            width: "100%", // 이미지가 부모 요소의 너비에 맞게 조절되도록 추가
            maxWidth: "600px", // 이미지의 최대 너비 제한
          }}
        />
        <p>
          플레이어는 수집한 블록과 자원을 조합하여 새로운 도구, 무기를 만들고
          성장하는 세계
        </p>
        <img
          src={blockGif}
          alt="게임 플레이 스크린샷"
          style={{
            marginTop: "20px",
            borderRadius: "8px",
            width: "100%", // 이미지가 부모 요소의 너비에 맞게 조절되도록 추가
            maxWidth: "600px", // 이미지의 최대 너비 제한
          }}
        />
        <p>
          전략적 건축 : 밤에는 몬스터들이 플레이어를 쫓아 위험에 노출 되는데 ,
          이를 극복하기 위해 블록을 전략적으로 설치하여 구조물을 건설해야합니다.
        </p>
        <img
          src={battleGif}
          alt="게임 플레이 스크린샷"
          style={{
            marginTop: "20px",
            borderRadius: "8px",
            width: "100%", // 이미지가 부모 요소의 너비에 맞게 조절되도록 추가
            maxWidth: "600px", // 이미지의 최대 너비 제한
          }}
        />
        <p>
          생존과 방어 : 플레이어는 제작한 무기를 활용하여 몬스터로 부터 자신을
          방어 해야 합니다.
        </p>
      </div>
    </main>
  );
}

export default IntroPage;
