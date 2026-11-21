import { motion } from "motion/react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const channels = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "tamilarasanber@gmail.com",
    href: "mailto:tamilarasanber@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+91 6382282535",
    href: "tel:+916382282535",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Chennai, India",
  },
];

const ease = [0.22, 1, 0.36, 1];

const Contact = () => (
  <section id="contact" className="scroll-mt-24">
    <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <SectionTitle
        kicker="Contact"
        title="Let’s build something clients remember"
        subtitle="Have a product, a redesign, or a role in mind? I’m open to the next conversation."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {channels.map((channel, index) => {
          const Icon = channel.icon;
          const body = (
            <>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30">
                <Icon className="h-5 w-5" />
              </span>
              <span className="mt-5 block text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                {channel.label}
              </span>
              <span className="mt-2 block text-base font-medium break-all text-gray-900">{channel.value}</span>
            </>
          );

          const className =
            "block rounded-3xl border border-indigo-100 bg-white p-6 text-left shadow-sm transition-colors hover:border-indigo-300";

          return (
            <motion.div
              key={channel.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
              whileHover={{ y: -6 }}
            >
              {channel.href ? (
                <a href={channel.href} className={className}>
                  {body}
                </a>
              ) : (
                <div className={className}>{body}</div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.15, ease }}
        className="mt-10 flex justify-center"
      >
        <motion.a
          href="mailto:tamilarasanber@gmail.com"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700"
        >
          Start a conversation
        </motion.a>
      </motion.div>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Tamilarasan — Built with React & Tailwind
      </footer>
    </div>
  </section>
);

export default Contact;
