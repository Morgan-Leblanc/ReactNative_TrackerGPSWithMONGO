import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "http://0afca3a5.ngrok.io"
});
//For put the token of the user in all the request
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
