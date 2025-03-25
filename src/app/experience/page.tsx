"use client";

import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/three/Experience"), { ssr: false });

export default function ExperiencePage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Experience />
    </div>
  );
}
