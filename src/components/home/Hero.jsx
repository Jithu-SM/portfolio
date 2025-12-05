export default function Hero() {
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I'm <span className="text-blue-500">Jithu S</span>
      </h1>

      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Software Developer • Electronic Music Producer • Tech Enthusiast
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a href="#projects" className="px-6 py-3 bg-blue-600 rounded-lg">View Projects</a>
        <a href="/music" className="px-6 py-3 border border-gray-700 rounded-lg">
          Listen to Music
        </a>
      </div>
    </section>
  );
}
