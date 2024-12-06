import type { ProjetProps } from "../interfaces/ProjetProps.interface";

const Projet: React.FC<ProjetProps> = ({
  lien,
  titre,
  description,
  langages,
}) => {
  return (
    <li
      className="transition-all duration-300 ease-in-out transform opacity-0 translate-y-6 will-change-transform"
      style={{ opacity: 1, transform: "translateY(0)" }}
    >
      <a
        href={lien}
        target="_blank"
        className="group p-4 mx-2 border border-zinc-300 rounded-lg hover:bg-zinc-200/70 dark:border-zinc-700 dark:hover:bg-zinc-800/70 transition-all flex flex-col"
      >
        <div className="text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-300">
          <h3 className="text-base md:text-lg font-semibold m-0">{titre}</h3>
          <p className="text-[0.75rem] sm:text-sm md:text-base mt-2">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 langages mt-5">
            {langages.map((langage) => (
              <li
                key={langage}
                className="px-2 py-[0.15rem] bg-zinc-200/70 group-hover:bg-zinc-300/70 
                dark:bg-zinc-800/70 
                dark:group-hover:bg-zinc-700/70 rounded-full text-[0.8rem] sm:text-sm"
              >
                {langage}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
};

export default Projet;
