"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const pins = [
  { code: "ch", label: "Switzerland", lng: 8.23, lat: 46.82 },
  { code: "rs", label: "Serbia",      lng: 21.0, lat: 44.02 },
];

export default function EuropeMap() {
  return (
    <div className="relative w-full h-full">
      {/* dot pattern definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#c8d8e8" />
          </pattern>
        </defs>
      </svg>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [18, 52],
          scale: 900,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: { rsmKey: string }[] }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url(#dots)"
                stroke="none"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {pins.map((pin) => (
          <Marker key={pin.label} coordinates={[pin.lng, pin.lat]}>
            {/* Flag bubble — image fills full circle */}
            <foreignObject x="-20" y="-48" width="40" height="40">
              <img
                src={`https://flagcdn.com/w80/${pin.code}.png`}
                alt={pin.label}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.18)",
                  border: "2px solid white",
                  display: "block",
                }}
              />
            </foreignObject>
            {/* Stem dot */}
            <circle r={3} fill="#94a3b8" cy={0} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
