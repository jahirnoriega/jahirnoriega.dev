import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamFoaXItbiIsImEiOiJjbTF1NGtzb3IwOTZ2MmxvaGNhdHB1M2E4In0.jafdjV6u9OvjzN73gwDoKg";

function Map({ lng, lat, zoom = 2.5, pitch = 25 }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  let mapTheme;

  if (resolvedTheme === "dark") {
    mapTheme = "night";
  } else if (resolvedTheme === "light") {
    mapTheme = "light";
  }

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [lng, lat],
      zoom: zoom,
      pitch: pitch,
    });

    // set config properties
    map.current.on("style.load", () => {
      map.current.setConfigProperty("basemap", "lightPreset", mapTheme);
      map.current.setPadding({ left: 150 });

      const el = document.createElement("span");
      el.className = "map-marker";

      new mapboxgl.Marker({ element: el })
        .setLngLat([lng, lat])
        .addTo(map.current);
    });
  });
  return (
    <div
      className="overflow-clip rounded-xl border border-secondary"
      style={{ height: "400px" }}
    >
      <div ref={mapContainer} className="map-container h-full w-full" />
    </div>
  );
}

export default Map;
