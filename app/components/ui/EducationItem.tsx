"use client";

import { motion } from "framer-motion";
import { Education } from "@/types";

interface EducationItemProps {
  education: Education;
}

export default function EducationItem({ education }: EducationItemProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center space-x-4">
        <span className="text-3xl">{education.icon}</span>
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {education.institution}
          </h3>
          <p className="text-gray-600">{education.period}</p>
        </div>
      </div>
    </motion.div>
  );
}
