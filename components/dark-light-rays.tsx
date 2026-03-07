"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import LightRays from "@/components/LightRays";

const emptySubscribe = () => () => {};

export default function DarkLightRays() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted || resolvedTheme !== "dark") return null;

  return (
    <div className="absolute inset-0">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
    </div>
  );
}
