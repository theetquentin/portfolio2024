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
        className="group p-4 mx-2 border border-border rounded-lg hover:bg-card/70 transition-all flex flex-col"
      >
        <div>
          <h3 className="text-base md:text-lg font-semibold m-0 text-primary/85 group-hover:text-primary">
            {titre}
          </h3>
          <p className="text-[0.75rem] sm:text-sm md:text-base mt-2 text-primary/85 group-hover:text-primary">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 langages mt-5">
            {langages.map((langage) => (
              <li
                key={langage}
                className="px-2 py-[0.15rem] bg-card/70 group-hover:bg-border/70 text-primary/85 group-hover:text-primary rounded-full text-[0.8rem] sm:text-sm"
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
