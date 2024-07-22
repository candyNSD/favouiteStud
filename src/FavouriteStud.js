import React from 'react';
import { useFavorites } from './FavoritesContext';

export const FavouriteStud = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div>
      <ul>
        {favorites.map((item, index) => (
          <li key={index} style={{ display: "flex", gap: "90px", margin: "10px", textAlign: "center" }}>
            <p>{index + 1} . {item}</p>
            <button style={{color:"FFF",background:"red", padding:"10px",outline:"none",border:"none"}} onClick={() => removeFromFavorites(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};