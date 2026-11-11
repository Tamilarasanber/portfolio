import SectionTitle from './SectionTitle'

const About = () => (
  <section id="about" className="bg-white">
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <SectionTitle title="About" subtitle="Software Engineer | React.js Developer | Full-Stack Development | Java | Spring Boot | PostgreSQL" />
      <div className="grid gap-8 text-gray-700">
        <p>
          I'm Tamilarasan B, a Software Engineer with 4+ years of professional experience building responsive, scalable, and user-friendly web applications.
        </p>
        <p>
          My core expertise includes React.js, JavaScript (ES6+), Redux, and Redux-Saga, along with backend development using Java, Spring Boot, REST APIs, and PostgreSQL.
        </p>
        <p>Currently, I'm working at Newage Software Solutions, developing customer-specific logistics applications for the NXT Logistics Platform. My responsibilities include developing frontend interfaces, implementing backend services, integrating APIs, and managing database workflows.</p>
        <p>Previously, I worked at Xerago, contributing to enterprise banking applications for Ujjivan Small Finance Bank and Citi Bank.</p>
        <p>I enjoy solving real-world technical challenges, building reusable components, and delivering reliable software solutions.</p>
      </div>
    </div>
  </section>
);
export default About