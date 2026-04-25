import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

const AnimatedSphere = ({ theme }: { theme: string }) => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.2}>
      <MeshDistortMaterial
        color={theme === 'dark' ? "#4F46E5" : "#9333EA"}
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export const ThreeDModel = () => {
  const { theme } = useTheme();
  
  return (
    <div className="absolute right-0 lg:right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-30 md:opacity-60 pointer-events-none -z-10">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} intensity={2} />
        <AnimatedSphere theme={theme} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};
