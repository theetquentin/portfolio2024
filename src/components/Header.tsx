import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import MenuItems from "../data/MenuItems";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("accueil");
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
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
      <nav className="flex justify-between items-center mx-auto">
        {/* Menu desktop */}
        <div className="hidden md:flex justify-center items-center mx-auto mt-3 shadow-md rounded-full backdrop-blur-md saturate-200 bg-background/70 max-[800px]:text-sm">
          <button onClick={toggleTheme} className="px-4 pt-1">
            {isDarkMode ? (
              <LiaToggleOnSolid className="w-6 h-6 text-blue-500 transition-all duration-300 transform" />
            ) : (
              <LiaToggleOffSolid className="w-6 h-6 text-primary transition-all duration-300 transform" />
            )}
          </button>
          <ul className="flex gap-6 items-center">
            {MenuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target={item.icon ? "_blank" : undefined}
                  download={item.icon ? item.download : undefined}
                  className={`flex p-4 items-center gap-2 hover:underline decoration-2 underline-offset-4 text-primary${
                    activeSection === item.url.replace("#", "")
                      ? "underline font-semibold text-primary"
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

        <button onClick={toggleTheme} className="md:hidden text-4xl p-4">
          {isDarkMode ? (
            <LiaToggleOnSolid className="text-blue-500 transition-all duration-300 z-10" />
          ) : (
            <LiaToggleOffSolid className="transition-all duration-300 z-10 text-primary" />
          )}
        </button>

        <div
          onClick={toggleMenu}
          className="text-4xl cursor-pointer md:hidden p-4 z-50"
        >
          {menuOpen ? (
            <IoClose className="text-primary" />
          ) : (
            <IoMenu className="text-primary" />
          )}
        </div>

        {menuOpen && (
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-background transition-opacity duration-300 ease-in-out z-10`}
          >
            <ul className="flex flex-col justify-center items-center gap-8 p-4 w-full h-screen">
              {MenuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    onClick={toggleMenu}
                    className={`p-4 rounded-full hover:underline decoration-2 underline-offset-4${
                      activeSection === item.url.replace("#", "")
                        ? "underline font-semibold"
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
