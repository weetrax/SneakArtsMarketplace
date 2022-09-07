import * as React from "react";
import PropTypes from "prop-types";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  FeatureGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapMarker } from "../../types";

type LeafletMapProps = {
  markers: MapMarker[];
};

const LeafletMap: React.FC<LeafletMapProps> = ({ markers }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: 300, width: "100%" }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, markerIndex) => {
        return (
          <Marker key={`marker_${markerIndex}`} position={marker.latlng}>
            {<Popup>{marker.popup}</Popup>}
          </Marker>
        );
      })}
    </MapContainer>
  );
};

LeafletMap.propTypes = {
  //
};

export default LeafletMap;
