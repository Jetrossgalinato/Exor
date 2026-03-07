import LightRays from "@/components/LightRays";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
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
      <div className="absolute inset-0 flex items-center justify-center">
        <Header />
      </div>
    </div>
  );
}
