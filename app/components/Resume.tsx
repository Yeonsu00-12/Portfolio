"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SkillCategory from "./ui/SkillCategory";

export default function Resume() {
  return (
    <>
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-left mb-5 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-black"
          >
            &quot;사용자 경험과 기술의 교차점에서 찾은 나의 길&quot;
          </motion.h3>
          <hr className="border border-[#999999]"/>
          <motion.p className="p-4">
            프론트엔드 개발을 선택한 계기는 대학 시절 웹 디자인 수업에서
            사용자가 직접 체감할 수 있는 인터페이스를 구현하는 과정에 매력을
            느꼈기 때문입니다. 특히 복잡한 데이터를 직관적으로 시각화하고,
            사용자의 피드백을 바탕으로 UX를 개선해나가는 과정에서 큰 보람을
            얻었습니다. 실제로 프로젝트에서{" "}
            <strong className="text-indigo-600">로딩 시간을 30% 단축</strong>
            하고 사용자 만족도를 향상시킨 경험을 통해 프론트엔드 개발의 임팩트를
            실감했습니다. 빠르게 변화하는 기술 트렌드 속에서 React, Vue 등
            새로운 프레임워크를 학습하고 적용하며 지속적으로 성장하는 것에
            흥미를 느끼고 있습니다. 앞으로도 사용자 중심의 사고로 비즈니스
            가치를 창출하는 프론트엔드 개발자로 발전하고 싶습니다.
          </motion.p>
        </div>
      </section>
      <section className="pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-left bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-black"
          >
            기술 스택 & 역량
          </motion.h2>
          <motion.div className="flex flex-row gap-2 text-[#999999]">
            숙련도 :{" "}
            <div className="flex flex-row items-center gap-1">
              <div className="w-3 h-3 bg-[#1E2AD2]"></div> 💎
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className="w-3 h-3 bg-[#FFA6B7]"></div> 👍🏻
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className="w-3 h-3 bg-[#FEC163]"></div> 🔍
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <SkillCategory skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
