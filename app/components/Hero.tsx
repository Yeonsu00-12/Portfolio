"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  ExternalLink,
  Award,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

export default function Hero() {
  // 핵심 키워드들
  const highlights = [
    { icon: TrendingUp, text: "42.4% 성능 개선", color: "text-green-600" },
    { icon: Award, text: "카카오테크 연속 수상", color: "text-yellow-600" },
    { icon: BookOpen, text: "TypeScript & AI 스터디", color: "text-blue-600" },
  ];

  return (
    <section className="py-16 px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        {/* 메인 프로필 섹션 */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-white"
          >
            <Image
              src="/image/yspark.png"
              alt="박연수 프로필 사진"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-black"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl text-gray-600 mb-6"
          >
            {personalInfo.title}
          </motion.p>

          {/* 핵심 성과 하이라이트 */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100"
              >
                <highlight.icon className={`w-4 h-4 ${highlight.color}`} />
                <span className="text-sm font-medium text-gray-700">
                  {highlight.text}
                </span>
              </motion.div>
            ))}
          </motion.div> */}

          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Mail className="w-5 h-5 text-indigo-500" />
              <span className="font-medium">{personalInfo.email}</span>
            </motion.a>

            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#3B2667] to-[#BC78EC] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* 자기소개 섹션 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              데이터를 아름다운 시각화로 변환하는 프론트엔드 개발자
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                안녕하세요! 사용자 경험을 최우선으로 생각하는{" "}
                <strong className="text-indigo-600">프론트엔드 개발자</strong>
                &nbsp;박연수입니다.
                <br />
                카카오테크 부트캠프에서 체계적인 개발 교육을 받으며 현대적인 웹
                개발의 기초를 다졌고, 이후 다양한 실무 프로젝트를 통해 실제
                서비스 개발 경험을 쌓아왔습니다.
                <br />
                <strong className="text-indigo-600">
                  현재 대용량 데이터 시각화 플랫폼
                </strong>
                을 개발하며, 복잡한 데이터를 직관적이고 아름다운 인터페이스로
                변환하는 일에 몰두하고 있습니다. 특히 성능 최적화와 사용자 경험
                개선에 대한 깊은 관심을 가지고 있으며, 단순히 기능을 구현하는
                것을 넘어서 사용자가 진정으로 만족할 수 있는 제품을 만들기 위해
                끊임없이 고민합니다.
              </motion.p>

              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="border-l-4 border-blue-500 pl-4 text-gray-700 italic"
              >
                “좋은 코드는 단순히 작동하는 코드가 아니라, 미래의 나와 동료
                개발자들이 이해하고 확장할 수 있는 코드입니다. 저는 항상
                깨끗하고 유지보수 가능한 코드를 작성하기 위해 노력합니다.”
              </motion.blockquote>

              {/* <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <strong className="text-purple-600">
                  카카오테크 부트캠프 수료생
                </strong>
                으로 해커톤과 파이널 프로젝트에서 연속 입상하며{" "}
                <strong className="text-green-600">
                  빠른 프로토타이핑과 성능 최적화 역량
                </strong>
                을 검증받았습니다. 특히 U&apos;STOCK 프로젝트에서 달성한{" "}
                <strong className="text-green-600">42.4% 성능 개선</strong>은
                사용자 경험에 대한 저의 관심을 보여줍니다.
              </motion.p> */}

              {/* <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                React, TypeScript, 데이터 시각화 라이브러리에 능숙하며, 현재{" "}
                <strong className="text-blue-600">
                  TypeScript 심화 스터디와 AI 기술 스터디
                </strong>
                를 통해 더 나은 개발자로 성장하고 있습니다.
              </motion.p> */}
            </div>

            {/* 전문 분야 태그들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-8 pt-6 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-4 text-center">
                관련 용어
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "GIS 데이터 시각화",
                  "React/Next.js",
                  "TypeScript",
                  "성능 최적화",
                  "D3.js/ECharts",
                  "사용자 경험 개선",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.05, duration: 0.3 }}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 현재 활동 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800">현재 학습 중</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="pl-2">이팩티브 TypeScript 스터디</span>
                  </div>
                  <a
                    className="pl-4 text-[#FB407F] underline"
                    target="_blank"
                    href="https://www.notion.so/TypeScript-Study-1984002dd19c80068548e0a6d20cc35c?source=copy_link"
                  >
                    회고록 보러가기!
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>데보션 오픈랩 AI 스터디</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800">주요 성과</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>웹 성능 42.4% 개선</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>카카오테크 연속 수상</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
