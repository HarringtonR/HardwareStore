import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const GoogleMaps = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 42.26471, lng: -89.08019 }}
         >
         {props.isMarkerShown && <Marker position={{ lat: 42.26471, lng: -89.08019 }} />}
        </GoogleMap>
))


export default GoogleMaps;
