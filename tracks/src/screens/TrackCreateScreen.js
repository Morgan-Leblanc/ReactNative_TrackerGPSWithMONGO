import React, { useContext, useCallback } from "react";
//Style
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
//Nav
import { SafeAreaView, withNavigationFocus } from "react-navigation";
//Context
import { Context as LocationContext } from "../context/LocationContext";
//Hooks
import useLocation from "../hooks/useLocation";
//Components
import TrackForm from "../components/TrackForm";
import Map from "../components/Map";
//Fake datas for see the user in mouvement
import "../_mockLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer />
      <Map />
      {err ? <Text>Please enable location services </Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});
