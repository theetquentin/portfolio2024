import React from "react";
import { FaGitAlt } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { SiGnubash, SiPowershell } from "react-icons/si";
import SkillList from "../components/SkillList";

const SysNetGit: React.FC = () => {
  const sysNetGitLinks = [
    {
      name: "Git",
      icon: <FaGitAlt className="w-6 h-6 text-primary" />,
      url: "https://git-scm.com/",
    },
    {
      name: "Bash",
      icon: <SiGnubash className="w-6 h-6 text-primary" />,
      url: "https://www.gnu.org/software/bash/",
    },
    {
      name: "PowerShell",
      icon: <SiPowershell className="w-6 h-6 text-primary" />,
      url: "https://learn.microsoft.com/fr-fr/powershell/",
    },
    {
      name: "Configuration réseau",
      icon: <IoGlobeOutline className="w-6 h-6 text-primary" />,
      url: "https://fr.wikipedia.org/wiki/R%C3%A9seau_informatique",
    },
  ];

  return (
    <SkillList
      title="Gestion de versions, systèmes et réseaux"
      links={sysNetGitLinks}
    />
  );
};

export default SysNetGit;
