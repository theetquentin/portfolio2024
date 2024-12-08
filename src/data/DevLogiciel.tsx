import { FaJava } from "react-icons/fa6";
import { IoLogoPython } from "react-icons/io5";
import IconC from "../assets/IconC";
import SkillList from "../components/SkillList";

const DevLogiciel = () => {
  const softwareDevelopmentLinks = [
    {
      name: "C / C#",
      url: "https://www.w3schools.com/c/",
      icon: (
        <IconC
          color1="text-primary"
          color2="text-primary"
          color3="text-primary"
          size="1.5rem"
        />
      ),
    },
    {
      name: "Java",
      url: "https://www.oracle.com/java/",
      icon: <FaJava className="w-6 h-6 text-primary" />,
    },
    {
      name: "Python",
      url: "https://www.python.org/",
      icon: <IoLogoPython className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <SkillList
      title="Développement Logiciel"
      links={softwareDevelopmentLinks}
    />
  );
};

export default DevLogiciel;
