// src/components/GalaxyBackground.jsx

import React, { useCallback } from "react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles from "@tsparticles/react";

const GalaxyBackground = () => {
    console.log("GalaxyBackground loaded");

  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        background: {
          color: "#000000"
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        }
      }}
    />
  );
};

export default GalaxyBackground;
