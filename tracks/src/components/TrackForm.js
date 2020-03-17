import React, { useContext } from "react";
import { Button } from "react-native-elements";
import { Hoshi as InputHoshi } from "react-native-textinput-effects";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
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
      <InputHoshi
        placeholder="Enter Name .."
        onChangeText={changeName}
        value={name}
      />
      <Spacer />
      <Spacer>
        {recording ? (
          <Button
            raised={true}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#b76c94", "pink"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 }
            }}
            title="Stop"
            onPress={stopRecording}
          ></Button>
        ) : (
          <Button
            raised={true}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#b76c94", "pink"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 }
            }}
            title="Start Recording"
            onPress={startRecording}
          />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button
            raised={true}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#b76c94", "pink"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 }
            }}
            title="Save Recording"
            onPress={saveTrack}
          />
        ) : null}
      </Spacer>
    </View>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
