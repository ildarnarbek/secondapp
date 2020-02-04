import { FETCH_USER_PROFILE } from "./userActions";

const defaultState = {
  userprofile: []
};
const userProfileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return {
        ...state,
        userprofile: action.payload
      };
    default:
      return state;
  }
};

export default userProfileReducer;
