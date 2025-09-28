import { useContext, useState, useRef, useEffect } from 'react';
import { Box, Html, OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import BoxingContext from '../context/BoxingContext';

export default function BoxingVisualization() {
  const { container, items } = useContext(BoxingContext);
  const [hoveredItem, setHoveredItem] = useState(null);
  const controlsRef = useRef();
  const { camera } = useThree();

  // 当容器变化时，自动调整视角
  useEffect(() => {
    if (container && controlsRef.current) {
      // 计算容器的最大尺寸
      const maxDimension = Math.max(container.length, container.width, container.height);
      
      // 设置相机位置，确保容器完整显示在视图中
      const cameraPosition = [
        container.length / 2 + maxDimension * 1.5,
        container.width / 2 + maxDimension * 1.5,
        container.height / 2 + maxDimension * 1.5
      ];
      
      // 使用正确的API来设置相机位置和目标
      camera.position.set(...cameraPosition);
      controlsRef.current.target.set(
        container.length / 2,
        container.width / 2,
        container.height / 2
      );
      controlsRef.current.update();
    }
  }, [container, camera.position]);

  return (
    <group>
      {/* 环境光 */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* 控制器 */}
      <OrbitControls 
        ref={controlsRef}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
      />
      
      {/* 容器 */}
      {container && (
        <group position={[container.length/2, container.width/2, container.height/2]}>
          <mesh>
            <boxGeometry args={[container.length, container.width, container.height]} />
            <meshStandardMaterial 
              color="#4F46E5" 
              wireframe 
              opacity={0.1} 
              transparent 
            />
          </mesh>
          {/* 容器边框 */}
          <lineSegments>
            <boxGeometry args={[container.length, container.width, container.height]} />
            <lineBasicMaterial color="#4F46E5" linewidth={2} />
          </lineSegments>
        </group>
      )}

      {/* 已放置物品 */}
      {items.filter(item => item.placed).map((item, i) => {
        // 计算物品中心位置
        const position = [
          item.position[0] + item.dimensions[0] / 2,
          item.position[1] + item.dimensions[1] / 2,
          item.position[2] + item.dimensions[2] / 2
        ];
        
        return (
          <mesh
            key={item.id || i}
            position={position}
            onPointerOver={() => setHoveredItem(item.id)}
            onPointerOut={() => setHoveredItem(null)}
          >
            <boxGeometry args={item.dimensions} />
            <meshStandardMaterial 
              color={hoveredItem === item.id ? "#F59E0B" : `hsl(${i * 50}, 70%, 50%)`}
              opacity={0.8}
              transparent
            />
            <Html distanceFactor={10}>
              <div className="bg-white p-2 rounded text-xs shadow-lg border border-gray-200">
                <div className="font-bold">物品 {i+1}</div>
                <div>尺寸: {item.dimensions.join('×')}</div>
                <div>位置: {item.position.map(p => Math.round(p)).join(',')}</div>
              </div>
            </Html>
          </mesh>
        );
      })}
      
      {/* 坐标轴 */}
      <axesHelper args={[5]} />
    </group>
  );
}