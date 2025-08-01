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

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
        Hi, I'm Emmanuel, a Computer Science student at the University of British Columbia, where I'm also pursuing a minor in Business Management. With a strong academic foundation, I’m passionate about building software, exploring the potential of AI, and creating accessible tech education for underrepresented communities.

My journey in tech has taken me from training large language models at Outlier AI to supporting students as a Teaching Assistant at UBC, where I help break down complex computing concepts. I also serve as Vice President of Finance for the Black Student Association, where I manage budgets, secure funding, and support initiatives that uplift the student community.

Outside of academics, I run ECODES, a freelance web development business where I build websites and design coding tutorials for learners of all backgrounds. I love combining creativity with technology and am committed to using my skills to make tech more inclusive, practical, and human-centered. Recently, I launched an AI and n8n automation business focused on helping individuals and small businesses streamline workflows and save time using no-code and low-code solutions. I love combining automation with creativity to build systems that work smarter, not harder.


        </p>
      </motion.div>
    </div>
  );
}
