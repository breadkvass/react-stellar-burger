const ingredientTypes = <const>['bun', 'sauce', 'main'];

export type TIngredientType = typeof ingredientTypes[number];

export function isIngredientType(value: string): value is TIngredientType {
  return !!ingredientTypes.find((ingredientType) => value === ingredientType);
}