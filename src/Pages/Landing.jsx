import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "..";
import { v4 as uuid } from "uuid";
import "./Landing.css";

export function Landing() {
  const { state, dispatch } = useContext(AppContext);
  const [showNewRecipeBox, setShowNewRecipeBox] = useState(false);
  const [newRecipeData, setNewRecipeData] = useState({
    id: uuid(),
    name: "",
    type: "",
    ingredients: [],
    instructions: [],
    dishImageLink: "https://picsum.photos/250/250"
  });

  return (
    <div className="main-page">
      <div className="search-section">
        <input
          type="search"
          name="search-item"
          placeholder="Search Item"
          onChange={(event) =>
            dispatch({
              type: "UPDATE_SEARCH_TEXT",
              payload: event.target.value
            })
          }
        />
        <div className="filters-section">
          Filters:
          <label htmlFor="name">
            <input
              type="radio"
              name="filter"
              onChange={() =>
                dispatch({
                  type: "FILTER_ITEMS_BY_NAME"
                })
              }
            />
            Name
          </label>
          <label htmlFor="ingredients">
            <input
              type="radio"
              name="filter"
              onChange={() =>
                dispatch({
                  type: "FILTER_ITEMS_BY_INGREDIENTS"
                })
              }
            />
            Ingredients
          </label>
          <label htmlFor="cuisine">
            <input
              type="radio"
              name="filter"
              onChange={() =>
                dispatch({
                  type: "FILTER_ITEMS_BY_CUISINE"
                })
              }
            />
            Cuisine
          </label>
        </div>
        <button onClick={() => setShowNewRecipeBox(true)}>
          Add New Recipe
        </button>
      </div>
      {showNewRecipeBox ? (
        <div className="new-recipe-box">
          <div className="new-recipe-container">
            <i
              className="fa-solid fa-xmark"
              onClick={() => {
                setShowNewRecipeBox(false);
                setNewRecipeData({
                  name: "",
                  type: "",
                  ingredients: "",
                  instructions: "",
                  dishImageLink: "https://picsum.photos/250/250"
                });
              }}
            ></i>
            <label htmlFor="name">
              Name:{" "}
              <input
                type="text"
                value={newRecipeData.name}
                onChange={(event) => {
                  setNewRecipeData({
                    ...newRecipeData,
                    name: event.target.value
                  });
                }}
              />
            </label>
            <label htmlFor="type">
              Type:{" "}
              <input
                type="text"
                value={newRecipeData.type}
                onChange={(event) => {
                  setNewRecipeData({
                    ...newRecipeData,
                    type: event.target.value
                  });
                }}
              />
            </label>
            <label htmlFor="ingredients">
              Ingredients:{" "}
              <input
                type="text"
                value={newRecipeData.ingredients}
                onChange={(event) => {
                  setNewRecipeData({
                    ...newRecipeData,
                    ingredients: [
                      ...newRecipeData.ingredients,
                      event.target.value
                    ]
                  });
                }}
              />
            </label>
            <label htmlFor="instructions">
              Instructions:{" "}
              <input
                type="text"
                value={newRecipeData.instructions}
                onChange={(event) => {
                  setNewRecipeData({
                    ...newRecipeData,
                    instructions: [
                      ...newRecipeData.instructions,
                      event.target.value
                    ]
                  });
                }}
              />
            </label>
            <button
              onClick={() => {
                if (
                  newRecipeData.name.length &&
                  newRecipeData.type.length &&
                  newRecipeData.ingredients.length &&
                  newRecipeData.instructions.length
                ) {
                  dispatch({ type: "ADD_NEW_RECIPE", payload: newRecipeData });
                  setShowNewRecipeBox(false);
                  setNewRecipeData({
                    name: "",
                    type: "",
                    ingredients: "",
                    instructions: "",
                    dishImageLink: "https://picsum.photos/250/250"
                  });
                }
              }}
            >
              Add
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="recipelist-section">
        <h1>All Recipes</h1>
        <ul className="recipe-list">
          {state.filteredList?.map((recipe) => {
            const {
              recipeName,
              ingredients,
              instructions,
              cuisineType,
              dishImageLink,
              id
            } = recipe;

            return (
              <li>
                <div className="list-head">
                  <Link to={`/${id}`} className="dish-image">
                    <img src={dishImageLink} alt="" />
                  </Link>

                  <div className="tags">
                    <i className="fa-solid fa-pencil"></i>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() =>
                        dispatch({ type: "DELETE_RECIPE", payload: id })
                      }
                    ></i>
                  </div>
                </div>
                <div className="recipe-info">
                  <h3>{recipeName}</h3>
                  <p>Cuisine Type: {cuisineType}</p>
                  <p>
                    Ingredients:{" "}
                    <Link to={`/${id}`}>
                      See Recipe <i className="fa-solid fa-angle-right"></i>
                    </Link>{" "}
                  </p>
                  <p>
                    Instructions:{" "}
                    <Link to={`/${id}`}>
                      See Recipe <i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
