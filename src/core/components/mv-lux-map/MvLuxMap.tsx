import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { MvLuxMapProp } from "../../../models/models";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function MvLuxMap(props: {data: MvLuxMapProp}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCn6cRhO68HhAWEDq2LlNrVunvfc3Do_48",
  });

  const center = {
    lat: props.data.lat,
    lng: props.data.lng,
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MvLuxMap);
