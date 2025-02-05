import {
  IoDownloadOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5";

const Footer = () => {
  return (
    <section id="contact" className="menu border-t-2 border-border mt-10 py-4">
      <div className="mx-auto px-8 max-w-3xl">
        <p className="text-base text-primary/85 px-2 sm:text-lg">
          Me contacter ?
        </p>
        <div className="flex">
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 w-2/4 ms-0">
            <a
              href="mailto:quentin.theet@gmail.com"
              target="_blank"
              className="p-2 rounded-full hover:bg-card/70 transition-colors"
            >
              <IoMailOutline className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/quentin-theet-7058021b7/"
              target="_blank"
              className="p-2 rounded-full hover:bg-card/70 transition-colors"
            >
              <IoLogoLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </a>
            <a
              href="https://github.com/theetquentin"
              target="_blank"
              className="p-2 rounded-full hover:bg-card/70 transition-colors"
            >
              <IoLogoGithub className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </a>
            <a
              href="/assets/cv_theet_quentin.pdf"
              download="cv_theet_quentin.pdf"
              target="_blank"
              className="group p-2 rounded-full flex items-center gap-2 text-lg sm:text-xl text-primary/85 hover:bg-card/70 transition-colors"
            >
              CV{" "}
              <IoDownloadOutline className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </a>
          </div>
          <div className="flex flex-col justify-center items-end ms-auto">
            <p className="text-sm sm:text-base text-primary/85">
              Theet Quentin
            </p>
            <p className="text-sm text-primary/85">© 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
