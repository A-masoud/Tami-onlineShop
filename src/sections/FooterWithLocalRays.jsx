import React from "react";
import LightRays from "../reactbits/LightRays";
import Footer from "../components/Footer";

export default function FooterWithLocalRays() {
  return (
    <section
      className="
        relative isolate
        left-1/2 right-1/2 -mx-[50vw] w-screen   /* full-bleed */
      "
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        <LightRays
          raysOrigin="top-center"
          raysColor="#FA6320"
          raysSpeed={2}
          lightSpread={0.9}
          rayLength={1.2}
          saturation={1.18}
          followMouse
          mouseInfluence={0.10}
          noiseAmount={0.02}
          distortion={0.01}
        />

        <div className="absolute inset-0 bg-[radial-gradient(90%_50%_at_50%_-10%,rgba(250,99,32,0.35),transparent_60%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/70 sm:from-black/50 sm:via-black/30 sm:to-black/80" />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </section>
  );
}