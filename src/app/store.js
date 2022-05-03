import { configureStore } from '@reduxjs/toolkit';
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import searchTermReducer from '../features/searchTerm/searchTermSlice.js';
import allRecipesReducer from '../features/allRecipes/allRecipesSlice';

export const store = configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  },
});
