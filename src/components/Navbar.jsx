import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo.JPG";
import { NAVIGATION_LINKS } from "../constants";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPostion = targetElement.getBoundingClientRect().top;
      const offsetPostion = elementPostion + window.scrollY + offset;
      window.scrollTo({
        top: offsetPostion,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden mx-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-center gap-6">
            <div>
              <a href="#">
                <img src={logo} width={150} alt="Logo" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-yellow-400"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* MOBILE MENU */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#" className="">
                <img src={logo} alt="logo" width={90} />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="foucus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 w-5 h-6" />
                ) : (
                  <FaBars className="m-2 w-5 h-6" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    className="block w-full text-lg"
                    href={item.href}
                    onClick={(e) => e.target.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
