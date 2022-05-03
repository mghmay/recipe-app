import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import { createSlice } from "@reduxjs/toolkit";

export const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      return state.push(action.payload)
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    }
  }
})

export default favoriteRecipesSlice.reducer;

export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;

export const selectAllFavoriteRecipes = (state) => state.favoriteRecipes

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectAllFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);
  return favoriteRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.name.toLowerCase()));
}

