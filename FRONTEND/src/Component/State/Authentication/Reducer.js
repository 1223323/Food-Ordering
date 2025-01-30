import { Favorite } from "@mui/icons-material";
import { GET_USER_FAILURE } from "./ActionType";

// Define action types as constants
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const REGISTER_REQUEST = "REGISTER_REQUEST";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAILURE = "REGISTER_FAILURE";
const LOGOUT = "LOGOUT";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  success: null,
  favorites: [],
  jwt: null,
};

// Function to check if item is already in favorites
const isPresentInFavourites = (favorites, item) => {
  return favorites && favorites.some(fav => fav.id === item.id);
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
        jwt: action.payload.token,
        error: null,
        success: "Registered Successfully",
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
        error: null,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...initialState,
        loading: false,
      };

    case "ADD_TO_FAVORITE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        favorites: isPresentInFavourites(state.favorites, action.payload)
          ? state.favorites.filter(item => item.id !== action.payload.id)
          : [...state.favorites, action.payload],
        success: "Restaurant added to favorites",
        error: null,
      };

    case "GET_FAVORITES_SUCCESS":
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case GET_USER_FAILURE:
    case "ADD_TO_FAVORITE_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case "GET_FAVORITES_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;