import { useEffect, useContext } from "react";
//Context
import { Context as AuthContext } from "../context/AuthContext";
//Style
import { StyleSheet } from "react-native";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default ResolveAuthScreen;

const styles = StyleSheet.create({});
