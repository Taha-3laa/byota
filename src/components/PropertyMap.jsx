import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import "./PropertyMap.css";

const propertyIcon = L.divIcon({
  className: "property-marker-wrapper",
  html: `
    <div class="property-marker">
      <div class="marker-circle marker-circle-large"></div>
      <div class="marker-circle marker-circle-small"></div>
      <div class="marker-dot"></div>
    </div>
  `,
  iconSize: [140, 140],
  iconAnchor: [70, 70],
});

function PropertyMarker({ position, location }) {
  const markerRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, []);

  const handleClick = () => {
    if (!markerRef.current || !popupRef.current) return;

    if (markerRef.current.isPopupOpen()) {
      markerRef.current.closePopup();
    } else {
      markerRef.current.openPopup();
    }
  };

  return (
    <Marker
      ref={markerRef}
      position={position}
      icon={propertyIcon}
      eventHandlers={{
        click: handleClick,
      }}
    >
      <Popup
        ref={popupRef}
        closeButton={false}
        offset={[0, -65]}
      >
        <div className="location-popup">
          {location}
        </div>
      </Popup>
    </Marker>
  );
}

function MapController({ position, onMoved }) {
  const map = useMap();

  useEffect(() => {
    const handleMove = () => {
      const center = map.getCenter();
      const propertyLocation = L.latLng(position);
      const distance = map.distance(center, propertyLocation);

      onMoved(distance > 100);
    };

    map.on("moveend", handleMove);

    return () => {
      map.off("moveend", handleMove);
    };
  }, [map, position, onMoved]);

  return null;
}

function ReturnToProperty({ position, onReturn }) {
  const map = useMap();

  const handleReturn = () => {
    map.setView(position, 15, {
      animate: true,
    });

    onReturn();
  };

  return (
    <button
      className="return-property-btn"
      onClick={handleReturn}
    >
      <i className="fa-solid fa-location-crosshairs"></i>
      <span>Return to property</span>
    </button>
  );
}

export default function PropertyMap({
  latitude,
  longitude,
  location,
}) {
  const position = [latitude, longitude];

  const [showReturnButton, setShowReturnButton] = useState(false);

  return (
    <section id="location" className="location-section">

      <h2 className="location-title">
        Location
      </h2>

      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={false}
        attributionControl={false}
        className="property-map"
      >

        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <PropertyMarker
          position={position}
          location={location}
        />

        <MapController
          position={position}
          onMoved={setShowReturnButton}
        />

        {showReturnButton && (
          <ReturnToProperty
            position={position}
            onReturn={() => setShowReturnButton(false)}
          />
        )}

      </MapContainer>

    </section>
  );
}