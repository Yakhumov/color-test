

const ADD_COLOR = 'ADD_COLOR';
const REMOVE_COLOR = 'REMOVE_COLOR';


export const addColor = (color) => ({
  type: ADD_COLOR,
  color,
});

export const removeColor = (index) => ({
  type: REMOVE_COLOR,
  index,
});

const initialState = {
  colors: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLOR:
      return {
        ...state,
        colors: [...state.colors, action.color],
      };
    case REMOVE_COLOR:
      return {
        ...state,
        colors: state.colors.filter((color, index) => index !== action.index), 
      };
    default:
      return state;
  }
};

export default reducer


