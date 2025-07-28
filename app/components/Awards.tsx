"use client";

import { motion } from "framer-motion";
import { awards } from "@/data/portfolio";
import AwardItem from "./ui/AwardItem";

export default function Awards() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          수상경력 & 프로젝트 성과
        </motion.h2>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <AwardItem award={award} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
