import React, { useContext } from "react";
//Style
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "react-native-linear-gradient";
import Spacer from "../components/Spacer";
//Context
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer />
      <Button
        raised={true}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ["#b76c94", "pink"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 }
        }}
        title="Sign Out"
        onPress={signout}
      />
      <Spacer />
      <Entypo
        style={styles.globeIcon}
        name="globe"
        size={100}
        color={"#b76c94"}
      />
    </SafeAreaView>
  );
};
//Navigation Options for Design
AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />
};
export default AccountScreen;

const styles = StyleSheet.create({
  globeIcon: {
    marginTop: 50,
    marginLeft: 130
  }
});
