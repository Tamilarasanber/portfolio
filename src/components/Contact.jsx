import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const Contact = () => (
  <section id="contact" className="bg-white">
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-20 text-center">
      <SectionTitle
        title="Get in Touch"
        subtitle="Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities."
      />

      <div className="space-y-6 mt-8 text-gray-700 text-lg">
        {/* Email */}
        <div className="flex items-center justify-center gap-3">
          <FaEnvelope className="text-indigo-600 text-2xl" />
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:tamilarasanber@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              tamilarasanber@gmail.com
            </a>
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-3">
          <FaPhoneAlt className="text-indigo-600 text-2xl" />
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+916382282535"
              className="text-indigo-600 hover:underline"
            >
              +91 6382282535
            </a>
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-3">
          <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
          <p>
            <span className="font-semibold">Location:</span> Chennai, India
          </p>
        </div>
      </div>

      <footer className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Tamilarasan — Built with React & Tailwind
      </footer>
    </div>
  </section>
);

export default Contact;
