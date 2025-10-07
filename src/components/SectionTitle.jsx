const SectionTitle = ({ id, title, subtitle }) => (
  <header className="mb-10 text-center">
    <h2 id={id} className="text-3xl md:text-4xl font-semibold tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </header>
);
export default SectionTitle