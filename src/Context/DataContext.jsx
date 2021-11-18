import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  let [popular, setPopular] = useState([2, 6]);
  let [recommended, setRecommended] = useState([2, 2]);
  let [genre, setGenre] = useState([2, 2]);
  useEffect(() => {
    axios
      .get("https://api.rawg.io/api/games?key=0938eb1dbfe145428a2e0322ecf6a6a7")
      .then((res) => {
        setPopular(res.data.results);
      });
    axios
      .get(
        "https://api.rawg.io/api/games?key=0938eb1dbfe145428a2e0322ecf6a6a7&page=2"
      )
      .then((res) => {
        setRecommended(res.data.results);
      });
    axios
      .get(
        "https://api.rawg.io/api/genres?key=0938eb1dbfe145428a2e0322ecf6a6a7"
      )
      .then((res) => {
        setGenre(res.data.results);
      });
  }, []);

  return (
    <DataContext.Provider value={[popular, recommended, genre]}>
      {props.children}
    </DataContext.Provider>
  );
};
