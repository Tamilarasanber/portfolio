import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";

const highlights = [
  { value: "4+", label: "Years shipping products" },
  { value: "2", label: "Product companies" },
  { value: "End to end", label: "UI, APIs, and data" },
];

const roles = [
  {
    company: "Newage Software Solutions",
    period: "Current",
    text: "Developing customer-specific logistics applications for the NXT Logistics Platform — frontend interfaces, backend services, API integration, and database workflows.",
  },
  {
    company: "Xerago",
    period: "Previous",
    text: "Contributed to enterprise banking applications for Ujjivan Small Finance Bank and Citi Bank.",
  },
];

const ease = [0.22, 1, 0.36, 1];

const About = () => (
  <section id="about" className="scroll-mt-24">
    <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <SectionTitle
        kicker="About"
        title="A builder clients can rely on"
        subtitle="Software Engineer focused on responsive interfaces, clean integrations, and software that stays reliable after launch."
      />

      <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease }}
          className="rounded-3xl border border-indigo-100 bg-white p-7 shadow-sm md:p-9"
        >
          <p className="text-lg leading-relaxed text-gray-800">
            I’m Tamilarasan B, a Software Engineer with 4+ years of professional experience building responsive,
            scalable, and user-friendly web applications.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            My core work is React.js, JavaScript (ES6+), Redux, and Redux-Saga, with backend development in Java,
            Spring Boot, REST APIs, and PostgreSQL.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            I like turning real product problems into reusable components and dependable features — the kind of work
            that looks polished to users and stays maintainable for the team.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 * index, ease }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-indigo-100 bg-indigo-50/60 px-4 py-4"
              >
                <p className="font-display text-xl font-bold text-indigo-600">{item.value}</p>
                <p className="mt-1 text-xs leading-snug text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative space-y-4 pl-1">
          <div aria-hidden="true" className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-gradient-to-b from-indigo-400 to-transparent" />
          {roles.map((role, index) => (
            <motion.article
              key={role.company}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: 0.1 * index, ease }}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl border border-indigo-100 bg-white p-6 pl-12 shadow-sm"
            >
              <span className="absolute top-7 left-[0.72rem] h-3.5 w-3.5 rounded-full border-2 border-white bg-indigo-600" />
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-gray-900">{role.company}</h3>
                <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-indigo-700 uppercase">
                  {role.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{role.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
