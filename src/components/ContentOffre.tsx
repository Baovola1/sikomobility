import imageFond from "../assets/pj1.jpg";

export default function ContentOffre() {
  const dataContent: {
    BackgroundImage: string;
    title: string;
    description: string;
  }[] = [
    {
      BackgroundImage: imageFond,
      title: " PAIEMENT 3/4/10 FOIS ",
      description:
        "Faites un paiement en 3, 4 ou 10 fois en carte bleue. C'est sans justificatif. ",
    },
    {
      BackgroundImage: imageFond,
      title: " FINANCEMENT 12 A 60 MOIS ",
      description:
        "Faites une demande de financement de 12 à 60 fois.Obtenez un accord d'une de nos banques partenaires. ",
    },
    {
      BackgroundImage: imageFond,
      title: " FORFAITS MOBILITE ",
      description:
        " Souscrivez à un abonnement assurance, assistance,garantie ou maintenance.Sans engagement.. ",
    },
  ];

  const contents = dataContent.map((item, index) => (
    <div key={index} className="card flex flex-col mb-4 md:mb-0">
      <div className="relative p-6 rounded-lg shadow-md w-full h-96 overflow-hidden">
        <img
          src={item.BackgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 p-6 flex flex-col h-full justify-end">
           {/* Div englobante pour le h2 et le paragraphe */}
           <div className=" flex flex-col p-2 mb-6">
            <h2 className="md:text-xl font-semibold text-white mb-2">
              {item.title}
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));

  return <>{contents}</>;
}
