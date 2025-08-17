# 1. 목표

- React + TypeScript로 깔끔한 포트폴리오/블로그 제작
- Markdown(.md) 파일로 글 작성
- Todo 페이지로 간단한 기능 페이지 구현 (LocalStorage 저장 → 추후 DB 연동)
- Vercel에 자동 배포(깃허브 연결)

---

# 2. 기술 스택

- React + TypeScript
- CSS / TailwindCSS (선택)
- react-router-dom
- Context API (Theme, 로그인 등)

※ CRA 로 먼저 코딩 후 추후 Vite 로 수정 ※

---

# 3. 프로젝트 구조 (아직 만드는 중, 추후 변동될 수 있음)

- 예상 구조

```text
  /src
  ├── /components // 공통으로 재사용할 컴포넌트
  │ ├── Header.tsx
  │ └── Footer.tsx
  │
  ├── /sections // 각 페이지별 섹션 컴포넌트
  │ ├── MainIntro.tsx
  │ └── PortfolioGrid.tsx
  │
  ├── /pages // 페이지 단위 컴포넌트
  │ ├── MainPage.tsx
  │ ├── PortfolioPage.tsx
  │ ├── BlogPage.tsx
  │ └── TodoPage.tsx
  │
  ├── /todos // Todo 관련 컴포넌트
  │ ├── TodoWrite.tsx
  │ ├── TodoList.tsx
  │ ├── TodoItem.tsx
  │ ├── todoTypes.ts // Todo 컴포넌트 모아서 export
  │ └── TodoSection.tsx
  │
  ├── /contexts // Context 관리 (테마, 로그인 등)
  │ └── ThemeContext.tsx
  │
  ├── App.css
  ├── App.tsx
  ├── index.tsx
  └── index.css
```

---

# 4. 주요 기능

1. **메인 페이지**

   - 대표 작업물 카드
   - 프로젝트 요약
   - 소개 섹션

2. **Portfolio 페이지**

   - 작업물 상세 목록
   - GitHub 링크

3. **Blog 페이지**

   - 미니 프로젝트 / 작업 후기

4. **Todo 페이지**

   - TodoWrite: 글 작성
   - TodoList: 작성한 목록 표시
   - TodoItem: 아이템 단위 관리 (완료/수정/삭제)

5. **Contact 페이지**
   - GitHub, 이메일, SNS 링크

---
