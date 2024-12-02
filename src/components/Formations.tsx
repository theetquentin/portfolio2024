import {
  IoCalendarOutline,
  IoLocationOutline,
  IoSchoolOutline,
} from "react-icons/io5";

const Formations = () => {
  return (
    <section id="formations" className="menu mx-auto px-8 max-w-3xl">
      <div className="flex items-center gap-2">
        <IoSchoolOutline className="w-8 h-8" />
        <h2 className="text-xl text-zinc-900 font-bold">Formations</h2>
      </div>
      <div className="mt-5">
        <div className="flex flex-col md:flex-row items-center p-4 gap-4">
          <a href="https://3wacademy.fr/" target="_blank">
            <img
              className="w-24 h-24 md:w-16 md:h-16 rounded-full transform transition-transform hover:scale-125"
              src="/assets/3wAcademy.jpg"
              alt="Logo de la 3w Academy"
            />
          </a>
          <div>
            <h3 className="text-base sm:text-lg text-zinc-900 font-semibold">
              Concepteur Développeur Full-Stack
            </h3>
            <div className="text-sm sm:text-base flex gap-5 text-zinc-800">
              <a
                className="flex items-center gap-1 text-blue-700 hover:text-blue-800 transition-colors hover:underline"
                href="https://3wacademy.fr/"
                target="_blank"
              >
                <IoLocationOutline />
                3w Academy
              </a>
              <div className="flex items-center gap-1">
                <IoCalendarOutline />
                <p>2024-2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <div className="ms-12 md:ms-[2.9rem] p-6 border-l-4 border-zinc-200 box-border"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center p-4 gap-4">
          <a href="https://www.univ-brest.fr/fr" target="_blank">
            <img
              className="w-24 h-24 md:w-16 md:h-16 rounded-full object-cover object-[28%-50%] transform transition-transform hover:scale-125"
              src="/assets/logoUbo.png"
              alt="Logo de l'UBO"
            />
          </a>
          <div>
            <h3 className="text-base sm:text-lg text-zinc-900 font-semibold">
              Niveau 3ème année de licence CDA
            </h3>
            <div className="text-sm sm:text-base flex gap-5 text-zinc-800 pb-2">
              <a
                className="flex items-center gap-1 text-blue-700 hover:text-blue-800
                hover:underline transition-colors"
                href="https://www.univ-brest.fr/fr"
                target="_blank"
              >
                <IoLocationOutline />
                UBO, Brest
              </a>
              <div className="flex items-center gap-1">
                <IoCalendarOutline />
                <p>2023-2024</p>
              </div>
            </div>
            <div>
              <p className="text-zinc-900 text-sm sm:text-base w-60 sm:w-72 md:w-96">
                Stage de 8 semaines chez{" "}
                <a
                  href="https://labsticc.fr/fr"
                  target="_blank"
                  className="font-semibold underline"
                >
                  Lab-STICC
                </a>
                , développement d'application Python, optimisation
                multi-objectifs
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <div className="ms-12 md:ms-[2.9rem] p-6 border-l-4 border-zinc-200 box-border"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center p-4 gap-4">
          <a href="https://www.saint-louis29.net/" target="_blank">
            <img
              className="w-24 h-24 md:w-16 md:h-16 rounded-full transform transition-transform hover:scale-125"
              src="/assets/logoStLouis.png"
              alt="Logo du lycée Saint Louis"
            />
          </a>
          <div>
            <h3 className="text-base sm:text-lg text-zinc-900 font-semibold">
              BTS Services Informatiques aux organisations
            </h3>
            <div className="text-sm sm:text-base flex gap-5 text-zinc-800 pb-2">
              <a
                className="flex items-center gap-1 text-blue-700 hover:text-blue-800
                hover:underline transition-colors"
                href="https://www.saint-louis29.net/"
                target="_blank"
              >
                <IoLocationOutline />
                Lycée Saint-Louis, Châteaulin
              </a>
              <div className="flex items-center gap-1">
                <IoCalendarOutline />
                <p>2021-2023</p>
              </div>
            </div>
            <a
              className="underline text-sm md:text-base text-zinc-800 font-semibold"
              target="_blank"
              href="https://www.elisablaise.fr/"
            >
              Lamennais Douarnenez
            </a>
            <ul className="w-72 sm:w-80 md:w-96 list-disc list-inside">
              <li className="px-2 text-zinc-800 font-normal text-sm">
                2023, 6 semaines, refonte du site web du collège Lamennais Cap
                Sizun
              </li>
              <li className="px-2 text-zinc-800 font-normal text-sm">
                2022, 4 semaines, Gestion du parc informatique, systèmes et
                réseaux
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <div className="ms-12 md:ms-[2.9rem] p-6 border-l-4 border-zinc-200 box-border"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center p-4 gap-4">
          <a href="https://www.elisablaise.fr/" target="_blank">
            <img
              className="w-24 h-24 md:w-16 md:h-16 rounded-full transform transition-transform hover:scale-125"
              src="/assets/logoLD.jpg"
              alt="Logo Lamennais Douarnenez"
            />
          </a>
          <div>
            <h3 className="text-base sm:text-lg text-zinc-900 font-semibold">
              Bac ES, option mathématiques, mention bien
            </h3>
            <div className="text-sm sm:text-base flex gap-5 text-zinc-800">
              <a
                className="flex items-center gap-1 text-blue-700 hover:text-blue-800
                hover:underline transition-colors "
                href="https://www.elisablaise.fr/"
                target="_blank"
              >
                <IoLocationOutline />
                Lycée St-Blaise, Douarnenez
              </a>
              <div className="flex items-center gap-1">
                <IoCalendarOutline />
                <p>2019-2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formations;
