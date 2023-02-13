import React, { useRef, useState } from 'react';
import * as three from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import email from '../../images/email.png';

const EmailBox = () => {
    const emFace = useLoader(TextureLoader, email);
    const mesh = useRef<three.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    useFrame(() => {
        // mesh.current!.rotation.x += 0.005;
        hovered ? mesh.current!.rotation.x += 0.09 : mesh.current!.rotation.x += 0.005;
      });
    return (
        <mesh
            // scale={active ? 1.25 : 1}
            // onClick={(event) => setActive(!active)} 
            onPointerOver={(event) => setHovered(true)}
            onPointerOut={(event) => setHovered(false)} 
            ref={mesh}>
            <boxGeometry args={[1.8, 1.8, 1.8]} />
            <meshStandardMaterial map={emFace} color="gray" />
        </mesh>
    );
};

export default EmailBox;
