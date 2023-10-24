import { useEffect, useReducer } from "react";
import { AppContext } from "..";
import { RecipeList } from "../Data/Data";

export function AppContextProvider({ children }) {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "FILTER_ITEMS_BY_NAME": {
        return {
          ...state,
          isSearchByCuisine: false,
          isSearchByIngredients: false,
          isSearchByName: true
        };
      }

      case "FILTER_ITEMS_BY_INGREDIENTS": {
        return {
          ...state,
          isSearchByCuisine: false,
          isSearchByIngredients: true,
          isSearchByName: false
        };
      }

      case "FILTER_ITEMS_BY_CUISINE": {
        return {
          ...state,
          isSearchByCuisine: true,
          isSearchByIngredients: false,
          isSearchByName: false
        };
      }

      case "UPDATE_SEARCH_TEXT": {
        return {
          ...state,
          searchText: action.payload
        };
      }

      case "UPDATE_FILTERED_LIST": {
        return { ...state, filteredList: action.payload };
      }
      case "DELETE_RECIPE": {
        return {
          ...state,
          filteredList: state.filteredList.filter(
            ({ id }) => id !== action.payload
          ),
          recipeList: state.recipeList.filter(({ id }) => id !== action.payload)
        };
      }

      case "ADD_NEW_RECIPE": {
        return {
          ...state,
          recipeList: [
            ...state.recipeList,
            {
              ...action.payload,
              recipeName: action.payload.name,
              ingredients: action.payload.ingredients,
              instructions: action.payload.instructions,
              cuisineType: action.payload.type
            }
          ],
          filteredList: [
            ...state.filteredList,
            {
              ...action.payload,
              recipeName: action.payload.name,
              ingredients: action.payload.ingredients,
              instructions: action.payload.instructions,
              cuisineType: action.payload.type
            }
          ]
        };
      }

      case "UPDATE_SPECIFIC_RECIPE": {
        return { ...state, specificRecipe: action.payload };
      }

      default:
        return state;
    }
  };

  const initialValue = {
    recipeList: RecipeList,
    filteredList: RecipeList,
    searchText: "",
    isSearchByName: true,
    isSearchByIngredients: false,
    isSearchByCuisine: false,
    specificRecipe: {}
  };

  const [state, dispatch] = useReducer(reducerFunction, initialValue);
  useEffect(() => {
    localStorage.setItem("list", state.recipeList);
  }, [state.recipeList]);

  useEffect(() => {
    let data = [...state.recipeList];
    if (state.isSearchByName) {
      data = data.filter((item) => {
        return item.recipeName
          .toUpperCase()
          .includes(state.searchText.toUpperCase());
      });
    }
    if (state.isSearchByIngredients) {
      data = data.filter((item) => {
        return item.ingredients.some(
          (ele) =>
            ele.toUpperCase().includes(state.searchText.toUpperCase()) === true
        );
      });
    }
    if (state.isSearchByCuisine) {
      data = data.filter((item) => {
        return item.cuisineType
          .toUpperCase()
          .includes(state.searchText.toUpperCase());
      });
    }
    dispatch({ type: "UPDATE_FILTERED_LIST", payload: data });
  }, [
    state.isSearchByCuisine,
    state.isSearchByIngredients,
    state.isSearchByName,
    state.searchText
  ]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
