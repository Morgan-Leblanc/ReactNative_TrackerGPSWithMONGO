import React, { useState, useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Button, SocialIcon as LargeButton } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
//Import for style from other librairy
import { LinearGradient } from "react-native-linear-gradient";
import { Hoshi as InputStyle } from "react-native-textinput-effects";


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>SignUp For Tracker</Text>
      </Spacer>
      <InputStyle
        style={styles.input}
        label={"Email"}
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newEmail => setEmail(newEmail)}
      />
      <Spacer />
      <InputStyle
        style={styles.input}
        label={"Password"}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newPassword => setPassword(newPassword)}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          raised={true}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ["blue", "pink"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 }
          }}
          title="Sign Up"
          onPress={() => signup({ email, password })}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Spacer />
          <LargeButton button light title="You have un acount ? Go to signIn" />
        </TouchableOpacity>
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
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15
  },
  input: {
    borderColor: "#b76c94",
    padding: 16,
    backgroundColor: "#F9F7F6"
  },
});
