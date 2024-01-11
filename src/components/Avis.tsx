import AvatarImage from "../assets/avatar1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Avatar2 from "../assets/avatar2.jpg";


export default function Avis() {
  return (
    <>
     
      <div className="container mx-auto bg-slate-700 m-10 p-8 min-w-96 min-h-96">
        <div className="text-white text-center text-3xl mb-6">
          Ils nous ont fait confiance !<br />À votre tour !
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {/* Card 1 */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
            <div className="flex items-center mb-2">
              <img
                className="w-10 h-10 rounded-full"
                src={AvatarImage}
                alt="Rounded avatar"
              />
              <div className="text-sky-500 mr-2 p-2">@Robin Mourier</div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-300 text-sm">
                Simple, rapide et efficace ! Une équipe à l'écoute ! Je
                recommande vivement !
              </p>
              <div className="text-yellow-400 text-xs ">
                <FontAwesomeIcon icon={faStar} />
                5.0
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex-grow"></div>
              <div className="text-gray-400 text-xs">2023-09-19</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
            <div className="flex items-center mb-2">
              <img
                className="w-10 h-10 rounded-full"
                src={Avatar2}
                alt="Rounded avatar"
              />
              <div className="text-sky-500 mr-2 p-2">@Robin Mourier</div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-300 text-sm">
                Simple, rapide et efficace ! Une équipe à l'écoute ! Je
                recommande vivement !
              </p>
              <div className="text-yellow-400 text-xs ">
                <FontAwesomeIcon icon={faStar} />
                5.0
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex-grow"></div>
              <div className="text-gray-400 text-xs">2023-09-19</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
            <div className="flex items-center mb-2">
              <img
                className="w-10 h-10 rounded-full"
                src={AvatarImage}
                alt="Rounded avatar"
              />
              <div className="text-sky-500 mr-2 p-2">@Youssouf SANOGO</div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-300 text-sm">
                Excellente expérience humaine vécue avec Tristan de Sko qui me
                guidera sur chaques routes ! Merci encore 🙏
              </p>
              <div className="text-yellow-400 text-xs ">
                <FontAwesomeIcon icon={faStar} />
                5.0
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex-grow"></div>
              <div className="text-gray-400 text-xs">2023-09-19</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
