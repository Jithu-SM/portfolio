import projects from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";

export default function ProjectPreview() {
  return (
    <section className="py-16 px-6" id="projects">
      <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.slice(0, 4).map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
