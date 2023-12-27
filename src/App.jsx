import { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  
  const createNewRecipe = (recipe) => {
    setRecipes((currentRecipes) => [...currentRecipes, recipe]);
  };
  
const deleteRecipe = (index) => {
    // Make a copy of the recipes array to avoid directly mutating state
    const updatedRecipes = [...recipes];
    
    // Remove the recipe at the specified index
    updatedRecipes.splice(index, 1);

    // Update state with the modified recipes array
    setRecipes(updatedRecipes);
  };

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createNewRecipe={createNewRecipe} />
    </div>
  );
}

export default App;
