import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { RecipeDetails } from "./Pages/RecipeDetails";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}
