import React, { useRef } from 'react';
import * as three from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import email from '../../images/email.png';

const EmailBox = () => {
    const ghFace = useLoader(TextureLoader, email);
    const mesh = useRef<three.Mesh>(null);
    useFrame(() => {
        // mesh.current!.rotation.x += 0.005;
        mesh.current!.rotation.y += 0.005;
      });
    return (
        <mesh ref={mesh}>
            <boxGeometry args={[1.8, 1.8, 1.8]} />
            <meshStandardMaterial map={ghFace} color="gray" />
        </mesh>
    );
};

export default EmailBox;
