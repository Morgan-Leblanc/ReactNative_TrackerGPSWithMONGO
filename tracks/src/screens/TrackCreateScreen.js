import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text, Header } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import Map from "../components/Map";
import { FontAwesome } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
import { LinearGradient } from "react-native-linear-gradient";

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
      <Header
        centerComponent={{
          text: "CreateTrack",
          style: { color: "whitesmoke", fontSize: 22, marginBottom: 15, fontWeight: "bold"}
        }}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ["#b76c94", "pink"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 }
        }}
        containerStyle={{
          height: 70,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      />
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
