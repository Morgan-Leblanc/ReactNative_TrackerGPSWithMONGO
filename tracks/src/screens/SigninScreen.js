import React, { useContext } from "react";
//Context
import { Context as AuthContext } from "../context/AuthContext";
//Nav
import { NavigationEvents } from "react-navigation";
import NavLink from "../components/NavLink";
//Form
import AuthForm from "../components/AuthForm";
//Style
import { StyleSheet, View } from "react-native";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign In To Your account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink RouteName="Signup" text="You haven't an acount ? Sign Up !" />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100
  }
});
