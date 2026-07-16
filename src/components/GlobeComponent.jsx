import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export default function GlobeComponent() {
  const globeRef = useRef();
  const containerRef = useRef();
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [arcsData, setArcsData] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  // Handle responsiveness
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      // Make it square, matching container width up to height limit
      const height = Math.min(width, window.innerHeight * 0.65);
      setDimensions({ width, height });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Slight delay to ensure layout is complete
    const timer = setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  // Fetch GeoJSON and generate network arcs
  useEffect(() => {
    fetch("./data/ne_110m_land.geojson")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load geojson");
        return res.json();
      })
      .then((data) => {
        setGeoJsonData(data);
      })
      .catch((err) => console.error("Error loading land geojson:", err));

    // Generate random connection arcs
    const numArcs = 16;
    const arcs = [];
    
    // Data hubs / clusters around the world (approx coordinates)
    const cities = [
      { name: "New York", lat: 40.7128, lng: -74.0060 },
      { name: "London", lat: 51.5074, lng: -0.1278 },
      { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
      { name: "Sydney", lat: -33.8688, lng: 151.2093 },
      { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
      { name: "Cape Town", lat: -33.9249, lng: 18.4241 },
      { name: "Singapore", lat: 1.3521, lng: 103.8198 },
      { name: "Frankfurt", lat: 50.1109, lng: 8.6821 },
      { name: "Mumbai", lat: 19.0760, lng: 72.8777 },
      { name: "San Francisco", lat: 37.7749, lng: -122.4194 }
    ];

    for (let i = 0; i < numArcs; i++) {
      const from = cities[Math.floor(Math.random() * cities.length)];
      let to = cities[Math.floor(Math.random() * cities.length)];
      
      // Ensure we don't connect a city to itself
      while (to === from) {
        to = cities[Math.floor(Math.random() * cities.length)];
      }

      arcs.push({
        startLat: from.lat,
        startLng: from.lng,
        endLat: to.lat,
        endLng: to.lng,
        name: `${from.name} ⟷ ${to.name}`
      });
    }

    setArcsData(arcs);
  }, []);

  // Configure Auto-rotation and Controls
  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.55;
      controls.enableFocus = false;
      controls.enableZoom = true;
      controls.enablePan = false;
      // Prevent user from zooming out too far or in too close
      controls.minDistance = 150;
      controls.maxDistance = 450;
    }
  }, [geoJsonData]); // Trigger when data is ready and globe mounts

  return (
    <div ref={containerRef} className="w-full flex justify-center items-center relative overflow-hidden select-none">
      {/* Background ambient grey circle behind globe */}
      <div className="absolute w-[80%] h-[80%] rounded-full bg-grey-glow-gradient pointer-events-none filter blur-2xl ambient-glow z-0"></div>

      <div className="z-10 cursor-grab active:cursor-grabbing">
        {geoJsonData ? (
          <Globe
            ref={globeRef}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="rgba(0,0,0,0)"
            showAtmosphere={false}
            
            // Holographic Globe surface config
            globeColor="rgba(0,0,0,0)" // Fully transparent globe body
            showGraticules={false}
            
            // Dot-matrix landmass representation
            hexPolygonsData={geoJsonData.features}
            hexPolygonResolution={3}
            hexPolygonMargin={0.2}
            hexPolygonColor={() => "#FFFFFF"} // Pure white dots for landmass
            
            // Neon white/grey connection arcs
            arcsData={arcsData}
            arcColor={() => "rgba(255, 255, 255, 0.75)"} // Pure white lines
            arcAltitude={(d) => Math.min(0.25, Math.random() * 0.15 + 0.1)} // Curved arcs above sphere
            arcStroke={0.8} // Sleek lines
            arcDashLength={0.4}
            arcDashGap={1.0}
            arcDashAnimateTime={2000}
            
            // White rings at endpoints
            ringsData={arcsData.flatMap(d => [
              { lat: d.startLat, lng: d.startLng },
              { lat: d.endLat, lng: d.endLng }
            ])}
            ringColor={() => "rgba(255, 255, 255, 0.5)"} // Pure white glowing rings
            ringMaxRadius={2.5}
            ringPropagationSpeed={2.5}
            ringRepeatNum={2}
          />
        ) : (
          <div 
            style={{ width: dimensions.width, height: dimensions.height }}
            className="flex items-center justify-center text-white/50 font-medium animate-pulse"
          >
            Loading Quantum Data Grid...
          </div>
        )}
      </div>
    </div>
  );
}
