import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const LocationMarker = ({ setPosition }) => {
  const [position, setPos] = useState(null);

  useMapEvents({
    click(e) {
      setPos(e.latlng);
      setPosition(e.latlng);
    },
  });

  return position === null ? null : <Marker position={position} />;
};

const MapPicker = ({ setPosition }) => {
  return (
    <MapContainer
      center={[17.385044, 78.486671]} // Hyderabad default
      zoom={13}
      style={{ height: "300px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker setPosition={setPosition} />
    </MapContainer>
  );
};

export default MapPicker;

