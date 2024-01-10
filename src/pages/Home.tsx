import backgroundImage from "../assets/pj1.jpg";
import Avis from "../components/Avis";
import Join from "../components/Join";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    if (cards.length !== 0) {
      VanillaTilt.init(Array.from(cards) as HTMLElement[], {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1,
      });
    }
  }, []);

  return (
    <>
      {/* section 1*/}

      {/*card1*/}

      <div className="container mx-auto px-4 py-8 bg-slate-700 m-7">
        <div className="text-white text-center font-bold text-3xl mb-6">
          Découvrez notre gamme de <br/> services pour toutes les mobilités
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <div className="card flex flex-col mb-4 md:mb-0">
            <div className="relative p-6 rounded-lg shadow-md w-full h-96 overflow-hidden ">
              <img
                src={backgroundImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                {/* Div englobante pour le h2 et le paragraphe */}
                <div className=" flex flex-col p-2 mb-6">
                  <h2 className="md:text-xl font-semibold text-white mb-2">
                    PAIEMENT 3/4/10 FOIS
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base ">
                    Faites un paiement en 3, 4 ou 10 fois en carte bleue. C'est
                    sans justificatif.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*card2*/}
          <div className="card flex flex-col mb-4 md:mb-0">
            <div className="relative p-6 rounded-lg shadow-md w-full h-96 overflow-hidden">
              <img
                src={backgroundImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                {/* Div englobante pour le h2 et le paragraphe */}
                <div className="  flex flex-col p-2">
                  <h2 className="md:text-xl font-semibold text-white mb-2">
                    FINANCEMENT 12 A 60 MOIS
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base">
                    Faites une demande de financement de 12 à 60 fois.Obtenez un
                    accord d'une de nos banques partenaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*card3*/}
          <div className="card flex flex-col mb-4 md:mb-0">
            <div className="relative p-6 rounded-lg shadow-md w-full h-96 overflow-hidden">
              <img
                src={backgroundImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-6 flex flex-col h-full justify-end ">
                {/* Div englobante pour le h2 et le paragraphe */}
                <div className=" flex flex-col p-2">
                  <h2 className="md:text-xl font-semibold text-white ">
                    FORFAITS MOBILITE
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base ">
                    Souscrivez à un abonnement assurance, assistance,garantie ou
                    maintenance.Sans engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Avis />
      <Join />
    </>
  );
}
