import SectionTitle from './SectionTitle'
const Testimonials = () => (
  <section className="bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <SectionTitle title="Testimonials" subtitle="What collaborators and clients say." />
      <div className="grid md:grid-cols-2 gap-8">
        <blockquote className="rounded-xl border bg-white p-6">
          <p className="text-gray-800">
            “Delivered a polished UI on time with excellent attention to accessibility.”
          </p>
          <footer className="mt-3 text-sm text-gray-500">— Product Manager</footer>
        </blockquote>
        <blockquote className="rounded-xl border bg-white p-6">
          <p className="text-gray-800">
            “Great collaboration, clean code, and thoughtful component abstractions.”
          </p>
          <footer className="mt-3 text-sm text-gray-500">— Tech Lead</footer>
        </blockquote>
      </div>
    </div>
  </section>
);
export default Testimonials