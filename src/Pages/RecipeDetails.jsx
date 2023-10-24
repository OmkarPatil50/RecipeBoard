import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "..";
import "./RecipeDetails.css";

export function RecipeDetails() {
  const { recipeId } = useParams();
  const { state, dispatch } = useContext(AppContext);
  const [targetRecipe, setTargetRecipe] = useState({});
  const getRecipe = () => {
    const recipe = state.recipeList.filter(({ id }) => id == recipeId);

    dispatch({ type: "UPDATE_SPECIFIC_RECIPE", payload: recipe });
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div className="recipe-details-page">
      <Link to="/">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <h1>{state.specificRecipe[0]?.recipeName}</h1>
      <div className="recipe-details-section">
        <img src={targetRecipe.dishImageLink} alt="" />
        <div className="recipe-details">
          <h2>Cuisine : {state.specificRecipe[0]?.cuisineType}</h2>
          <h3>Ingredients : </h3>
          <ol>
            {state.specificRecipe[0]?.ingredients?.map((item) => {
              return <li>{item}</li>;
            })}
          </ol>
          <h3>Instructions : </h3>
          <ol>
            {state.specificRecipe[0]?.instructions?.map((item) => {
              return <li>{item}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
