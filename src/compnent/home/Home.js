import React, { useEffect, useState } from "react";
import "./Home.css";

// adf08f84-4e63-47ef-b690-ac4d18eda6d0 api key

function Home() {
  const apiKey = "adf08f84-4e63-47ef-b690-ac4d18eda6d0";

  const [catInfo, setCatInfo] = useState([]);
  const [newFetch, setNewFetch] = useState(0);

  useEffect(() => {
    setCatInfo([]); // empty state on each press
    async function fetchCat(url) {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-api-key": apiKey,
        },
      });
      setCatInfo(await response.json());
    }

    fetchCat("https://api.thecatapi.com/v1/images/search");
  }, [newFetch]);

  const fetchNewCat = () => {
    setNewFetch(newFetch + 1);
  };

  const addToFav = () => {
    let favorites = [];
    const cats_storage = JSON.parse(localStorage.getItem("favorite_cats"));
    if (cats_storage) {
      favorites = [...cats_storage];
      if (catInfo[0]) {
        if (!cats_storage.includes(catInfo[0].url)) {
          favorites = [...favorites, catInfo[0].url];
          localStorage.setItem("favorite_cats", JSON.stringify(favorites));
          alert("Added");
        } else {
          alert("Already added");
        }
      }
    } else {
      if (catInfo[0]) {
        favorites.push(catInfo[0].url);
        localStorage.setItem("favorite_cats", JSON.stringify(favorites));
      }
    }
  };

  return (
    <div>
      <div className="home__header">
        <button onClick={fetchNewCat}>Fetch New Kitty</button>
        <button onClick={addToFav}>Add to Favorite</button>
      </div>

      <div className="home__img">
        {catInfo[0] ? (
          <img src={catInfo[0]?.url} alt="kitty" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
