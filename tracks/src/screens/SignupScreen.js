import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>SignUp For Tracker</Text>
      </Spacer>
      <Input
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newEmail => setEmail(newEmail)}
        label="Email"
      />
      <Spacer />
      <Input
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newPassword => setPassword(newPassword)}
        label="Password"
      />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100
  }
});
