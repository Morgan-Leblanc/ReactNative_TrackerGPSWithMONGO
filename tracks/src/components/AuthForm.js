import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer"

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
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
  }
});
