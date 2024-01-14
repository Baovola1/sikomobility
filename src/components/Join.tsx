import { useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/marchand");
  };

  return (
    <>
      <div className="container mx-auto m-10 p-8 min-w-80 min-h-80 border border-gray-500 rounded-lg shadow">
        {/* Titre centré */}
        <div className="flex justify-center mb-4">
          <h2 className="text-white text-5xl font-extrabold ">
            Nous rejoindre
          </h2>
        </div>

        {/* Paragraphe et bouton alignés à gauche */}
        <div className="flex flex-col items-start text-left gap-4">
          <p className="text-gray-400 mb-6 pt-7 text-xl">
            Vous avez un site e-commerce ou une boutique ? Devenez l'un de nos
            partenaires et offrez de multiples services et avantages à vos
            clients. Augmentez votre chiffre d'affaire avec notre solution en
            financement.
          </p>
          <button
            onClick={handelClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <span>Devenir Partenaire</span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
