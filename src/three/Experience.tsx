"use client";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import AtticModel from "./AtticModel";
import * as THREE from "three";

// 🔁 Controles de rotação em torno de si, com direção inicial customizada
function CameraLockedControls() {
  const { camera } = useThree();

  useEffect(() => {
    const offset = new THREE.Vector3(6.866416980672955, 1.100922695829332, -1.1248112980778364);
    camera.lookAt(offset);
  }, [camera]);

  useFrame(() => {
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    const pointInFront = camera.position.clone().add(direction.multiplyScalar(10));
    console.log("Camera is looking at:", pointInFront);
  });

  const offsetTarget = camera.position
    .clone()
    .add(new THREE.Vector3(0, 0, -0.01));

  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      enableRotate={true}
      target={offsetTarget.toArray()}
    />
  );
}

// 🔊 Componente de áudio com botão toggle
function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      audio.volume = 0.05;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Erro ao iniciar o áudio:", err);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleAudio}
        className="absolute top-5 right-5 z-10 px-4 py-2 bg-black/70 text-white rounded text-sm"
      >
        {isPlaying ? "🔊 Som Ligado" : "🔇 Som Desligado"}
      </button>
      <audio ref={audioRef} src="/sounds/forest.mp3" loop />
    </>
  );
}

export default function Experience() {
  return (
    <>
      <AmbientAudio />
      <Canvas
        camera={{
          position: [-3, 1.5, 0.4],
          fov: 60,
        }}
        className="w-screen h-screen"
        gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 5, 2]} intensity={1} />
          <Environment preset="forest" background={true} />
          <AtticModel />
          <CameraLockedControls />
        </Suspense>
      </Canvas>
    </>
  );
}
