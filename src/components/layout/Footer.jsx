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

export default function Footer() {
  return (
    <footer className="py-6 text-center border-t border-neutral-800 mt-20">
      <div className="flex justify-center gap-6 mb-3">
        {socials.map((s) => {
          const Icon = iconMap[s.icon];
          return (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Jithu S — All Rights Reserved
      </p>
    </footer>
  );
}
