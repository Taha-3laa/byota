import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./PropertyMap.css";
import L from "leaflet";

const markerIcon = L.divIcon({
  className: "marker",
  html: `
    <div class="marker-content">
      <div class="outer-ring"></div>
      <div class="inner-ring"></div>
      <div class="marker-dot"></div>
    </div>
  `,
  iconSize: [140, 140],
  iconAnchor: [70, 70],
});


function CustomMarker({ lat, lng, location }) {
  const markerRef = useRef();

  useEffect(() => {
    markerRef.current?.openPopup();
  }, []);
  return (
    <Marker ref={markerRef} position={[lat, lng]} icon={markerIcon}>
      <Popup offset={[110, 10]}>
        <p>{location}</p>
      </Popup>
    </Marker>
  );
}

export default function PropertyMap({ lat, lng, location }) {
  return (
    <MapContainer className="property-map" center={[lat, lng]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <CustomMarker lat={lat} lng={lng} location={location} />
    </MapContainer>
  );
}
