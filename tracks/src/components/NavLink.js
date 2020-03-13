import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";
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
