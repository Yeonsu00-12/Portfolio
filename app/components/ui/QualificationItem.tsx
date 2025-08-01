"use client";

import { motion } from "framer-motion";
import { Qualification } from "@/types";

interface QualificationItemProps {
  qualification: Qualification;
}

export default function QualificationItem({ qualification }: QualificationItemProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center space-x-4">
        <span className="text-3xl">{qualification.icon}</span>
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {qualification.name}
          </h3>
          <p className="text-gray-600">{qualification.organization}</p>
          <p className="text-gray-600">{qualification.acquisitionDate}</p>
        </div>
      </div>
    </motion.div>
  );
}
