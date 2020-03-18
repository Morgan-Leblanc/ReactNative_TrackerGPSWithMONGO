import React from "react";
//Import of navigators flow
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
//Import of Screen components
import AcountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
//Import of Provider
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
//For navigate outside Navigator
import { setNavigator } from "./src/navigationRef";
//Import of Icons
import { FontAwesome } from "@expo/vector-icons";

//Don't show header function
const doNotShowHeaderOption = {
  navigationOptions: {
    headerShown: false
  }
};
//Should put tracklistFlow in a const for modif
const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

//Navigator Flow
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: { screen: SignupScreen, ...doNotShowHeaderOption },
    Signin: { screen: SigninScreen, ...doNotShowHeaderOption }
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    Track: TrackCreateScreen,
    Account: AcountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
