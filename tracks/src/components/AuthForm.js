import React, { useState } from "react";
//Style
import Spacer from "./Spacer";
import { StyleSheet} from "react-native";
import { Button, Text } from "react-native-elements";
import { LinearGradient } from "react-native-linear-gradient";
import { Hoshi as InputHoshi } from "react-native-textinput-effects";


const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <InputHoshi
        value={email}
        style={styles.input}
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newEmail => setEmail(newEmail)}
      />
      <Spacer />
      <InputHoshi
        value={password}
        secureTextEntry
        style={styles.input}
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newPassword => setPassword(newPassword)}
      />
      {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          raised={true}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ["#b76c94", "pink"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 }
          }}
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
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
  }
});
