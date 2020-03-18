import React from "react";
//Navigation
import { withNavigation } from "react-navigation";
//Style
import { StyleSheet,TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { SocialIcon as RouterButton } from "react-native-elements";

const NavLink = ({navigation, text, RouteName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(RouteName)}>
    <Spacer />
    <RouterButton button light title={text} />
  </TouchableOpacity>
  );
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({});
