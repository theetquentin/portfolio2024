import React from "react";

interface SkillListProps {
  title: string;
  links: {
    name: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

const SkillList: React.FC<SkillListProps> = ({ title, links }) => {
  return (
    <div>
      <p className="text-lg text-zinc-800 font-light pt-4">{title}</p>
      <div className="flex flex-wrap text-sm mt-2 gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-zinc-300 shadow-md rounded-md p-2 h-12 hover:bg-zinc-100 transition-colors"
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
