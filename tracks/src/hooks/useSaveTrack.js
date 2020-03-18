import { useContext } from "react";
//import of own flow for navigate outside the router
import { navigate } from "../navigationRef";
//Context
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate("TrackList");
  };
  return [saveTrack];
};
