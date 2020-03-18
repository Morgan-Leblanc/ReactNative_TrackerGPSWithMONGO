import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};

//This file is used to exit the browser to allow navigation when this is not possible.
