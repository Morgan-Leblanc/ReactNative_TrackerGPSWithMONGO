import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  console.log(locations.length);
  
  return (
    <View>
      <Input
        placeholder="Enter Name .."
        onChangeText={changeName}
        value={name}
      />
      <Spacer />
      {recording ? (
        <Button title="Stop" onPress={stopRecording}></Button>
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </View>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
