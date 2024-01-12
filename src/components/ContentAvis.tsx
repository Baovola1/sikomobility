import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Props interface
interface ContentAvisProps {
  username: string;
  userImage: string;
  comment: string;
  rating: number;
  date: string;
}

// AvisCard component
const ContentAvis: React.FC<ContentAvisProps> = ({ username, userImage, comment, rating, date }) => {
  return (
    <div className="px-2">
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
        <div className="flex items-center mb-2">
          <img
            className="w-10 h-10 rounded-full"
            src={userImage}
            alt="User avatar"
          />
          <div className="text-sky-500 mr-2 p-2">{username}</div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-300 text-sm">
            {comment}
          </p>
          <div className="text-yellow-400 text-xs ">
            <FontAwesomeIcon icon={faStar} />
            {rating}
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

export default ContentAvis;
