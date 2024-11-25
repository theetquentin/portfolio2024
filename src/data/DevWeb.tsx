import { FaPhp } from "react-icons/fa6";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoVue,
} from "react-icons/io5";
import SkillList from "../components/SkillList";

const DevWeb = () => {
  const webDevelopmentLinks = [
    {
      name: "HTML",
      url: "https://developer.mozilla.org/fr/docs/Web/HTML",
      icon: <IoLogoHtml5 className="w-6 h-6" />,
    },
    {
      name: "CSS",
      url: "https://developer.mozilla.org/fr/docs/Web/CSS",
      icon: <IoLogoCss3 className="w-6 h-6" />,
    },
    {
      name: "JavaScript / TypeScript",
      url: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
      icon: <IoLogoJavascript className="w-6 h-6" />,
    },
    {
      name: "PHP",
      url: "https://www.php.net/",
      icon: <FaPhp className="w-8 h-8" />,
    },
    {
      name: "React",
      url: "https://fr.react.dev/",
      icon: <IoLogoReact className="w-6 h-6" />,
    },
    {
      name: "Vue",
      url: "https://vuejs.org/",
      icon: <IoLogoVue className="w-6 h-6" />,
    },
  ];

  return <SkillList title="Développement Web" links={webDevelopmentLinks} />;
};

export default DevWeb;
