import actions from "../actionTypes";

const initialState = {
  loading: false,
  list: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return {
        ...state,
        loading: action.value
      };
    case actions.SET_CLIENTS:
      return {
        ...state,
        list: action.value
      };
    default:
      return state;
  }
};
