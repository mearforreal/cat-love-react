import React, { useEffect, useState } from "react";
import "./Favorites.css";

function Favorites() {
  const [favCats, setFavCats] = useState([]);
  const cats_storage = JSON.parse(localStorage.getItem("favorite_cats"));

  useEffect(() => {
    setFavCats(cats_storage);
  }, [cats_storage]);

  return (
    <div className="favorites_wrapper">
      <div className="faorites__container">
        {favCats.map((fav) => (
          <img src={fav} alt="fav_cats" />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
