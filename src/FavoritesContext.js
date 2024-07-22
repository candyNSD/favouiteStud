import React, { createContext, useState, useContext } from 'react';

// Create a Context for Favorites
const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };
  const isFavorited = (item) => {
    return favorites.includes(item);
  };

  const removeFromFavorites = (item) => {
    setFavorites((prevFavorites) => prevFavorites.filter(fav => fav !== item));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, isFavorited, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};