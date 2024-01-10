import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <>
      <header className="bg-slate-800 ">
        <div className="container mx-auto flex items-center justify-between py-4 px-6 ">
          <div className="flex items-center ">
            <div className="flex gap-4">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
              <Link
                to="/"
                className="text-white text-xl sm:text-3xl font-bold"
                style={{ color: "blue" }}
              >
                siko mobility
              </Link>
            </div>
          </div>
          <nav>
            <ul className="flex items-center space-x-4 text-white">
              <li>
                <Link to="/espace-marchand" className="hover:text-blue-300">
                  Espace Marchand
                </Link>
              </li>
              <li className="relative group">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Nos Services
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute hidden group-hover:block bg-blue-800 text-white py-2">
                  <a href="#" className="block px-4 py-2 hover:bg-blue-700">
                    Sous-service 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-700">
                    Sous-service 2
                  </a>
                  {/* Add more dropdown items here */}
                </div>
              </li>
              <li>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
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
