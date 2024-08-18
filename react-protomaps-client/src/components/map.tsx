import React from "react";
import Map from "react-map-gl/maplibre";
import layers from "protomaps-themes-base";

export const MapComponent = () => {
  return (
    <>
      <Map
        initialViewState={{
          longitude: -74.006,
          latitude: 40.7128,
          zoom: 9,
        }}
        mapStyle={{
          version: 8,
          sources: {
            protomaps: {
              type: "vector",
              tiles: [
                "https://protomaps-on-cloudflare.tomsprojects.workers.dev/world/{z}/{x}/{y}.mvt",
              ],
              maxzoom: 6,
            },
          },
          glyphs:
            "https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf",
          layers: layers("protomaps", "light"),
        }}
        attributionControl={false}
      >
        <div style={{
          position: "absolute",
          bottom: 0,
          left:0,
          backgroundColor: "white",
          padding: "5px",
          borderRadius: "5px",
          margin: "5px",
        }}>
          MapLibre | OpenStreetMap contributors | Protomaps
        </div>
      </Map>
    </>
  );
};
