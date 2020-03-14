import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import { StyleSheet, View } from "react-native";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(
    AuthContext
  );

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink RouteName="Signin" text="You have an acount? Sign In !" />
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
