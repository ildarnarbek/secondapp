import { FETCH_USER_PROFILE } from "./userActions";

const defaultState = {
  userData:{
    userBalance: "",
    userName:""
  }
};
const userProfileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return {
        ...state,
        userData: action.payload
      };
    default:
      return state;
  }
};

export default userProfileReducer;
