import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
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
            alt="Grand Theft Auto V"
          />
        </Carousel.Item>
      </Carousel>
      <div className="popular_Container">
        <p>Popular</p>
      </div>
    </div>
  );
}

export default Home;
