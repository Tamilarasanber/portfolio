import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import myprofileimg from "../assets/MyProfile.jpg";
import Resume from "../assets/Tamilarasan_Resume.pdf";

const roles = ["React interfaces", "Spring Boot APIs", "scalable products"];
const longestRole = roles.reduce((longest, role) => (role.length > longest.length ? role : longest));

const marquee = [
  "React.js",
  "Redux",
  "JavaScript",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "REST APIs",
  "Tailwind CSS",
  "Node.js",
];

const socials = [
  { href: "https://github.com/Tamilarasanber", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/in/tamilarasan-ber/", label: "LinkedIn", icon: FaLinkedin },
  { href: Resume, label: "Resume", icon: FaFileAlt },
];

const ease = [0.22, 1, 0.36, 1];

const Hero = () => {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section id="home" className="relative">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-4 pt-28 pb-16 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:pt-32">
        <motion.div
          className="min-w-0"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
          }}
        >
          {/* <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-medium tracking-wide text-gray-600 shadow-sm"
          > */}
            {/* <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities · Chennai
          </motion.p>  */}

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
            className="font-hero mt-6 text-4xl leading-[1.08] font-medium tracking-tight text-balance text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Hi, I’m Tamilarasan.
            <span className="font-hero mt-3 block text-[0.72em] font-medium text-gray-800 italic">I build</span>
            <span className="font-hero relative mt-1 block overflow-hidden text-[0.78em] leading-none font-medium not-italic">
              <span className="invisible block">{longestRole}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={reduce ? false : { y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={reduce ? undefined : { y: "-120%", opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="absolute inset-x-0 top-0 block text-indigo-600"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-700 md:text-lg"
          >
            Software Engineer with 4+ years shipping modern, responsive, and scalable web applications — React and Redux
            on the front, Java and Spring Boot on the back.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:border-indigo-300"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
            className="mt-8 flex items-center gap-3"
          >
            {socials.map(({ href, label, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-600"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative mx-auto flex w-full max-w-sm flex-col items-center">
          <motion.div
            aria-hidden="true"
            className="absolute -top-6 right-6 h-20 w-20 rounded-full bg-purple-200/80 blur-2xl"
            animate={reduce ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-4 left-4 h-24 w-24 rounded-full bg-indigo-200/90 blur-2xl"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[220px] rounded-md bg-white p-2 shadow-[0_24px_50px_-24px_rgba(79,70,229,0.55)] ring-1 ring-indigo-100 sm:w-[240px]"
            >
              <div
                role="img"
                aria-label="Tamilarasan"
                className="aspect-[35/45] w-full bg-indigo-50 bg-no-repeat"
                style={{
                  backgroundImage: `url(${myprofileimg})`,
                  backgroundSize: "auto 300%",
                  backgroundPosition: "50% 8%",
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.55, ease }}
            className="mt-5 flex gap-3"
          >
            <div className="rounded-2xl border border-indigo-100 bg-white px-4 py-3 text-center shadow-sm">
              <p className="font-display text-2xl font-bold text-indigo-600">4+</p>
              <p className="text-xs text-gray-500">Years of experience</p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-white px-4 py-3 text-center shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Full-stack</p>
              <p className="text-xs text-gray-500">React · Java · Spring</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="overflow-hidden border-y border-indigo-100 bg-white/70 py-4">
        <motion.div
          className="flex w-max gap-12 pr-12"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...marquee, ...marquee].map((item, index) => (
            <span key={`${item}-${index}`} className="text-sm font-medium tracking-[0.22em] text-gray-500 uppercase">
              {item}
              <span className="ml-12 text-indigo-500">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
