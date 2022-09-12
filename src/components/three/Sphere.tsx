import React, { useRef } from 'react';
import * as three from 'three';
import { useFrame } from '@react-three/fiber';

const Sphere = () => {
    const mesh = useRef<three.Points>(null);
    useFrame(() => {
        // mesh.current!.rotation.x += 0.01;
        mesh.current!.rotation.z = 0.05;
        mesh.current!.rotation.y += 0.005;
      });
    return (
        <points ref={mesh}>
            {/* <boxBufferGeometry args={[1, 1, 1]} /> */}
            {/* <meshStandardMaterial color="#0391BA" /> */}
            <sphereGeometry args={[3]} />
            <pointsMaterial size={0.05} />
        </points>
    );
};

export default Sphere;
