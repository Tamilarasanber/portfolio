import SectionTitle from "./SectionTitle";
import todoImg from "../assets/todolist-thumb.png";
import eCommerceImg from "../assets/e-commerce-thumb.png";
import tamilprompt from "../assets/tamilpromt.png";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce UI",
      type: ["React.js", "Node.js"],
      desc: "Responsive React-based storefront with product filters, cart, and checkout flow — built using modern UI patterns and accessibility standards...",
      img: eCommerceImg,
      href: "https://e-commerce-sigma-plum-93.vercel.app/",
    },
    {
      title: "AI Prompt",
      type: ["React.js", "Node.js"],
      desc: "Smart task manager powered by AI prompts — helps organize tasks, generate ideas, and boost productivity with a clean responsive interface...",
      img: tamilprompt,
      href: "https://tamilprompt.vercel.app/",
    },
    {
      title: "Todo List",
      type: ["React.js"],
      desc: "A responsive task management app built with React.js to add and delete tasks efficiently. Designed with a clean UI and smooth user experience...",
      img: todoImg,
      href: "https://todolist-delta-five-91.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <SectionTitle
          title="Projects"
          subtitle="Selected work focusing on UX, performance, and code quality."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border overflow-hidden bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition shadow-lg"
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={p.img}
                  alt={`${p.title} preview`}
                  className="w-full object-cover object-center"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>

                  {p.type && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {p.type.map((t) => (
                        <span
                          key={t}
                          className="border text-xs px-2 py-1 rounded text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-2 text-gray-600">{p.desc}</p>

                  <span className="mt-3 inline-block text-indigo-600 group-hover:underline">
                    View project →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
