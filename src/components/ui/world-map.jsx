"use client";
import { useRef } from "react";
import DottedMap from "dotted-map";

export default function WorldMap({
  lineColor = "#FF4400"
}) {
  const svgRef = useRef(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#00000040",
    shape: "circle",
    backgroundColor: "white",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const sanDiegoPoint = {
    lat: 32.7157,
    lng: -117.1611
  };

  return (
    (<div
      className="w-full aspect-[2/1] dark:bg-white bg-white rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none">
        <g>
          <circle
            cx={projectPoint(sanDiegoPoint.lat, sanDiegoPoint.lng).x}
            cy={projectPoint(sanDiegoPoint.lat, sanDiegoPoint.lng).y}
            r="6"
            fill={lineColor} />
          <circle
            cx={projectPoint(sanDiegoPoint.lat, sanDiegoPoint.lng).x}
            cy={projectPoint(sanDiegoPoint.lat, sanDiegoPoint.lng).y}
            r="6"
            fill={lineColor}
            opacity="0.5">
            <animate
              attributeName="r"
              from="18"
              to="8"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite" />
            <animate
              attributeName="opacity"
              from="0.5"
              to="0"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>)
  );
}
