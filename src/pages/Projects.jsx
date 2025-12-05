import SectionTitle from "@/components/common/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <div className="px-6 py-16 max-w-5xl mx-auto">
      <SectionTitle title="All Projects" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
