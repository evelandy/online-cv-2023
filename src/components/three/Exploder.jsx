// Not Used




// import styled from "@emotion/styled";
// import { Physics, useBox } from "@react-three/cannon";
// import { OrbitControls } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import create from "zustand";
// import produce from "immer";
// import "../styles/testStyles.css";
// import { Fragment, Suspense, useRef } from "react";
// import { v4 as uuid } from "uuid";

// const degToRad = (deg) => (Math.PI / 180) * deg;
// const random = (min, max) => Math.round(Math.random() * (max - min)) + min;

// const generateBoxes = (length = 1) =>
//     Array.from({ length }, (_, index) => ({
//         id: uuid(),
//         args: [8, 8, 8],
//         // args: [random(1, 3), random(1, 3), random(1, 3)],
//         position: [(0, 0), -10, (0, 0)],
//         // position: [(-3, 3), index * 3 + 30, (-3, 3)],
//         // position: [random(-3, 3), index * 3 + 25, random(-3, 3)],
//         // color: `hsl(${random(0, 359)}, ${random(30, 70)}%, ${random(30, 70)}%)`,
//         hits: 0,
//         mass: 1,
//         durability: 0,
//         type: "Dynamic"
//     }));

// const useStore = create((set) => ({
//     boxes: generateBoxes(),
//     increment: () => {
//         set(
//             produce(({ boxes }) => {
//                 boxes.push(...generateBoxes());
//             })
//         );
//     },
//     hit: (id) => {
//         set(
//             produce(({ boxes }) => {
//                 const index = boxes.findIndex((box) => box.id === id);
//                 if (index > -1) {
//                     const { durability, hits } = boxes[index];
//                     if (hits < durability) {
//                         // const nextHits = boxes[index].hits + 1;
//                         // boxes[index].hits = nextHits;
//                     } else if (!boxes[index].dead) {
//                         boxes[index].dead = true;
//                     }
//                 }
//             })
//         );
//     },
//     deleteBox: (id) => {
//         set(
//             produce(({ boxes }) => {
//                 const index = boxes.findIndex((box) => box.id === id);
//                 if (index > -1) {
//                     boxes.splice(index, 1);
//                 }
//             })
//         );
//     }
// }));

// const Particle = ({ boxId, args, color, ...props }) => {
//     const deleteBox = useStore((state) => state.deleteBox);
//     const counter = useRef(0);
//     const [ref] = useBox(() => ({
//         ...props,
//         args
//     }));

//     // cleans up the exploded pieces
//     useFrame(({ clock }) => {
//         counter.current += 0.1;
//         if (counter.current > 10) {
//             deleteBox(boxId);
//         }
//     });

//     return (
//         <mesh ref={ref} castShadow receiveShadow>
//             <boxGeometry args={args} />
//             <meshStandardMaterial color={color} />
//         </mesh>
//     );
// };

// const Box = ({ args, color, dead, onFrame, onCollide, children, ...props }) => {
//     const collissionPoint = useRef(props.position);
//     const handleCollide = (event_) => {
//         collissionPoint.current = event_.contact.contactPoint;
//         if (onCollide) {
//             onCollide(event_);
//         }
//     };

//     const [ref, api] = useBox(() => ({
//         ...props,
//         onCollide: handleCollide,
//         args
//     }));

//     useFrame(({ clock }) => {
//         if (onFrame) {
//             const config = onFrame(clock);
//             for (const key in config) {
//                 api[key].set(...config[key]);
//             }
//         }
//     });

//     return dead ? (
//         Array.from({ length: 115 }, (_, index) => ({
//             id: index
//         })).map((item) => {
//             const [x, y, z] = collissionPoint.current;
//             return (
//                 <Particle
//                     key={item.id}
//                     boxId={props.id}
//                     args={[0.4, 0.4, 0.4]}
//                     color={color}
//                     // position={[x + 0, y + random(-1, 1) / 10, z + random(-1, 1) / 10]}
//                     position={[
//                         x + random(-1, 25) / 20,
//                         y + random(-1, 5) / 20,
//                         z + random(-1, 25) / 20
//                     ]}
//                     mass={1}
//                 />
//             );
//         })
//     ) : (
//         <mesh ref={ref} castShadow receiveShadow>
//             <boxGeometry args={args} />
//             <meshStandardMaterial color={color} />
//             {children}
//         </mesh>
//     );
// };

// const ExploderApp = () => {
//     const boxes = useStore((state) => state.boxes);
//     const increment = useStore((state) => state.increment);
//     const hit = useStore((state) => state.hit);
//     const Controls = styled.div
//         `
//         position: fixed;
//         top: 50%;
//         left: 45%;
//         padding: 1rem;
//     `;
//     const Button = styled.button
//         `
//         padding: 1rem;
//         font-size: 1em;
//     `;

//     return (
//         <>
//             <Canvas linear shadows camera={{ position: [20, 20, 20] }}>
//                 <ambientLight intensity={1} />
//                 <spotLight
//                     castShadow
//                     intensity={2}
//                     position={[0, 100, 0]}
//                     shadow-mapSize={[2048, 2048]}
//                     penumbra={1}
//                 />
//                 <OrbitControls />
//                 <Suspense fallback={null}>
//                     <Physics gravity={[0, 0, 0]}> {/* make the middle number -10 or so to make it fall */}
//                         <Box
//                             args={[4, 4, 4]}
//                             position={[-4, 2, -4]}
//                             rotation={[45, degToRad(45), degToRad(45)]}
//                             color="hsl(0, 0%, 100%)"
//                             mass={1}
//                             type="Static"
//                             onFrame={(clock) => {
//                                 return {
//                                     position: [
//                                         Math.cos(clock.getElapsedTime() * 2) * 2,
//                                         Math.sin(clock.getElapsedTime() * 2) * 15 + 8,
//                                         -4
//                                     ]
//                                 };
//                             }}
//                         />
//                         {/*<Box
//               args={[4, 1, 4]}
//               position={[0, -2, 0]}
//               color="hsl(0, 0%, 100%)"
//               mass={1}
//               type="Static"
//               onFrame={(clock) => {
//                 return {
//                   position: [
//                     Math.sin(clock.getElapsedTime() * 0.5) * 20,
//                     -2,
//                     0
//                   ],
//                   rotation: [
//                     0,
//                     Math.cos(clock.getElapsedTime() * 0.5) * degToRad(90),
//                     Math.sin(clock.getElapsedTime() * 0.5) * degToRad(180)
//                   ]
//                 };
//               }}
//             /> */}
//                         {boxes.map((props) => {
//                             return (
//                                 <Box
//                                     key={props.id}
//                                     {...props}
//                                     onCollide={() => {
//                                         hit(props.id);
//                                     }}
//                                 />
//                             );
//                         })}

//                         <Box
//                             args={[100, 1, 100]}
//                             position={[0, -20, 0]}
//                             color="hsl(0, 0%, 5%)"
//                             type="Kinematic"
//                         />
//                     </Physics>
//                 </Suspense>
//             </Canvas>
//             <Controls>
//                 <Button onClick={increment}>Add cube</Button>
//             </Controls>
//         </>
//     );
// }

// export default ExploderApp;
