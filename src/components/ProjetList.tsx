import { useState } from "react";
import {
  IoChevronDownOutline,
  IoFolderOpenOutline,
  IoFolderOutline,
} from "react-icons/io5";
import LangagesData from "../data/LangagesData";
import ProjetsData from "../data/ProjetsData";
import type { ProjetsDataProps } from "../interfaces/ProjetsDataProps.interface";
import Projet from "./Projet";

const ProjetList: React.FC = () => {
  const [langagesFiltres, setLangagesFiltres] = useState<string[]>([]);
  const [projetsFiltres, setProjetsFiltres] =
    useState<ProjetsDataProps[]>(ProjetsData);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  // changement filtres
  const handleLangageChange = (langage: string) => {
    const newFilters = langagesFiltres.includes(langage)
      ? langagesFiltres.filter((l) => l !== langage)
      : [...langagesFiltres, langage];

    setLangagesFiltres(newFilters);

    // Maj liste filtrée
    const projetsFiltres = newFilters.length
      ? ProjetsData.filter((projet) =>
          newFilters.every((langage) => projet.langages.includes(langage))
        )
      : ProjetsData; // Pas de filtre, tous les projets sont affichés

    setProjetsFiltres(projetsFiltres);
  };

  return (
    <section id="projets" className="menu mx-auto px-8 max-w-3xl">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleVisibility}
      >
        {isVisible ? (
          <IoFolderOpenOutline className="w-8 h-8 transition-transform duration-300 ease-in-out" />
        ) : (
          <IoFolderOutline className="w-8 h-8 transition-transform duration-300 ease-in-out" />
        )}
        <h2 className="text-xl font-bold">Projets</h2>
        <IoChevronDownOutline
          className={`ml-auto w-8 h-8 transition-transform duration-300 ${
            isVisible ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        className={`flex md:gap-4 mt-5 transition-all duration-300 ease-in-out overflow-hidden ${
          isVisible
            ? "max-h-screen opacity-100 transition-all duration-500 ease-in-out"
            : "max-h-0 opacity-0 transition-all duration-500 ease-in-out"
        }`}
      >
        {/* Filtres */}
        <div>
          <h3 className="text-base md:text-lg font-semibold">Filtrer</h3>
          <div className="flex flex-col gap-2 mt-2">
            {LangagesData.map((langage) => (
              <label
                key={langage}
                className="flex text-[0.7rem] sm:text-base items-center gap-2 bg-zinc-200/70 hover:bg-zinc-300/70
                dark:bg-zinc-800/70 dark:hover:bg-zinc-700/70 rounded-lg p-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={langagesFiltres.includes(langage)}
                  onChange={() => handleLangageChange(langage)}
                  className="accent-zinc-600"
                />
                <span>{langage}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Liste des projets avec scroll */}
        <div className="mt-2 flex-grow overflow-y-auto max-h-96">
          <ul className="space-y-4">
            {projetsFiltres.map((projet) => (
              <Projet
                key={projet.id}
                lien={projet.lien}
                titre={projet.titre}
                description={projet.description}
                langages={projet.langages}
              />
            ))}
            {projetsFiltres.length === 0 && (
              <p className="text-center">Aucun projet trouvé.</p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjetList;
