import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-slate-800  relative">
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
                <Link to="/marchand" className="hover:text-blue-300">
                  Espace Marchand
                </Link>
              </li>
              <li className="relative group flex justify-center">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3  text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
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
                <div className="absolute hidden group-hover:block bg-blue-800/30 text-white py-2 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg min-w-[450px] min-h-[30vh] ">
                  <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-4">
                    {/* card1*/}
                    <Link to= "/" className="border border-white p-4 rounded-lg m-2 ">
                      <FontAwesomeIcon icon={faTruckMedical} />

                      <h4 className="text-lg font-bold">Assurance</h4>
                      <p>
                        Protégez votre investissement avec nos offres
                        d'assurances compétitives.
                      </p>
                    </Link>
                    {/* card2*/}
                    <Link to= "/" className="border border-white p-4 rounded-lg m-2 ">
                      <FontAwesomeIcon icon={faPhone} />
                      <h4 className="text-lg font-bold">Assistance</h4>
                      <p>
                        Béneficiez d'une assistance 24/7 pour tous vos besoins
                        urgents.
                      </p>
                    </Link>
                    {/* card3*/}
                    <Link to= "/" className="border border-white p-4 rounded-lg m-2">
                      <FontAwesomeIcon icon={faGear} />
                      <h4 className="text-lg font-bold">Maintenance</h4>
                      <p>
                        Gardez votre véhicule en parfait état avec nos services
                        de maitenance.
                      </p>
                    </Link>
                    {/* card4*/}
                    <Link to= "/" className="border border-white p-4 rounded-lg m-2">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <h4 className="text-lg font-bold">
                        Extension de garantie
                      </h4>
                      <p>
                        Profitez d'une tranquilité d'esprit prolongée avec nos
                        extensions.
                      </p>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <button className="bg-blue-700 hover:bg-blue-800 text-white  py-2 px-3 rounded mb-2 center">
                  Simulation
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
