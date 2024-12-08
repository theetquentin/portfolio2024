import { IoIdCardOutline, IoLocationOutline } from "react-icons/io5";

const Apropos = () => {
  return (
    <div>
      <article className="mt-7 flex flex-col mx-auto items-center w-full max-w-2xl">
        <img
          className="flex-shrink-0 w-40 h-40 rounded-full object-cover shadow-sm overflow-hidden mb-2 transform transition-transform hover:scale-110"
          src="/assets/photoTQ.jpg"
          alt="Portrait de Quentin"
        />

        <h1 className="text-3xl font-extrabold text-primary">Quentin Theet</h1>
        <h2 className="text-xl font-light mt-1 text-primary/85">
          Développeur FullStack
        </h2>
        <div className="flex items-center justify-center mt-1">
          <div className="text-lg font-light flex items-center text-primary/85">
            <IoLocationOutline className="text-primary/85" /> Milly-la-Forêt,
            91490
          </div>
        </div>
      </article>

      <section id="apropos" className="mx-auto mt-20 px-8 max-w-3xl">
        <div className="flex items-center gap-1">
          <IoIdCardOutline className="w-8 h-8 text-primary" />
          <h2 className="text-lg sm:text-xl font-bold text-primary">
            À propos
          </h2>
        </div>

        <p className="text-base sm:text-lg pt-4 text-primary">
          Actuellement à la recherche d'une alternance, je suis passionné par le
          développement web et en particulier par les frameworks JavaScript tels
          que React et Vue.js. Mon objectif est de mettre en pratique mes
          compétences techniques tout en continuant à apprendre au sein d'une
          équipe dynamique. Je suis motivé par les défis techniques et je
          souhaite contribuer à des projets innovants qui font appel à ma
          créativité et à mes capacités d'analyse. N'hésitez pas à me contacter
          pour échanger sur d'éventuelles opportunités !
        </p>
      </section>
    </div>
  );
};

export default Apropos;
