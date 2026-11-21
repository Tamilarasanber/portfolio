import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionTitle from "./SectionTitle";

import ReactIcons from "../assets/icons/react.png";
import bootstrapIcons from "../assets/icons/bootstrap.png";
import css3Icons from "../assets/icons/css3.png";
import cursorIcons from "../assets/icons/cursor.png";
import gitIcons from "../assets/icons/git.png";
import githubIcons from "../assets/icons/github.png";
import html5Icons from "../assets/icons/html5.png";
import javascriptIcons from "../assets/icons/javascript.png";
import jqueryIcons from "../assets/icons/jquery.png";
import nodejsIcons from "../assets/icons/nodejs.png";
import reduxIcons from "../assets/icons/redux.png";
import tailwindIcons from "../assets/icons/tailwind.png";
import viteIcons from "../assets/icons/vite.png";
import vscodeIcons from "../assets/icons/vscode.png";
import postgreIcons from "../assets/icons/postgre.png";
import springIcons from "../assets/icons/Spring.png";

const skillImages = {
  React: ReactIcons,
  Redux: reduxIcons,
  "JavaScript (ES6+)": javascriptIcons,
  jQuery: jqueryIcons,
  "Tailwind CSS": tailwindIcons,
  Bootstrap: bootstrapIcons,
  CSS3: css3Icons,
  HTML5: html5Icons,
  "Node.js": nodejsIcons,
  Vite: viteIcons,
  GitHub: githubIcons,
  Git: gitIcons,
  "VS Code": vscodeIcons,
  Cursor: cursorIcons,
  Postgres: postgreIcons,
  "Spring Boot": springIcons,
};

const skills = {
  "Front-end": [
    { name: "React" },
    { name: "Redux" },
    { name: "JavaScript (ES6+)" },
    { name: "jQuery" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "CSS3" },
    { name: "HTML5" },
  ],
  Backend: [{ name: "Node.js" }, { name: "Postgres" }, { name: "Spring Boot" }],
  Tools: [{ name: "Vite" }, { name: "GitHub" }, { name: "Git" }, { name: "VS Code" }, { name: "Cursor" }],
};

const tabs = ["All", "Front-end", "Backend", "Tools"];

const Skills = () => {
  const [active, setActive] = useState("All");

  const merged = [...skills["Front-end"], ...skills.Backend, ...skills.Tools].filter(
    (skill, index, list) => list.findIndex((item) => item.name === skill.name) === index
  );

  const skillsMap = {
    All: merged,
    ...skills,
  };

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionTitle
          kicker="Skills"
          title="Tools I ship with"
          subtitle="A practical stack for polished interfaces, solid APIs, and day-to-day delivery."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => {
            const selected = active === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                aria-current={selected ? "true" : undefined}
                className={`relative overflow-hidden rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                  selected ? "border-indigo-600 text-white" : "border-gray-200 bg-white text-gray-700 hover:border-indigo-200 hover:text-indigo-600"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="skill-tab"
                    className="absolute inset-0 rounded-full bg-indigo-600 shadow-lg shadow-indigo-200"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
          >
            {skillsMap[active].map((skill, index) => {
              const imgSrc = skillImages[skill.name];
              return (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.36) }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white transition-transform duration-300 group-hover:scale-105">
                    {imgSrc ? (
                      <img src={imgSrc} alt="" className="h-10 w-10 object-contain" />
                    ) : (
                      <span className="text-2xl">✦</span>
                    )}
                  </span>
                  <span className="mt-3 text-sm font-semibold text-gray-800">{skill.name}</span>
                </motion.li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
