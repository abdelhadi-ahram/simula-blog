import React from "react";
import StarfieldAnimation from "../star-field";

export default function StarsBackground({ className }: { className: string }) {
  return (
    <StarfieldAnimation
      className={className}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%"
      }}
      numParticles={800}
      particleSpeed={2}
    />
  );
}
