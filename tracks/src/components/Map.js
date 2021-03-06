import React, { useContext } from "react";
//Style
import { StyleSheet, ActivityIndicator } from "react-native";
//Map and  props
import MapView, { Polyline, Circle } from "react-native-maps";
//Context
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations }
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
    >
      <Circle
        radius={30}
        strokeColor={"rgba(158,158,255,1.0)"}
        fillColor={"rgba(158,158,255,0.3)"}
        center={currentLocation.coords}
      />
      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 250
  }
});
