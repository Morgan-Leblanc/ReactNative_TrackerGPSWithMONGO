import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { SafeAreaView } from "react-navigation";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3> CreateTrack</Text>
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
