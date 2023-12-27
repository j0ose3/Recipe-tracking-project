import { useState } from "react";

function RecipeCreate({createNewRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  // Event handlers
  const handleNameChange = (e) => setName(e.target.value);
  const handleCuisineChange = (e) => setCuisine(e.target.value);
  const handlePhotoChange = (e) => setPhoto(e.target.value);
  const handleIngredientsChange = (e) => setIngredients(e.target.value);
  const handlePreparationChange = (e) => setPreparation(e.target.value);
  
  // Form Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let recipe = {
      name, 
      cuisine,
      photo,
      ingredients,
      preparation
    };
    
    console.log(recipe);
    
    createNewRecipe(recipe);
    
    // TODO: Clear the form by resetting state
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
    
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" name="name" placeholder="name" value={name} onChange={handleNameChange} />
            </td>
            <td>
              <input type="text" name="cuisine" placeholder="cuisine" value={cuisine} onChange={handleCuisineChange} />
            </td>   
            <td>
              <input type="url" name="photo" placeholder="URL" value={photo} onChange={handlePhotoChange} />
            </td>
            <td>
              <textarea type="text" name="ingredients" placeholder="Ingredients" value={ingredients} onChange={handleIngredientsChange} />
            </td>
            <td>
              <textarea type="text" name="preparation" placeholder="Preparation" value={preparation} onChange={handlePreparationChange} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;