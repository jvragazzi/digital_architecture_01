'use client'

import { useGLTF } from '@react-three/drei'

export default function AtticModel() {
  const { scene } = useGLTF('/models/attic.glb')
  return <primitive object={scene} />
}