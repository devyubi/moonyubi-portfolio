# 1. 목표

- React + TypeScript로 깔끔한 포트폴리오/블로그 제작
- Markdown(.md) 파일로 글 작성
- Todo 페이지로 간단한 기능 페이지 구현 (LocalStorage 저장 → 추후 DB 연동)
- Vercel에 자동 배포(깃허브 연결)

# 2. 기술 스택

- 번들러/개발서버: CRA(create-react-app) → 나중에 Vite로 전환 가능
- 프레임워크: React 18 + TypeScript
- 라우팅: react-router-dom
- 스타일: Tailwind CSS
- 마크다운 렌더링: react-markdown + remark-gfm, frontmatter 파싱 gray-matter
- 유틸: date-fns (날짜 포맷)

※ CRA 로 먼저 코딩 후 추후 Vite 로 수정 ※
