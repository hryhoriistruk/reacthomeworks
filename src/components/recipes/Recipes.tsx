import { FC, useEffect, useState } from "react";
import { IRecipe } from "../../models/RecipeModel";
import { getAllRecipes } from "../../services/recipes.api.service";
import Recipe from "../recipe/Recipe";

const Recipes: FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    getAllRecipes().then((res) => {
      setRecipes(res.data.recipes);
    });
  }, []);

  return (
    <div>
      {recipes.map(({ id, name, mealType, cuisine, instructions, image }) => (
        <Recipe
          key={id}
          name={name}
          mealType={mealType}
          cuisine={cuisine}
          instructions={instructions}
          image={image}
        />
      ))}
    </div>
  );
};

export default Recipes;
