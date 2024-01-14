import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMedical,
  faPhone,
  faGear,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

interface ServiceProps {
  isOpen: boolean;
  toggle: () => void; 
}

const ModalService: React.FC<ServiceProps> = ({ isOpen, toggle }) => {
  if (!isOpen) return null;

  const handelClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      toggle(); // Cela fermera le modal si on clique en dehors du contenu du modal
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-blue bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
        onClick={handelClose}
      >
        <div className="relative top-20 mx-auto p-2 border w-96 shadow-lg rounded-md bg-blue-800/30 backdrop-blur mt-7 min-w-[500px] ">
          {/* Contenu du modal */}
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-4">
            {/* card1*/}
            <Link
              to="/"
              className="border border-white p-4 rounded-lg m-2 hover:scale-105 duration-700 "
            >
              <FontAwesomeIcon icon={faTruckMedical} className="text-white" />

              <h4 className="text-lg font-bold text-white">Assurance</h4>
              <p className="text-white">
                Protégez votre investissement avec nos offres d'assurances
                compétitives.
              </p>
            </Link>
            {/* card2*/}
            <Link
              to="/"
              className="border border-white p-4 rounded-lg m-2 hover:scale-105 duration-700"
            >
              <FontAwesomeIcon icon={faPhone} className="text-white" />
              <h4 className="text-lg font-bold text-white">Assistance</h4>
              <p className="text-white">
                Béneficiez d'une assistance 24/7 pour tous vos besoins urgents.
              </p>
            </Link>
            {/* card3*/}
            <Link
              to="/"
              className="border border-white p-4 rounded-lg m-2 hover:scale-105 duration-700"
            >
              <FontAwesomeIcon icon={faGear} className="text-white" />
              <h4 className="text-lg font-bold text-white">Maintenance</h4>
              <p className="text-white">
                Gardez votre véhicule en parfait état avec nos services de
                maitenance.
              </p>
            </Link>
            {/* card4*/}
            <Link
              to="/"
              className="border border-white p-4 rounded-lg m-2 hover:scale-105 duration-700"
            >
              <FontAwesomeIcon icon={faPenToSquare} className="text-white" />
              <h4 className="text-lg font-bold text-white">
                Extension de garantie
              </h4>
              <p className="text-white">
                Profitez d'une tranquilité d'esprit prolongée avec nos
                extensions.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalService;
