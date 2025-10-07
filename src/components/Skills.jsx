import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaCode, FaGithub, FaPalette   
} from "react-icons/fa";


// Map each skill to its icon component
const icons = {
  React: FaReact,
  "Node.js": FaNodeJs,
  Git: FaGitAlt,
  "VS Code": FaCode,
  "JavaScript (ES6+)": FaJs,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  GitHub: FaGithub,
  "Tailwind CSS": FaPalette
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
  Backend: [
    { name: "Node.js" }
  ],
  Tools: [
    { name: "Vite" },
    { name: "GitHub" },
    { name: "Git" },
    { name: "VS Code" },
    { name: "Cursor"}
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
            const Icon = icons[skill.name]; // get the icon component
            return (
              <li 
                key={skill.name} 
                className="flex flex-col items-center rounded-md border bg-white px-4 py-5 text-center shadow-sm hover:shadow-lg transition"
              >
                {Icon ? <Icon className="text-5xl mb-2 text-indigo-600" /> : <span className="text-5xl mb-2">💡</span>}
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
