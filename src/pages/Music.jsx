import SectionTitle from "@/components/common/SectionTitle";
import music from "@/data/music";

export default function Music() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <SectionTitle title="My Music" />

      <div className="space-y-6">
        {music.map((track) => (
          <div
            key={track.title}
            className="p-6 border border-neutral-800 rounded-xl"
          >
            <h3 className="text-xl font-semibold">{track.title}</h3>
            <p className="text-gray-400">{track.desc}</p>

            <a
              href={track.link}
              target="_blank"
              className="text-blue-400 underline block mt-4"
            >
              Listen →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
