import { GrMysql } from "react-icons/gr";
import { SiMariadbfoundation } from "react-icons/si";
import SkillList from "../components/SkillList";

const DataManagement = () => {
  const dataManagementLinks = [
    {
      name: "MySQL",
      url: "https://www.mysql.com/",
      icon: <GrMysql className="w-6 h-6 text-primary" />,
    },
    {
      name: "MariaDB",
      url: "https://mariadb.org/",
      icon: <SiMariadbfoundation className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <SkillList
      title="Gestion de données, SQL, JSON, XML"
      links={dataManagementLinks}
    />
  );
};

export default DataManagement;
