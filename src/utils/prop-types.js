import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
  name: PropTypes.string,
  _id: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string
});

export const orderPropType = PropTypes.shape({
  name: PropTypes.string,
  _id: PropTypes.string,
  status: PropTypes.string,
  ingredients: PropTypes.array,
  createdAt: PropTypes.instanceOf(Date),
  number: PropTypes.number,
});
