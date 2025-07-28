import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "박연수 | Frontend Developer",
  description: "GIS 데이터 시각화와 사용자 경험에 특화된 프론트엔드 개발자",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "GIS",
    "Data Visualization",
  ],
  authors: [{ name: "박연수" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
