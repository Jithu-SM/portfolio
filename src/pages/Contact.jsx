import SectionTitle from "@/components/common/SectionTitle";
import socials from "@/data/socials";
import { Github, Linkedin, Instagram, Mail, Youtube, Music2 } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
  youtube: Youtube,
  soundcloud: Music2,
};


export default function Contact() {
  return (
    <div className="px-6 py-16 max-w-xl mx-auto">
      <SectionTitle title="Contact Me" />

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-lg"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-lg"
        ></textarea>

        <button className="px-6 py-3 bg-blue-600 rounded-xl w-full">
          Send Message
        </button>
      </form>

      {/* 🔗 Social Profiles */}
      <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>

      <div className="flex flex-col gap-3">
        {socials.map((s) => {
          const Icon = iconMap[s.icon];
          return (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              className="flex items-center gap-3 p-3 border border-neutral-800 rounded-lg hover:border-blue-500 transition"
            >
              <Icon size={20} />
              <span>{s.platform}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
