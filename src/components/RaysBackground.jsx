import React from "react";
import LightRays from "../reactbits/LightRays";

export default function RaysBackground() {
    return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.01}
        />
        
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.5),transparent_55%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/75" />

        <div className="absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-b from-transparent via-black/50 to-black/85" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.35)_48%,rgba(0,0,0,0.4)_52%,transparent_100%)]" />
    </div>
);
}