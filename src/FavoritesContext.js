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


  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, isFavorited }}>
      {children}
    </FavoritesContext.Provider>
  );
};