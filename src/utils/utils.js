export function checkOrdersIngredients(arr) {
    return arr.filter(item => item.ingredients.every(el => el));
};