import {
  GET_USERS,
  GET_INSTRUCTOR,
  GET_USERBYID,
  GET_INSTRUCTORBYID,
} from "../constans";
import axios from "axios";

export const getUsers = () => (dispatch) => {
  return axios
    .get("https://api.cariilmu.co.id/api/v1/public/course")
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    });
};

export const getInstructor = () => (dispatch) => {
  return axios
    .get("https://api.cariilmu.co.id/api/v1/public/instructor")
    .then((res) => {
      dispatch({
        type: GET_INSTRUCTOR,
        payload: res.data,
      });
    });
};

export const getUserById = (id) => (dispatch) => {
  return axios
    .get(`https://api.cariilmu.co.id/api/v1/public/course/${id}`)
    .then((res) => {
      dispatch({
        type: GET_USERBYID,
        payload: res.data,
      });
    });
};

export const getInstructorById = (id) => (dispatch) => {
  return axios
    .get(`https://api.cariilmu.co.id/api/v1/public/instructor/${id}`)
    .then((res) => {
      console.log(res, "get ID Instructor");
      dispatch({
        type: GET_INSTRUCTORBYID,
        payload: res.data,
      });
    });
};
