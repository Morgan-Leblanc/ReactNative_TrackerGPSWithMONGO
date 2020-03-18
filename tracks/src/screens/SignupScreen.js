import React, { useContext } from "react";
//Style
import { StyleSheet, View } from "react-native";
//Nav
import { NavigationEvents } from "react-navigation";
import NavLink from "../components/NavLink";
// Form
import AuthForm from "../components/AuthForm";
//Context
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

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
