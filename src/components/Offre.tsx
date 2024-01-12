import backgroundImage from "../assets/pj1.jpg";
import ContentOffre from "./ContentOffre";

export default function Offre() {
  return (
    <>
      <div className="container mx-auto px-4 py-8  m-7">
        <div className="text-white text-center font-bold text-3xl mb-6 bg">
          Découvrez notre gamme de <br /> services pour toutes les mobilités
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
          data-aos="zoom-in"
        >
          <ContentOffre 
            title="PAIEMENT 3/4/10 FOIS"
            text="Faites un paiement en 3, 4 ou 10 fois en carte bleue. C'est sans justificatif."
            backgroundImage={backgroundImage}
          />
          <ContentOffre
            title="FINANCEMENT 12 A 60 MOIS"
            text="Faites une demande de financement de 12 à 60 fois.Obtenez un accord d'une de nos banques partenaires."
            backgroundImage={backgroundImage}
          />
          <ContentOffre
            title="FORFAITS MOBILITE"
            text="Souscrivez à un abonnement assurance, assistance,garantie ou maintenance.Sans engagement."
            backgroundImage={backgroundImage}
          />
        </div>
      </div>
    </>
  );
}