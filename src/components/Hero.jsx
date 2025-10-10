import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'; // react-icons
import myprofileimg from '../assets/MyProfile.jpg';
import Resume from '../assets/Tamilarasan_Resume.pdf';

const Hero = () => (
  <section id="home" className="relative">
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-28 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-sm uppercase tracking-widest text-indigo-600">Portfolio</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
          Hi, <span className="text-indigo-600">I’m Tamilarasan</span> Associate Developer
        </h1>
        <p className="mt-4 text-gray-700">
          I build modern, responsive, and scalable web applications with React.js, Node.js, Tailwind CSS, and JavaScript. Passionate about creating clean UI/UX and bringing ideas to life through code.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#projects"
            className="px-5 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-md border border-gray-300 hover:border-gray-400"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-square rounded-2xl bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 p-1">
          <div className="h-full w-full rounded-2xl flex items-center justify-center overflow-hidden">
            <img src={myprofileimg} alt="myprofile" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Social + Resume icons below the image */}
        <div className="mt-5 flex items-center gap-5 justify-center">
          <a
            href="https://github.com/Tamilarasanber"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
            title="GitHub"
          >
            <FaGithub className="h-7 w-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/tamilarasan-ber/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin className="h-7 w-7" />
          </a>
          <a
            href={Resume}
            aria-label="Resume PDF"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
            title="Resume"
          >
            <FaFileAlt className="h-7 w-7" />
          </a>
        </div>

        <div aria-hidden="true" className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-indigo-100" />
        <div aria-hidden="true" className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-purple-100" />
      </div>
    </div>
  </section>
);

export default Hero;
