import { IoDownloadOutline } from "react-icons/io5";
import type { MenuItemProps } from "../interfaces/MenuItemsProps.interface";

const MenuItems: MenuItemProps[] = [
  { name: "A Propos", url: "#apropos" },
  { name: "Compétences", url: "#competences" },
  { name: "Formations", url: "#formations" },
  { name: "Projets", url: "#projets" },
  { name: "Contact", url: "#contact" },
  {
    name: "CV",
    url: "/assets/cv_theetquentin.pdf",
    icon: <IoDownloadOutline className="w-6 h-6 text-primary" />,
    download: "cv_theetquentin.pdf",
  },
];

export default MenuItems;
