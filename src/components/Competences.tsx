import { IoBookOutline, IoLanguageOutline } from "react-icons/io5";

import DataManagement from "../data/DataManagement";
import DevLogiciel from "../data/DevLogiciel";
import DevWeb from "../data/DevWeb";
import SysNetGit from "../data/SysNetGit";

const Competences = () => {
  return (
    <section id="competences" className="mx-auto menu px-8 max-w-3xl">
      <div className="flex items-center gap-2">
        <IoBookOutline className="w-8 h-8" />
        <h2 className="text-xl font-bold">Compétences</h2>
      </div>
      <DevWeb />
      <DevLogiciel />
      <DataManagement />
      <SysNetGit />
      <div className="flex items-center gap-2 pt-4">
        <IoLanguageOutline className="w-6 h-6" />
        <p className="text-lg font-light">Anglais niveau B2</p>
      </div>
    </section>
  );
};

export default Competences;
