import allRecipesData from '../../data/data'
import { selectSearchTerm } from '../searchTerm/searchTermSlice'
import { createSlice } from '@reduxjs/toolkit';

// note that the createSlice method automatically creates action creators which we export at
// the bottom of the file
export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  intitialState: allRecipesData,
  reducers: {
    loadData: (state, action) => {
      return state.push(action.payload);
    },
    addRecipe: (state, action) => {
      return state.push(action.payload)
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    }
  }
})

export default allRecipesSlice.reducer

export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);
  return allRecipes.filter((recipe) => {
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
}

export const { loadData, addRecipe, removeRecipe } = allRecipesSlice.actions