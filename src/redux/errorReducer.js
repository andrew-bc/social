const SET_IS_ERROR = "SET_IS_ERROR";
const SET_ERROR_TEXT = "SET_ERROR_TEXT";

let initialState = {
  isError: false,
  errorText: undefined,
};

let errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_ERROR: {
      return { ...state, isError: action.isError };
    }
    case SET_ERROR_TEXT: {
      return { ...state, errorText: action.errorText };
    }
    default:
      return state;
  }
};

export const setIsError = (isError) => ({ type: SET_IS_ERROR, isError });
export const setErrorText = (errorText) => ({ type: SET_ERROR_TEXT, errorText });

export default errorReducer;
