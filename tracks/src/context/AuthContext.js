//Flow for Context
import createDataContext from "./createDataContext";
// Call API
import trackerApi from "../api/tracker";
//Import of  Storage  for the token
import { AsyncStorage } from "react-native";
//import of own flow for navigate outside the router
import { navigate } from "../navigationRef";

const authReducer = (state, actions) => {
  switch (actions.type) {
    case "add_error":
      return { ...state, errorMessage: actions.payload };
    case "signup":
      return { errorMessage: "", token: actions.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up"
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in"
    });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("Signin");
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem("token", token);
  if (token) {
    dispatch({ type: "signup", payload: token });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};
const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_error_message" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { tryLocalSignin, clearErrorMessage, signin, signout, signup },
  { token: null, errorMessage: "" }
);
