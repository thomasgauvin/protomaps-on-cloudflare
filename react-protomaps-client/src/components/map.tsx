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
          zoom: 12,
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
        <div className="bg-opacity-80 backdrop-blur bg-slate-100 text-xs text-center p-2 absolute bottom-0 right-0 rounded-lg m-2">
          MapLibre | OpenStreetMap contributors | Protomaps
        </div>
      </Map>
    </>
  );
};
