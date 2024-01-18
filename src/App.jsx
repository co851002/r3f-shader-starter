import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
      <color attach="background" args={["#0f0325"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
