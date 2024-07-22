import React from 'react';
import { useFavorites } from './FavoritesContext';

export const ListOfStud = () => {
  const { addToFavorites,isFavorited } = useFavorites();
  const [listArr, setListArr] = React.useState([
    "parveena", "Gayu", "Geetha", "Tamil", "Bala", "candy", "Karthik"
  ]);

  return (
    <div>
      <ul>
        {listArr.map((item, index) => (
          <li key={index} style={{ display: "flex", gap: "90px", margin: "10px", textAlign: "center" }}>
            <p>{index + 1} . {item}</p>
            <button
              style={{ background: "#000", color: "#fff", padding: "10px" }}
              onClick={() => addToFavorites(item)}
              disabled={isFavorited(item)}
            >
              {isFavorited(item) ? "Added to Favourite" : "Add to Favourite"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
