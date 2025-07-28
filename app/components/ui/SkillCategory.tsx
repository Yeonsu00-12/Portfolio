"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";

interface SkillCategoryProps {
  skill: Skill;
}

export default function SkillCategory({ skill }: SkillCategoryProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-2xl">{skill.icon}</span>
        <h3 className="text-xl font-semibold text-indigo-600">
          {skill.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skill.technologies.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
