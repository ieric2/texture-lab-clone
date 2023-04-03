import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'

const Mesh = ({textureName}) => {
  const ref = useRef()
  const textureProps = useTexture({
    map: `/texture-maps/${textureName}/diffuse.png`,
    displacementMap: `/texture-maps/${textureName}/height.png`,
    normalMap: `/texture-maps/${textureName}/normal.png`,
  })

  useFrame((state, delta) => (ref.current.rotation.x += delta / 5))

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial {...textureProps} displacementScale={0.2} normalScale={[1, 1]}/>
    </mesh>
  )
}

const Sphere = ({textureName}) => {
  return (
    <Canvas>
      <ambientLight />
      <Mesh position={[0, 0, 0]} textureName={textureName}/>
      <OrbitControls />
    </Canvas>
  )
}

export default Sphere;