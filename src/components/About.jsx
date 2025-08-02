import { motion } from 'framer-motion';
import React from 'react';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <ul className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10 list-disc list-inside space-y-3">
          <li>👋 Hi, I’m <strong>Emmanuel</strong> – a Computer Science student at the <strong>University of British Columbia</strong>, also pursuing a <strong>minor in Business Management</strong>.</li>
          <li>🧠 Passionate about <strong>Software Development</strong>, <strong>Financial Technology</strong>, and building <strong>accessible tech education</strong> for underrepresented communities.</li>
          <li>💻 Experience includes:
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Training large language models at <strong>Outlier AI</strong></li>
              <li>Teaching Assistant at UBC, simplifying computing concepts</li>
              <li>Vice President of Finance for UBC’s Black Student Association – managing budgets, securing funding, and supporting student initiatives</li>
            </ul>
          </li>
          <li>🌐 Founder of <strong>ECODES</strong>, a freelance web dev business where I:
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Build websites</li>
              <li>Create beginner-friendly coding tutorials</li>
            </ul>
          </li>
          <li>⚙️ Launched an <strong>AI & automation business</strong> using <code>n8n</code> and no-code/low-code tools to:
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Help individuals and small businesses streamline workflows</li>
              <li>Build smart, efficient systems that save time</li>
            </ul>
          </li>
          <li>🎯 I combine <strong>creativity and technology</strong> to build solutions that are inclusive, practical, and human-centered.</li>
        </ul>
      </motion.div>
    </div>
  );
}
