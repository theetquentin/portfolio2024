import type { ProjetsDataProps } from "../interfaces/ProjetsDataProps.interface";

const ProjetsData: ProjetsDataProps[] = [
  {
    id: 1,
    titre: "Puissance 4",
    description:
      "Le projet a été effectué avec un groupe de 4 personnes et a pour but de se familiariser avec Java et JavaFX afin de faire un jeu. Possible de jouer contre un ordinateur ou un autre joueur en local.",
    lien: "https://github.com/Odan35/Puissance-4",
    langages: ["Java"],
  },
  {
    id: 2,
    titre: "Inventaire Web",
    description:
      "Application qui permet de récupérer les caractéristiques techniques de l'ordinateur, les mettre en base de données et faire des statistiques avec.",
    lien: "https://github.com/theetquentin/inventaireweb",
    langages: ["JavaScript", "MySQL", "VueJS", "ExpressJS"],
  },
  {
    id: 3,
    titre: "PokeUtiliy",
    description:
      "Une application web moderne sur le thème Pokémon (pokédex multilingue) développée avec React, TypeScript, TailwindCSS et l'aide du wrapper poke-node.",
    lien: "https://github.com/theetquentin/PokeUtility",
    langages: ["JavaScript", "TypeScript","React","TailwindCSS"],
  },
  {
    id: 4,
    titre: "Framework TypeScript",
    description:
      "Projet en TypeScript qui consiste à créer un framework utilisant des classes, des interfaces, de l'héritage et des généricités, cela m'a permis de comprendre la logique objet et son utilité. L'objectif est de développer des composants réutilisables pour des fonctionnalités simples, comme un formulaire ou une liste déroulante.",
    lien: "https://github.com/theetquentin/frameworkTypeScript",
    langages: ["JavaScript", "TypeScript"],
  },
  {
    id: 5,
    titre: "Portfolio 2024",
    description:
      "Création de mon portfolio minimaliste en 2024. Bien que j'aie déjà un portfolio, j'ai décidé de repenser le design en utilisant des technologies que j'ai apprises depuis, telles que TypeScript et React. Ce projet me permet également de découvrir de nouveaux outils comme Tailwind pour élargir mes compétences et proposer un site plus moderne et performant.",
    lien: "https://github.com/theetquentin/portfolio2024/",
    langages: ["JavaScript", "TypeScript", "React", "TailwindCSS"],
  },
  {
    id: 6,
    titre: "Projet-Intranet",
    description:
      "Ce projet est une application intranet construite avec une architecture en couches.",
    lien: "https://github.com/LuffyStar93/Projet-Intranet---Architecture-en-Couches",
    langages: ["JavaScript", "TypeScript", "React", "ExpressJS","MySQL"],
  },
];

export default ProjetsData;
