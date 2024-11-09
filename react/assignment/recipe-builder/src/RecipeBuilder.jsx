import React, { useState } from 'react';

function RecipeBuilder() {
  // State to store recipe details
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '', unit: 'grams' }]);
  const [instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [errors, setErrors] = useState({});
  const [submittedRecipe, setSubmittedRecipe] = useState(null);

  // Handle input changes for all fields
  const handleRecipeNameChange = (e) => setRecipeName(e.target.value);
  const handleInstructionsChange = (e) => setInstructions(e.target.value);
  const handlePrepTimeChange = (e) => setPrepTime(e.target.value);

  // Handle dynamic ingredient changes
  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = ingredients.map((ingredient, i) => 
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    setIngredients(updatedIngredients);
  };

  // Add a new ingredient
  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', unit: 'grams' }]);
  };

  // Remove an ingredient
  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  // Validate the form fields
  const validate = () => {
    const validationErrors = {};

    // Recipe name validation
    if (recipeName.length < 3) {
      validationErrors.recipeName = 'Recipe name must be at least 3 characters long.';
    }

    // Ingredient validation
    ingredients.forEach((ingredient, index) => {
      if (ingredient.name.length < 2) {
        validationErrors[`ingredientName${index}`] = 'Ingredient name must be at least 2 characters.';
      }
      if (ingredient.quantity <= 0) {
        validationErrors[`ingredientQuantity${index}`] = 'Quantity must be greater than zero.';
      }
    });

    // Preparation time validation
    if (prepTime <= 0) {
      validationErrors.prepTime = 'Preparation time must be greater than zero.';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmittedRecipe({
        recipeName,
        ingredients,
        instructions,
        prepTime,
      });

      // Clear form on successful submission
      setRecipeName('');
      setIngredients([{ name: '', quantity: '', unit: 'grams' }]);
      setInstructions('');
      setPrepTime('');
      setErrors({});
    }
  };

  // Clear the form
  const clearForm = () => {
    setRecipeName('');
    setIngredients([{ name: '', quantity: '', unit: 'grams' }]);
    setInstructions('');
    setPrepTime('');
    setErrors({});
    setSubmittedRecipe(null);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Recipe Builder</h2>
      <form onSubmit={handleSubmit}>
        {/* Recipe Name */}
        <div>
          <label>Recipe Name:</label>
          <input type="text" value={recipeName} onChange={handleRecipeNameChange} />
          {errors.recipeName && <p style={{ color: 'red' }}>{errors.recipeName}</p>}
        </div>

        {/* Ingredients */}
        <h3>Ingredients</h3>
        {ingredients.map((ingredient, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <input
              type="text"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
            />
            {errors[`ingredientName${index}`] && (
              <p style={{ color: 'red' }}>{errors[`ingredientName${index}`]}</p>
            )}

            <input
              type="number"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
            />
            {errors[`ingredientQuantity${index}`] && (
              <p style={{ color: 'red' }}>{errors[`ingredientQuantity${index}`]}</p>
            )}

            <select
              value={ingredient.unit}
              onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
            >
              <option value="grams">grams</option>
              <option value="cups">cups</option>
              <option value="tablespoons">tablespoons</option>
            </select>

            <button type="button" onClick={() => removeIngredient(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addIngredient}>Add Ingredient</button>

        {/* Instructions */}
        <div>
          <label>Instructions:</label>
          <textarea value={instructions} onChange={handleInstructionsChange} />
        </div>

        {/* Preparation Time */}
        <div>
          <label>Preparation Time (in minutes):</label>
          <input type="number" value={prepTime} onChange={handlePrepTimeChange} />
          {errors.prepTime && <p style={{ color: 'red' }}>{errors.prepTime}</p>}
        </div>

        <button type="submit">Submit Recipe</button>
        <button type="button" onClick={clearForm} style={{ marginLeft: '10px' }}>
          Clear Form
        </button>
      </form>

      {/* Display Submitted Recipe */}
      {submittedRecipe && (
        <div style={{ marginTop: '20px' }}>
          <h3>Recipe Summary</h3>
          <p><strong>Recipe Name:</strong> {submittedRecipe.recipeName}</p>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {submittedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.quantity} {ingredient.unit} of {ingredient.name}</li>
            ))}
          </ul>
          <p><strong>Instructions:</strong> {submittedRecipe.instructions}</p>
          <p><strong>Preparation Time:</strong> {submittedRecipe.prepTime} minutes</p>
        </div>
      )}
    </div>
  );
}

export default RecipeBuilder;
