import {
  PersonalInfo,
  Skill,
  Project,
  Award,
  Education,
  NavItem,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "박연수",
  title: "Frontend Developer",
  email: "elle_int@naver.com",
  phone: "010.6572.4924",
  github: "https://github.com/Yeonsu00-12",

  // ✨ v2 버전 자기소개 적용
  description: `데이터를 아름다운 시각화로 변환하는 프론트엔드 개발자입니다.

현재 진행 중인 KT bigsight 프로젝트에서 강원도 생활이동 데이터를 실시간으로 시각화하는 플랫폼을 개발하고 있으며, Next.js와 OpenSearch 연동으로 대용량 데이터 처리 성능을 최적화했습니다.

카카오테크 부트캠프 수료생으로 해커톤과 파이널 프로젝트에서 연속 입상하며 빠른 프로토타이핑과 성능 최적화 역량을 검증받았습니다. 특히 U'STOCK 프로젝트에서 달성한 42.4% 성능 개선은 사용자 경험에 대한 저의 관심을 보여줍니다.

React, TypeScript, 데이터 시각화 라이브러리에 능숙하며, 현재 TypeScript 심화 스터디와 AI 기술 스터디를 통해 더 나은 개발자로 성장하고 있습니다.`,
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    icon: "🎨",
    technologies: ["Next.js", "React", "TypeScript", "JavaScript"],
  },
  {
    category: "CSS & Styling",
    icon: "🎨",
    technologies: ["Tailwind CSS", "Sass", "Styled-components"],
  },
  {
    category: "상태 관리",
    icon: "⚡",
    technologies: ["Redux", "Zustand", "Recoil", "TanStack Query"],
  },
  {
    category: "데이터 시각화",
    icon: "📊",
    technologies: ["ECharts", "D3.js", "ApexCharts"],
  },
  {
    category: "백엔드 & 데이터베이스",
    icon: "🔧",
    technologies: ["FastAPI", "OpenSearch", "MySQL"],
  },
  {
    category: "배포 & CI/CD",
    icon: "🚀",
    technologies: ["Vercel", "Argo"],
  },
];

