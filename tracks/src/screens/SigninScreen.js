import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import { StyleSheet, View } from "react-native";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
    const { state, signin } = useContext(AuthContext);

    return (
      <View style={styles.container}>
        <AuthForm
          headerText="Sign In To Your account"
          errorMessage={state.errorMessage}
          submitButtonText="Sign In"
          onSubmit={signin}
        />
        <NavLink RouteName="Signup" text="You haven't an acount ? Sign Up !" />
      </View>
    );
}

export default SigninScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      marginBottom: 100
    }
})