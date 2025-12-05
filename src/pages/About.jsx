import SectionTitle from "@/components/common/SectionTitle";
import AboutCard from "@/components/about/AboutCard";

export default function About() {
  return (
    <div className="px-6 py-16 max-w-3xl mx-auto">
      <SectionTitle title="About Me" />
      <AboutCard />
    </div>
  );
}
