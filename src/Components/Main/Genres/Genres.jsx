import React, { useContext } from "react";
import { DataContext } from "../../../Context/DataContext";
import "./Genres.css";

function Genres() {
  const [popular, recommended, genre] = useContext(DataContext);
  console.log(genre);

  return (
    <div className="genres_container">
      <h3>Genres</h3>
    </div>
  );
}

export default Genres;
