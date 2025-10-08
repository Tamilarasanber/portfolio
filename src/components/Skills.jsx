import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

// Image imports
import ReactIcons from '../assets/icons/react.png';
import bootstrapIcons from '../assets/icons/bootstrap.png';
import css3Icons from '../assets/icons/css3.png';
import cursorIcons from '../assets/icons/cursor.png';
import gitIcons from '../assets/icons/git.png';
import githubIcons from '../assets/icons/github.png';
import html5Icons from '../assets/icons/html5.png';
import javascriptIcons from '../assets/icons/javascript.png';
import jqueryIcons from '../assets/icons/jquery.png';
import nodejsIcons from '../assets/icons/nodejs.png';
import reduxIcons from '../assets/icons/redux.png';
import tailwindIcons from '../assets/icons/tailwind.png';
import viteIcons from '../assets/icons/vite.png';
import vscodeIcons from '../assets/icons/vscode.png';

// Map each skill to its image
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
  Cursor: cursorIcons
};

// Skills organized by category
const skills = {
  "Front-end": [
    { name: "React" },
    { name: "Redux" },
    { name: "JavaScript (ES6+)" },
    { name: "jQuery" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "CSS3" },
    { name: "HTML5" }
  ],
  Backend: [{ name: "Node.js" }],
  Tools: [
    { name: "Vite" },
    { name: "GitHub" },
    { name: "Git" },
    { name: "VS Code" },
    { name: "Cursor" }
  ]
};

const tabs = ["All", "Front-end", "Backend", "Tools"];

const Skills = () => {
  const [active, setActive] = useState("All");

  // Merge all skills for "All" tab and remove duplicates
  const merged = [
    ...skills["Front-end"],
    ...skills.Backend,
    ...skills.Tools
  ].filter((v, i, a) => a.findIndex(t => t.name === v.name) === i);

  const skillsMap = {
    All: merged,
    ...skills
  };

  return (
    <section id="skills" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <SectionTitle 
          title="Skills" 
          subtitle="Core technologies used to ship reliable UI." 
        />

        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab}
              type="button"
              className={`px-5 py-2 rounded-full font-semibold transition-all border ${
                active === tab 
                  ? "bg-indigo-600 text-white border-indigo-600 shadow"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-50"
              }`}
              onClick={() => setActive(tab)}
              aria-current={active === tab ? "true" : undefined}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillsMap[active].map(skill => {
            const imgSrc = skillImages[skill.name];
            return (
              <li 
                key={skill.name} 
                className="flex flex-col items-center rounded-md border bg-white px-4 py-5 text-center shadow-sm hover:shadow-lg transition"
              >
                {imgSrc ? (
                  <img 
                    src={imgSrc} 
                    alt={skill.name} 
                    className="w-16 h-16 mb-3 object-contain" 
                  />
                ) : (
                  <span className="text-5xl mb-2">💡</span>
                )}
                <span className="font-semibold">{skill.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
