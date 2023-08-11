import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
  id: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number
});
