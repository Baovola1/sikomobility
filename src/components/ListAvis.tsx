import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

interface ListAvisProps {
  username: string;
  userImage: string;
  comment: string;
  rating: number;
  date: string;
}

const ListAvis: React.FC<ListAvisProps> = ({
  username,
  userImage,
  comment,
  rating,
  date,
}) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > i && rating < i + 1) {
      // Si la note est entre deux nombres entiers, affichage demi-étoile
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarHalfAlt}
          className="text-yellow-400"
        />
      );
    } else if (rating > i) {
      // Si la note est supérieure à l'index, affichage  étoile pleine
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
      );
    } else {
      // Sinon, affichage étoile vide
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-gray-400" />
      );
    }
  }

  return (
    <div className="px-2">
      <div className="p-6 bg-slate-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800">
        <div className="flex items-center mb-2">
          <img
            className="w-10 h-10 rounded-full"
            src={userImage}
            alt="User avatar"
          />
          <div className="text-sky-500 mr-2 p-2">{username}</div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-300 text-sm line-clamp-2">{comment}</p>
          <div className="flex items-center">
            {stars}
            <span className="ml-2 text-yellow-400 text-xs">
              {rating.toFixed(1)}
            </span>{" "}
            {/* Affichage note avec un chiffre après virgule */}
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex-grow"></div>
          <div className="text-gray-400 text-xs">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default ListAvis;
