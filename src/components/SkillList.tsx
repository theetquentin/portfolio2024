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
      <p className="text-lg font-light pt-4 text-primary">{title}</p>
      <div className="flex flex-wrap text-sm mt-2 gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border hover:bg-card/70 text-primary shadow-md 
            rounded-md p-2 h-12 transition-colors"
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
