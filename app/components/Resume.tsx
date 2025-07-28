"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SkillCategory from "./ui/SkillCategory";

export default function Resume() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          기술 스택 & 역량
        </motion.h2>

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
  );
}
