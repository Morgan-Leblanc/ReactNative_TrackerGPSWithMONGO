import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";

const SignupScreen = ({ navigation }) => {
  return (
    <>

      <Input label="Email" />
      <Input label="Password" />
      <Button title="Sign Up" />
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
