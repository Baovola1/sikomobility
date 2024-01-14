import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Simulation from "./Simulation";
import ModalService from "./ModalService";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenService, setIsModalOpenService] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleModalService = () => {
    setIsModalOpenService(!isModalOpenService);
  };

  return (
    <>
      <header className="bg-slate-800 relative border-b-2 border-gray-500">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo et titre */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <Link
              to="/"
              className="text-blue-600 text-xl sm:text-3xl font-bold"
            >
              siko mobility
            </Link>
          </div>

          {/* Menu Burger visible seulement en taille md */}
          <button
            onClick={toggleMenu}
            className="text-slate-100 md:hidden z-20 "
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faCircleXmark} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </button>

          {/* Liens du menu */}
          <nav
            className={`md:flex items-center space-x-4 ${
              menuOpen ? "flex" : "hidden"
            } flex-col absolute md:relative md:top-auto md:left-auto top-full left-0 w-full md:w-auto bg-slate-500/50 md:bg-transparent z-10 `}
          >
            <ul className="flex flex-col md:flex-row items-center space-x-4 text-white justify-center">
              <li>
                <Link to="/marchand" className="hover:text-blue-300 text-lg ">
                  Espace Marchand
                </Link>
              </li>
              <li className="relative group flex justify-center ">
                {/* Dropdown*/}

                <button
                  onClick={toggleModalService}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3  text-white  hover:text-blue-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 md:w-auto text-lg "
                >
                  Nos Services
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </li>

              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-slate-800 hover:bg-blue-800 text-blue-700 py-2 px-3 rounded-lg mb-2 center border-4 border-blue-700 hover:text-white text-lg"
                >
                  Simulation
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <ModalService isOpen={isModalOpenService} toggle={toggleModalService} />
      {/* Ajout du modal en dehors de la balise header, mais toujours dans le composant de retour */}
      <Simulation isOpen={isModalOpen} close={() => setIsModalOpen(false)} />
    </>
  );
}
