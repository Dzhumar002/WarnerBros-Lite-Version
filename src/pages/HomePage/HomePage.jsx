import React, { useEffect, useState }  from "react";
import Carousel from "../../components/Carousel/Carousel";
import "./HomePage.css"

const HomePage = () => {
  const slides = [
    {
    url: "https://cdn.wbgames.com/media/533/hero_video_1645575166.mp4",
    image: "https://cdn.wbgames.com/media/532/conversions/logo_1645575134-sized.png",
    title: "Hogwarts Legacy",
    id:1
},{
    url: "https://cdn.wbgames.com/media/483/hero_video_1642730671.mp4",
    image:"https://cdn.wbgames.com/media/482/conversions/logo_1642730344-sized.png",
    title: "Multi Versus",
    id:2
},{
    url: "https://cdn.wbgames.com/media/501/hero_video_1643410975.mp4",
    image: "https://cdn.wbgames.com/media/500/conversions/logo_1643410957-sized.png",
    title: "LEGO Star Wars",
    id:3
},{
    url: "https://cdn.wbgames.com/media/524/hero_video_1644513437.mp4",
    image:"https://cdn.wbgames.com/media/511/conversions/logo_1644491373-sized.png",
    title: "Harry Potter Magic Awakened",
    id:4
},{
    url: "https://cdn.wbgames.com/media/505/hero_video_1644453448.mp4",
    image: "https://cdn.wbgames.com/media/471/conversions/logo_1637268980-sized.png",
    title: "Back4Blood",
    id:5
}
];

    
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(()=>{
// console.log(currentIndex);
},[goToSlide])

function goToSlide(slideIndex){
    setCurrentIndex (slideIndex)
}

function renderVideo(index){
 return (
<>
  <video style={{width:"100%"}} autoPlay loop muted src={slides[index].url}>
  </video>
  <div className="home_games">
    <div className="add_info">
    <img className='info_img' src={slides[index].image} />
    <button className='add_info_btn'>VIEW DETAILS</button>
  </div>
    <div style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
        {slides.map((_, slideIndex)=>(
        <>
    <button className="demo_switch" key={slideIndex} onClick={()=>goToSlide(slideIndex)}></button>
    </>
    ))}
    </div>
  </div>
</>
)}
  return <div>
    {renderVideo(currentIndex)}
    <Carousel />
  </div>;
};

export default HomePage;
