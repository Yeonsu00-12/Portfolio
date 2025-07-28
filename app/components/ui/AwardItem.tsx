"use client";

import { motion } from "framer-motion";
import { Award } from "@/types";

interface AwardItemProps {
  award: Award;
}

export default function AwardItem({ award }: AwardItemProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-yellow-400 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <span className="text-3xl">{award.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {award.title}
          </h3>
          <p className="text-lg font-semibold text-indigo-600 mb-2">
            {award.project}
          </p>
          <p className="text-gray-700 mb-3 leading-relaxed">
            {award.description}
          </p>
          {award.period && (
            <p className="text-sm text-gray-500">{award.period}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
