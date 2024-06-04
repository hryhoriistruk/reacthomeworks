import { FC } from "react";

export interface IRecipeProps {
  id?: number;
  name: string;
  ingredients?: string[];
  instructions: string[];
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
  servings?: number;
  difficulty?: string;
  cuisine: string;
  caloriesPerServing?: number;
  tags?: string[];
  userId?: number;
  image?: string;
  rating?: number;
  reviewCount?: number;
  mealType: string[];
}

export type IRecipeTypeProps = IRecipeProps & { children?: React.ReactNode };

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
