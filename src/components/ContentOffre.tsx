import React from 'react';
import { Link } from 'react-router-dom';


interface ContentOffreProps {
  title: string;
  description: string;
  backgroundImage: string;
}


const ContentOffre: React.FC<ContentOffreProps> = ({ title,  description, backgroundImage }) => {
  return (
    <Link to="/" className="card flex flex-col mb-4 md:mb-0 transform transition-all hover:scale-105 duration-700">
    <div className="relative p-6 rounded-lg shadow-md w-full overflow-hidden min-w-[256px] h-[80vh]">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div></div> {/* Ce div vide crée de l'espace en haut, centré verticalement le contenu */}
        <div className="p-2">
          <h2 className="text-xl font-semibold text-white mb-2 leading-tight">
            {title}
          </h2>
          <p className="text-gray-300 text-sm leading-snug">
            { description}
          </p>
        </div>
      </div>
    </div>
  </Link>
  );
};

export default ContentOffre;

