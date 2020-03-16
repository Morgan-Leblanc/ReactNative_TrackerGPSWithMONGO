import React, { useContext } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.1,
      //   longitudeDelta: 0.1
      // }}
    >
      <Circle
        radius={30}
        strokeColor={"rgba(158,158,255,1.0)"}
        fillColor={"rgba(158,158,255,0.3)"}
        center={currentLocation.coords}
      />
      {/* // <Polyline coordinates={points} /> */}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});