export const projects: Project[] = [
  {
    id: "asp-busan",
    title: "ASP 부산시 Big-데이터웨이브 상황판",
    period: "2025.07 ~ 현재 진행 중",
    status: "active",
    role: "프론트엔드 개발, API 연동(OpenSearch), 유지보수",
    description: "GIS 기반 생활이동/소비패턴 데이터 시각화 플랫폼",
    achievements: {
      title: "주요 성과",
      items: [
        "GIS 기반의 데이터 시각화 플랫폼 구축",
        "Next.js와 clickhouse를 통해 데이터 처리 효율성 극대화",
        "다크 모드 및 반응형 디자인 적용으로 사용자 접근성 강화",
      ],
    },
    techStack: [
      "Next.js",
      "Recoil",
      "TanStack Query",
      "D3.js",
      "Echarts",
      "Clickhouse",
      "FastAPI",
      "LLM",
      "Jenkins",
      "Framer Motion",
      "Tailwind CSS",
    ],
    links: [
      { label: "🔗 서비스 바로가기", url: "아직 배포 안됨" },
      {
        label: "🔗 프로젝트 Jira",
        url: "https://dsl-dev.atlassian.net/jira/software/projects/BSP/boards/1",
      },
    ],
    images: [
      "/image/dashboard.png",
      "/image/dashboard_v2.png",
      "/image/csm.png",
      "/image/gis.png",
      "/image/ai.png",
    ],
  },
  {
    id: "kt-bigsight",
    title: "KT bigsight 강원특별자치도 생활이동 상황판",
    period: "2025.05 ~ 현재 유지보수 진행 중",
    status: "maintenance",
    role: "GIS 지도 개발, 프론트엔드 개발, API 연동, AI 연동(LLM), 유지보수",
    description: "GIS 기반 실시간 생활이동 데이터 시각화 플랫폼",
    achievements: {
      title: "주요 성과",
      items: [
        "GIS 기반의 데이터 시각화 플랫폼 구축",
        "Next.js와 OpenSearch를 통해 데이터 처리 효율성 극대화",
        "다크 모드 및 반응형 디자인 적용으로 사용자 접근성 강화",
      ],
    },
    techStack: [
      "Next.js",
      "Recoil",
      "TanStack Query",
      "ECharts",
      "OpenSearch",
      "Argo",
    ],
    links: [
      {
        label: "🔗 서비스 바로가기",
        url: "https://plip.bigsight.kt.com/asp-gw/dashboard",
      },
    ],
    images: [
      "/image/gw_dashboard.png",
      "/image/gw_dashboard_dark.png",
      "/image/gw_analysis.png",
      "/image/gw_gis.png",
    ],
  },
  {
    id: "gyeonggi-dashboard",
    title: "경기도 생활이동소비 분석 상황판",
    period: "2025.04 ~ 현재 유지보수 진행 중",
    status: "maintenance",
    role: "전체 프론트엔드 개발(반응형), FastAPI 연동, 데이터 시각화 구현, 유지보수",
    description: "경기도 생활이동소비 패턴 분석 및 시각화 대시보드",
    achievements: {
      title: "주요 성과",
      items: [
        "차트 데이터 개별/전체 다운로드 & 리포트 기능 구현",
        "차트 시각화 기능 구현",
        "유지보수 효율성 및 사용자 접근성 향상",
      ],
    },
    techStack: [
      "Next.js",
      "Recoil",
      "TanStack Query",
      "ECharts",
      "FastAPI",
      "Jenkins",
      "Tailwind CSS",
    ],
    links: [{ label: "🔗 서비스 바로가기", url: "https://www.webasp.kr" }],
    images: [
      "/image/gg_dashboard.png",
      "/image/gg_panel.png",
      "/image/gg_csm.png",
    ],
  },
  {
    id: "gyeonggi-status",
    title: "경기도 생활이동소비 통계 서비스(관리자 페이지)",
    period: "2025.04 ~ 현재 유지보수 진행 중",
    status: "maintenance",
    role: "전체 프론트엔드 개발, FastAPI 연동, 유지보수, 데이터 시각화 구현, 사용자에 따른 로그인 기능 구현",
    description: "경기도 생활이동소비 통계 서비스(관리자 페이지)",
    achievements: {
      title: "주요 성과",
      items: [
        "사용자에 따른 로그인 기능 구현",
        "관리자 페이지 데이터 시각화 구현",
        "유지보수 효율성 및 사용자 접근성 향상",
      ],
    },
    techStack: [
      "Next.js",
      "Recoil",
      "TanStack Query",
      "ECharts",
      "FastAPI",
      "Jenkins",
      "Tailwind CSS",
    ],
    links: [{ label: "🔗 서비스 바로가기", url: "https://stats.webasp.kr/" }],
    images: [
      "/image/gg_login.png",
      "/image/gg_status.png",
      "/image/gg_status_v2.png",
      "/image/gg_status_v3.png",
    ],
  },
  {
    id: "mugpy",
    title: "MUGPY - AI기반 유기견 매칭 서비스",
    period: "1차: 2024.08 (3일 MVP) | 2차: 2024.12 ~ 개발 중",
    status: "active",
    role: "디자인 / 프론트엔드",
    description:
      "카카오테크 부트캠프 해커톤 프로젝트로, 사용자의 사진과 선택한 성향을 AI로 분석하여 보호소의 유기견과 매칭해주는 서비스",
    achievements: {
      title: "주요 업무",
      items: [
        "비디오를 활용해 유기견과의 친밀감을 높이는 사용자 경험 제공",
        "카카오 지도 API를 활용해 유기견 보호센터 위치 시각화",
        "카카오/네이버 OAuth 로그인 기능 구현",
        "WebSocket을 활용해 실시간 채팅 기능 구현",
        "api 연동 및 데이터 처리",
        "스타일 재사용 패턴을 적용해 다양한 버튼 스타일을 하나의 컴포넌트로 구현",
      ],
    },
    techStack: [
      "React",
      "SCSS",
      "Axios",
      "Kakao Maps API",
      "Kakao OAuth",
      "Naver OAuth",
      "WebSocket",
      "Rest API",
    ],
    links: [
      { label: "🔗 GitHub (1차)", url: "https://github.com/KTB-sfz/MUNGPY_FE" },
      {
        label: "🔗 GitHub (2차)",
        url: "https://github.com/Jaedong2Fanclub/mungpy_FE",
      },
    ],
    images: [
      "/image/mungpy_v1.png",
      "/image/mungpy_test_1.png",
      "/image/mungpy_test_2.png",
      "/image/mungpy_test_3.png",
      "/image/mungpy_test_4.png",
      "/image/mungpy_test_5.png",
      "/image/mungpy_test_6.png",
      "/image/mungmy_main_oauth.png",
      "/image/mungpy_main_login.png",
      "/image/mungpy_main_6.png",
      "/image/mungpy_main_1.png",
      "/image/mungpy_main_2.png",
      "/image/mungpy_main_3.png",
      "/image/mungpy_main_4.png",
      "/image/mungpy_main_detail.png",
      "/image/mungpy_main_chat.png",
      "/image/mungpy_main_mypage.png",
    ],
  },
  {
    id: "ustock",
    title: "U'STOCK - 청년 대상 주식 포트폴리오 서비스",
    period: "2024.07.22 ~ 2024.10.11",
    status: "completed",
    role: "디자인 / 프론트엔드",
    description:
      "카카오테크 부트캠프 파이널 프로젝트. 주식에 익숙하지 않은 청년층이 주식을 쉽게 접할 수 있도록 재미있게 구성한 주식 포트폴리오 서비스",
    achievements: {
      title: "주요 성과",
      items: [
        "웹 성능 최적화를 통한 로딩 속도 42.4% 개선",
        "ApexCharts를 활용한 인터랙티브 Candle 차트 구현",
        "UI/UX 개선을 위한 화면 설계서 작성 및 웹 페이지 디자인",
      ],
    },
    techStack: [
      "React",
      "Styled-components",
      "ApexCharts",
      "Zustand",
      "TanStack Query",
      "Axios",
      "Framer Motion",
      "Lottie",
    ],
    links: [
      {
        label: "🔗 GitHub",
        url: "https://github.com/100-hours-a-week/5-team-HRTH-ustock-fe",
      },
      {
        label: "🔗 프로젝트 자료",
        url: "/docs/ustock.pdf",
      },
      {
        label: "🔗 서비스 구경(1차 배포)하기",
        url: "https://disquiet.io/product/ustock",
      },
      {
        label: "🔗 서비스 구경(2차 배포)하기",
        url: "https://disquiet.io/product/ustock-1728461786516",
      },
    ],
    images: [
      "/image/ustock_1.png",
      "/image/ustock_2.png",
      "/image/ustock_3.png",
      "/image/ustock_4.png",
      "/video/ustock_video.mp4",
    ],
  },
];

