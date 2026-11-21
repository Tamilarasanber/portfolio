import { motion } from "motion/react";

const SectionTitle = ({ id, kicker = "Section", title, subtitle }) => (
  <motion.header
    className="mb-12 text-center"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.7 }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
  >
    <p className="text-xs font-semibold tracking-[0.32em] text-indigo-600 uppercase">{kicker}</p>
    <h2 id={id} className="font-display mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
      {title}
    </h2>
    <motion.span
      className="mx-auto mt-4 block h-[3px] rounded-full bg-indigo-600"
      initial={{ width: 0 }}
      whileInView={{ width: 72 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    />
    {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">{subtitle}</p>}
  </motion.header>
);

export default SectionTitle;
