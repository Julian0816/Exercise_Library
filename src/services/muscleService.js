import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const muscleService = async (muscle) => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
      }
    );

    const exerciseData = response.data.map((exercise) => ({
      name: exercise.name,
      type: exercise.type,
      muscle: exercise.muscle,
      equipment: exercise.equipment,
      difficulty: exercise.difficulty,
      instructions: exercise.instructions,
    }));

    return exerciseData;
  } catch (error) {
    console.error("Request failed:", error);
    return [];
  }
};
