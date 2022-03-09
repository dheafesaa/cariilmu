import {
  GET_USERS,
  GET_INSTRUCTOR,
  GET_USERBYID,
  GET_INSTRUCTORBYID,
} from "../constans";

const initialState = {
  users: [],
  user: {},
  instructors: [],
  instructor: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USERS}`:
      return {
        ...state,
        users: action.payload,
      };
    case `${GET_INSTRUCTOR}`:
      return {
        ...state,
        instructors: action.payload,
      };
    case `${GET_USERBYID}`:
      return {
        ...state,
        user: action.payload,
      };
    case `${GET_INSTRUCTORBYID}`:
      return {
        ...state,
        instructor: action.payload,
      };
    default:
      return state;
  }
};

export default users;
