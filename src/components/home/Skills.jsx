import skills from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((cat) => (
          <div key={cat.category} className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{cat.category}</h3>
            <ul className="text-gray-400">
              {cat.items.map((s) => (
                <li key={s} className="py-1">• {s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
