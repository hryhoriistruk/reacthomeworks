import { FC } from "react";
import { IRecipe } from "../../models/RecipeModel";

export type IRecipeTypeProps = IRecipe & { children?: React.ReactNode };

const Recipe: FC<IRecipeTypeProps> = ({
  name,
  mealType,
  cuisine,
  instructions,
  image,
}) => {
  return (
    <div>
      <h2>
        {name}. {mealType}. {cuisine}
      </h2>
      <ul>
        {instructions.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </ul>
      <img src={image} alt={name} />
    </div>
  );
};

export default Recipe;
