import { OrbitControls, shaderMaterial, useTexture} from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const WaveShaderMaterial = shaderMaterial(
  //Uniform
  {
    uColor: new THREE.Color(0.0,0.0,0.0),
  },
  //Vertex
  `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  //Fragment
  `
    uniform vec3 uColor;
    void main() {
      gl_FragColor = vec4(uColor,0.8);
    }
  `,
);

extend({WaveShaderMaterial});

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <pointLight position={[10,10,10]}/>
      <mesh>
        <planeBufferGeometry args={[3,5]}/>
        <waveShaderMaterial uColor={"hotpink"}/>
      </mesh>
    </>
  );
};
