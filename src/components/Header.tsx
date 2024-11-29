import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import MenuItems from "../data/MenuItems";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("accueil");
  const sectionRefs = useRef<Element[]>([]);

  useEffect(() => {
    sectionRefs.current = Array.from(document.querySelectorAll("section.menu"));
  }, []);

  useEffect(() => {
    if (sectionRefs.current.length === 0) return;

    const observerOptions = { threshold: 0.5 }; // Section visible à 50%
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting);
      if (visibleSection) {
        setActiveSection(visibleSection.target.id);
      }
    }, observerOptions);

    sectionRefs.current.forEach((section: Element) =>
      observer.observe(section)
    );

    return () => {
      sectionRefs.current.forEach((section: Element) =>
        observer.unobserve(section)
      );
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Gestion du scrolling lors de l'ouverture du menu mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  // Ferme le menu mobile en cas de redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 w-full z-30">
      <nav className="flex justify-end mx-auto">
        {/* Menu desktop */}
        <div className="hidden md:flex justify-center items-center mx-auto mt-3 shadow-md rounded-full backdrop-blur-md saturate-200 bg-white/70">
          <ul className="flex gap-6 items-center">
            {MenuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target={item.icon ? "_blank" : undefined}
                  download={item.icon ? item.download : undefined}
                  className={`flex p-4 items-center gap-2 rounded-full hover:bg-zinc-200/80 ${
                    activeSection === item.url.replace("#", "")
                      ? "bg-zinc-200/80 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu mobile */}
        <div
          onClick={toggleMenu}
          className="text-4xl cursor-pointer md:hidden p-4 z-50"
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>

        {menuOpen && (
          <div
            className={`fixed top-0 left-0 bg-white w-full h-screen transition-opacity duration-300 ease-in-out z-10`}
          >
            <ul className="flex flex-col justify-center items-center gap-8 p-4 w-full h-screen">
              {MenuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    onClick={toggleMenu}
                    className={`p-4 rounded-full hover:bg-zinc-200/80 ${
                      activeSection === item.url.replace("#", "")
                        ? "bg-zinc-300 font-bold"
                        : ""
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
