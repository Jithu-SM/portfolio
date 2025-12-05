import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectCard({ project }) {
  return (
    <Card className="border-neutral-800 hover:border-blue-500 transition">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-400">{project.description}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-neutral-800 rounded text-xs">
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          className="text-blue-400 underline block mt-4"
        >
          View Project →
        </a>
      </CardContent>
    </Card>
  );
}
