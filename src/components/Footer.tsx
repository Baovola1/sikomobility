import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
                <div className="flex gap-4">
                    <img src={logo} alt="logo"className="w-10 h-10 rounded-full"/>
                    <h2 className="text-2xl font-bold mb-2 text-blue-600">siko mobility</h2>
                </div>
              
              <p className="mb-2">contact@sikomobility.com</p>
              <p className="mb-2">86 rue Dutot, 75015 Paris</p>
              <div className="flex space-x-4">
                <Link to="/facebook" aria-label="Facebook">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="lg"
                    className="text-green-400"
                  />
                </Link>
                <Link to="/twitter" aria-label="Twitter">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="lg"
                    className="text-green-400"
                  />
                </Link>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Siko Mobility respecte les normes sociales et environnementales
                et s'inscrit dans une démarche de progrès.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-10">
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-2">INFORMATIONS</h3>
                <ul>
                  <li className="mb-2">
                    <Link to="/mentions-legales">Mentions légales</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/cgv">CGV</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/politique-de-confidentialite">
                      Politique de confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link to="/rgpd-cookies">RGPD & Cookies</Link>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-2">SIKO MOBILITY</h3>
                <ul>
                  <li className="mb-2">
                    <Link to="/nous">Qui sommes-nous ?</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-600 pt-4">
            © 2021 Siko Mobility. Tous droits réservés.
          </div>
        </div>
      </footer>
    </>
  );
}
