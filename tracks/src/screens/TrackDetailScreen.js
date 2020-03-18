import React, { useContext } from "react";
//Style
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import Spacer from "../components/Spacer"
//Context
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find(track => track._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <View>
      <Text style={styles.titleTrack}>{track.name}</Text>
      <Spacer />
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </View>
  );
};

TrackDetailScreen.navigationOptions = {
  title: "Track Detail",
  headerStyle: {
    backgroundColor: '#b76c94',
  }
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  map: {
    height: 300
  },
  titleTrack:{
    fontSize: 20,
    marginTop: 5,
    textAlign: "center",
    textTransform: "uppercase",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 10
  }
});
