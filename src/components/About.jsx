import SectionTitle from './SectionTitle'

const About = () => (
  <section id="about" className="bg-white">
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <SectionTitle title="About" subtitle="Associate Developer | Web Development with React & Tailwind CSS" />
      <div className="grid md:grid-cols-2 gap-8 text-gray-700">
        <p>
          I’m Tamilarasan, an Associate Developer specializing in building modern, scalable, and user-friendly web applications. With strong skills in React.js, JavaScript, and Tailwind CSS, I focus on creating responsive interfaces and reusable components that bring designs to life. I enjoy turning complex problems into elegant solutions while maintaining clean, maintainable code.
        </p>
        <p>
          Passionate about continuous learning, I stay up to date with the latest web technologies to improve performance and user experience. Beyond coding, I enjoy exploring new tools, collaborating on innovative projects, and contributing ideas that help businesses deliver better digital experiences.
        </p>
      </div>
    </div>
  </section>
);
export default About