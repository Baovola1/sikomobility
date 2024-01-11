import AvatarImage from "../assets/avatar1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Avatar2 from "../assets/avatar2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';




export default function Avis() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding:'20px',
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
          
        }
      }
    ]
  };

  return (
    <>
     
      <div className="container mx-auto bg-slate-700 m-10 p-8 min-w-96 min-h-96 ">
        <div className="text-white text-3xl mb-6 text-center font-bold">
          Ils nous ont fait confiance !<br />À votre tour !
        </div>
        <Slider {...settings}>
        {/*<div className="flex flex-row flex-wrap justify-center gap-4">*/}
          {/* Card 1 */}
          <div className="px-2">
          <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
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
          </div>
          {/* Card 2 */}
          <div className="px-2">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
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
          </div>
          {/* Card 3 */}
          <div className="px-2">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
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
          {/* Card 4 */}
          <div className="px-2">
          <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
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
          </div>
        </Slider>
      </div>
    </>
  );
}
