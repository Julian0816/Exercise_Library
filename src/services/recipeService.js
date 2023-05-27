import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const recipeService = async (query) => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/recipe?query=${query}&=`,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
      }
    );

    const recipeData = response.data.map((recipe) => ({
      title: recipe.title,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
      instructions: recipe.instructions,
    }));

    return recipeData;
  } catch (error) {
    console.error("Request failed:", error);
    return [];
  }
};
