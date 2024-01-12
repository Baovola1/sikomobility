import AvatarImage from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ContentAvis from "./ContentAvis";




export default function Avis() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding:'15px',
    //centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
          
        }
      }
    ]
  };

  const avisData = [
    {
      username: "@Robin Mourier",
      userImage: AvatarImage,
      comment: "Simple, rapide et efficace ! Une équipe à l'écoute ! Je recommande vivement !",
      rating: 5.0,
      date: "2023-09-19"
    },
    {
      username: "@Robin Mourier",
      userImage: Avatar2,
      comment: "Simple, rapide et efficace ! Une équipe à l'écoute ! Je recommande vivement !",
      rating: 5.0,
      date: "2023-09-19"
    },
    {
      username: "@Youssouf SANOGO",
      userImage: Avatar2,
      comment: "Excellente expérience humaine vécue avec Tristan de Sko qui me guidera sur chaques routes ! Merci encore 🙏",
      rating: 5.0,
      date: "2023-09-19"
    },
    {
      username: "@Robin Mourier",
      userImage: AvatarImage,
      comment: "Simple, rapide et efficace ! Une équipe à l'écoute ! Je recommande vivement !",
      rating: 5.0,
      date: "2023-09-19"
    },
  ];


  return (
    <>
     
     <div className="container mx-auto bg-slate-700 m-10 p-8 min-w-96 min-h-96 ">
        <div className="text-white text-3xl mb-6 text-center font-bold">
          Ils nous ont fait confiance !<br />À votre tour !
        </div>
        <Slider {...settings}>
          {avisData.map((avis, index) => (
            <ContentAvis
              key={index}
              username={avis.username}
              userImage={avis.userImage}
              comment={avis.comment}
              rating={avis.rating}
              date={avis.date}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}
