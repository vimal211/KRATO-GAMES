import React, { useContext } from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import { DataContext } from "../../../Context/DataContext";
import { default as Caro } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import axios from "axios";

function Home() {
  const [popular, recommended, genre] = useContext(DataContext);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const renderGames = (category) => {
    let fragment;
    let cato = category === "popular" ? popular : recommended;
    if (popular.length > 2) {
      fragment = (
        <Caro
          containerClass="carousel-container"
          ssr={true}
          responsive={responsive}
          infinite={true}
        >
          {cato.map((game) => {
            return (
              <div className="slide">
                <img
                  className="slide_img"
                  src={game.background_image}
                  alt={game.name}
                />
                <div className="slide_bottom">
                  <span className="game_name">{game.name}</span>
                  <span className="game_rating">{game.rating}/5</span>
                </div>
              </div>
            );
          })}
        </Caro>
      );
    }
    return fragment;
  };
  return (
    <div className="Home">
      <Carousel interval={3000} indicators={false} className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 img"
            src="https://cpb-us-w2.wpmucdn.com/sites.uwm.edu/dist/8/569/files/2020/12/Thumbnail-2.png"
            alt="Cyberpunk 2077"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img"
            src="https://img.phonandroid.com/2021/09/battlefield-2042-report.jpg"
            alt="BattleField 2042"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img"
            src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg"
            alt="Grand Theft Auto V"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img"
            src="https://imgix.bustle.com/uploads/image/2020/11/20/3a8e9823-f988-40b4-ac8b-f049e52cb0c7-191576-far-cry-6-key-visual-orig-2-article_image_t-1.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
            alt="Farcry 6"
          />
        </Carousel.Item>
      </Carousel>
      <div className="section_Container">
        <p>Popular</p>
        {renderGames("popular")}
      </div>
      <div className="section_Container">
        <p>Recommended</p>
        {renderGames("recommended")}
      </div>
    </div>
  );
}

export default Home;
