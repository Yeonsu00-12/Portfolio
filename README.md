# 박연수 포트폴리오

Next.js + TypeScript로 구축된 모던한 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

## 🗂️ 프로젝트 구조

```
portfolio/
├── app/
│   ├── components/          # React 컴포넌트
│   │   ├── ui/             # 재사용 가능한 UI 컴포넌트
│   │   ├── Navigation.tsx   # 네비게이션 컴포넌트
│   │   ├── Hero.tsx        # 히어로 섹션
│   │   └── ...
│   ├── globals.css         # 전역 스타일
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── data/
│   └── portfolio.ts        # 포트폴리오 데이터
├── types/
│   └── index.ts           # TypeScript 타입 정의
├── hooks/
│   └── useActiveSection.ts # 커스텀 훅
└── utils/
    └── constants.ts       # 상수 정의
```

## ✨ 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **다크/라이트 모드**: 사용자 선호도에 따른 테마 변경
- **부드러운 애니메이션**: Framer Motion을 활용한 인터랙티브 효과
- **SEO 최적화**: 메타데이터 및 구조화된 데이터
- **타입 안정성**: TypeScript로 안전한 코드 작성
- **모듈화된 구조**: 재사용 가능한 컴포넌트 기반 아키텍처

## 🎨 커스터마이징

### 데이터 수정
`data/portfolio.ts` 파일에서 개인 정보, 프로젝트, 스킬 등을 수정할 수 있습니다.

### 스타일 변경
`tailwind.config.js`에서 색상, 애니메이션 등을 커스터마이징할 수 있습니다.

### 새로운 섹션 추가
1. `types/index.ts`에 타입 정의
2. `data/portfolio.ts`에 데이터 추가
3. `app/components/`에 컴포넌트 생성
4. `app/page.tsx`에 라우팅 추가

## 📱 배포

### Vercel 배포
```bash
npm install -g vercel
vercel
```

### 기타 플랫폼
- Netlify
- GitHub Pages
- AWS Amplify

## 🛠️ 개발 도구

- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅
- **Husky**: Git hooks 관리
- **TypeScript**: 정적 타입 검사

## 📄 라이센스

MIT License - 자유롭게 사용하세요!

---

Made with ❤️ by 박연수