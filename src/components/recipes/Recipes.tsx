import { FC, useEffect, useState } from "react";
import Recipe, { IRecipeProps } from "../recipe/Recipe";

const Recipes: FC = () => {
  const [recipes, setRecipes] = useState<IRecipeProps[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((val) => {
        setRecipes(val.recipes);
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
