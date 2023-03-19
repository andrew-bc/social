import { getAutharization } from "./authReducer";

const INIT_APP = "INIT_APP";

let initialState = {
  initialized: false,
};

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP: {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INIT_APP });

export const initApp = () => {
  return (dispatch) => {
    dispatch(getAutharization()).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
