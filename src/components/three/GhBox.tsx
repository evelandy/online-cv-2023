import React, { useRef, useState } from 'react';
import * as three from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import gh from '../../images/gh.png';


const GhBox = () => {
    const ghFace = useLoader(TextureLoader, gh);
    const mesh = useRef<three.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    // useFrame(() => {
    //     mesh.current!.rotation.x += 0.005;
    //     mesh.current!.rotation.y += 0.005;
    // });
    useFrame(() => {
        hovered ? mesh.current!.rotation.y += 0.09 : mesh.current!.rotation.y += 0.005;
        // uncomment below to rotate on all axeses
        // hovered ? mesh.current!.rotation.x += 0.09 : mesh.current!.rotation.x += 0.005;
        // hovered ? mesh.current!.rotation.z += 0.09 : mesh.current!.rotation.y -= 0.005;
    })
    return (
        <mesh
            // scale={active ? 1.25 : 1}
            // onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHovered(true)}
            onPointerOut={(event) => setHovered(false)}
            ref={mesh}>
            <boxGeometry args={[1.8, 1.8, 1.8]} />
            <meshStandardMaterial map={ghFace} color="gray"/>
        </mesh>
    );
};

export default GhBox;
