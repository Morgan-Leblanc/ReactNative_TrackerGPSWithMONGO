import React, { useContext } from "react";
//Style
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
//Nav
import { NavigationEvents } from "react-navigation";
//Context
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

//Navigation Options for Design
TrackListScreen.navigationOptions = {
  title: " List of Tracks",
  headerStyle: {
    backgroundColor: "#b76c94"
  }
};

export default TrackListScreen;

const styles = StyleSheet.create({});
