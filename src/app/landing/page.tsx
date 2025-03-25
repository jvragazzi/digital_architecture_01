"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  const handleEnter = () => {
    gsap.to(container.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.in",
      onComplete: () => router.push("/experience"),
    });
  };

  return (
    <div
      ref={container}
      className="flex flex-col items-center justify-center h-screen bg-black text-white text-center p-8"
    >
      <h1 className="text-3xl md:text-5xl font-semibold mb-6">
        O espaço digital também é arquitetura?
      </h1>
      <button
        onClick={handleEnter}
        className="mt-10 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
      >
        Entrar na experiência
      </button>
    </div>
  );
}
