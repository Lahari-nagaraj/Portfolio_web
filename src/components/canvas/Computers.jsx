import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader"; // Ensure this path is correct

const Computers = ({isMobile}) => {
  // Load the 3D model
  const { scene, nodes, materials } = useGLTF("/desktop_pc/scene.gltf");

  // Log the scene to ensure it's loaded correctly
  console.log("Loaded model:", scene);

  return (
    <mesh>
      {/* Add hemisphere light to illuminate the scene */}
      <hemisphereLight intensity={0.15} groundColor="black" />

      {/* Add a point light for additional lighting */}
      <pointLight intensity={1} />
      <spotLight
        position={[20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* The model */}
      <primitive
        object={scene}
        scale={isMobile ? 0.5 : 0.6} // Adjust the size of the model
        position={isMobile ? [0, -4, -1.5] : [0, -3.3, -1.5]} // Adjust position below text
        rotation={[-0.01, -0.2, -0.1]} // Adjust rotation
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile]= useState(false);

  useEffect(() =>{
    // add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width:500px)');
    //set initial value of ismobile state variable
    setIsMobile(mediaQuery.matches);
    //define callback function to handle changes in media query

    const handleMediaQueryChange=(event) => {
      setIsMobile(event.matches);
    }
    //Add callback function as a listener for changes to media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return()=> {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [25, 4, 5], fov: 25 }} // Adjust camera position to ensure the model is visible
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // Disable zoom
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
