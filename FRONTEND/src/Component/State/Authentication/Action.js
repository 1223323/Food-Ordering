import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE, 
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE, 
  LOGOUT,
  ADD_TO_FAVOURITE_REQUEST,
  ADD_TO_FAVOURITE_SUCCESS,
  ADD_TO_FAVOURITE_FAILURE,
} from "./ActionType";
import axios from "axios";
const API_URL = "http://localhost:5454"; 

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/signup`,
      reqData.userData
    );
    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    reqData.navigate(data.role === "ROLE_RESTAURANT_OWNER" ? "/admin/restaurant" : "/");
    dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.response?.data?.message || error.message });
    console.error("Registration error:", error);
  }
};

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/signin`,
      reqData.userData
    ); 
    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message }); // Corrected here
    console.log("error", error);
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_URL}/api/users/profile`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error.message }); // Corrected here
    console.log("error", error);
  }
};

export const logout = (navigate) => async (dispatch) => {
  dispatch({ type: ADD_TO_FAVOURITE_FAILURE });
  try {
    localStorage.removeItem("jwt");
    dispatch({ type: LOGOUT });
    console.log("logout Success");
  } catch (error) {
    console.log("error", error);
  }
  navigate("/");
};

export const addToFavourite =
  ({ jwt, restaurantId }) =>
  async (dispatch) => {
    dispatch({ type: ADD_TO_FAVOURITE_REQUEST });
    try {
      const { data } = await axios.put(
        `/api/restaurants/${restaurantId}/add-favourite`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: ADD_TO_FAVOURITE_SUCCESS, payload: data });
      console.log("add to favourite success", data);
    } catch (error) {
      dispatch({ type: ADD_TO_FAVOURITE_FAILURE, payload: error.message });
      console.log("error", error);
    }
  };
