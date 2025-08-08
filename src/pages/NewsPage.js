import React from "react";
import "../App.css";

function NewsPage() {
  const contactEmail = "contact@terracraft.dev";

  return (
    <main className="content-section">
      <h1 className="page-title">소식</h1>
      <div className="news-content">
        <p>TERRACRAFT의 최신 소식 및 업데이트는 현재 준비 중입니다.</p>
        <p>
          프로젝트에 대해 궁금한 점이나 문의사항이 있으시면 언제든지 아래
          이메일로 연락주세요.
        </p>
        <a href={`mailto:${contactEmail}`} className="email-link">
          {contactEmail}
        </a>
      </div>
    </main>
  );
}

export default NewsPage;
