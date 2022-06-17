import { createContext, useState } from "react";

// named with uppercase as it will be used like a component
const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  // note that we are saving the id of the meals here!
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  // function used to handle removal of an item from the favorites category
  const addFavorite = (id) => {
    setFavoriteMealIds((prevState) => {
      return [...prevState, id];
    });
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((prevState) => {
      return prevState.filter((mealId) => mealId !== id);
    });
  };

  // construct your value object and make sure the property names
  // match the ones used to create the initial context
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

module.exports = {
  FavoritesContext,
  FavoritesContextProvider,
};
