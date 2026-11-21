import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import todoImg from "../assets/todolist-thumb.png";
import eCommerceImg from "../assets/e-commerce-thumb.png";
import tamilprompt from "../assets/tamilpromt.png";

const projects = [
  {
    title: "E-commerce UI",
    type: ["React.js", "Node.js"],
    desc: "A responsive storefront with product filters, cart, and checkout — built with modern UI patterns and accessible interactions.",
    img: eCommerceImg,
    href: "https://e-commerce-sigma-plum-93.vercel.app/",
  },
  {
    title: "AI Prompt",
    type: ["React.js", "Node.js"],
    desc: "A smart workspace powered by AI prompts for organizing tasks, generating ideas, and staying productive on any screen.",
    img: tamilprompt,
    href: "https://tamilprompt.vercel.app/",
  },
  {
    title: "Todo List",
    type: ["React.js"],
    desc: "A focused task manager for adding and clearing work quickly, with a clean layout and a smooth everyday flow.",
    img: todoImg,
    href: "https://todolist-delta-five-91.vercel.app/",
  },
];

const ease = [0.22, 1, 0.36, 1];

const Projects = () => (
  <section id="projects" className="scroll-mt-24">
    <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <SectionTitle
        kicker="Selected work"
        title="Projects with a live feel"
        subtitle="Interfaces shaped around clarity, motion, and the details clients notice first."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease }}
            whileHover={{ y: -10 }}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
          >
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={`${project.title} preview`}
                  className="aspect-[16/10] w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.45, ease }}
                />
                <span className="absolute top-4 left-4 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
                  Live
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900">{project.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.type.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{project.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                  View project
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