export const awards: Award[] = [
  {
    id: "ustock-award",
    title: "🏆 카카오 대표이사상 - 카카오테크 부트캠프 프로젝트 2위",
    project: "U'STOCK (유스톡)",
    description:
      "청년들이 최소한 뉴스라는 정보에 기반해서 투자할 수 있도록 돕는 서비스",
    period: "개발 기간: 2024.07.22 ~ 2024.10.11",
    icon: "🏆",
  },
  {
    id: "mugpy-award",
    title: "🏆 카카오 대표이사상 - 카카오테크 부트캠프 해커톤 3위 입상",
    project: "MUGPY",
    description:
      "제주도 유기견 매칭 서비스로, 사용자의 사진과 선택한 성향을 AI로 분석하여 보호소에 있는 유기견 중 사용자와 가장 닮은 유기견을 매칭해주는 서비스",
    period:
      "1차 개발: 2024.08.05 ~ 2024.08.07 | 2차 개발 ~ 배포: 2024.12 ~ 개발중",
    icon: "🏆",
  },
  {
    id: "hustle-demo",
    title: "📍 UMC 동아리 프로젝트 - 데모데이 참가",
    project: "HUSTLE",
    description: "대학교 별 농구 동아리 교류 및 대회 정보 제공하는 웹서비스",
    period: "",
    icon: "📍",
  },
  {
    id: "zipcook-project",
    title: "📍 학부 종합 설계 프로젝트",
    project: "ZipCook",
    description: "개인형 맞춤 레시피 추천 챗봇 & 요리커뮤니티 서비스",
    period: "개발 기간: 2023.03 ~ 2023.06",
    icon: "📍",
  },
];

export const education: Education[] = [
  {
    id: "university",
    institution: "가톨릭대학교 컴퓨터정보공학부",
    period: "2019.03 ~ 2025.08 졸업 예정",
    icon: "🎓",
  },
  {
    id: "kakao-bootcamp",
    institution: "카카오테크 부트캠프",
    period: "2024.04 ~ 2024.10",
    icon: "💻",
  },
  {
    id: "umc",
    institution: "CUK-UMC 4th 웹 개발자",
    period: "2023.03 ~ 2023.09",
    icon: "🌐",
  },
];

export const navItems: NavItem[] = [
  { id: "home", label: "홈", icon: "🏠" },
  { id: "resume", label: "이력서", icon: "📄" },
  { id: "portfolio", label: "포트폴리오", icon: "💼" },
  { id: "awards", label: "수상경력", icon: "🏆" },
  { id: "education", label: "학력", icon: "🎓" },
];
