import React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Map: React.FC<{}> = () => {};

const ref = React.useRef(null);
const [map, setMap] = React.useState();

React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);
