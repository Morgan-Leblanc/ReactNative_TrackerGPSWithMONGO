import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <View>
      <Input
        placeholder="Enter Name .."
        onChangeText={changeName}
        value={name}
      />
      <Spacer />
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording}></Button>
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </View>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
