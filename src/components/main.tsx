import { useFrame } from '@react-three/fiber'
import { MutableRefObject, useRef } from 'react';
import {Mesh} from 'three';

export function Main() {
    const cubeRef = useRef<Mesh>(null!);
    useFrame(() => {
        // cubeRef.current!.rotation = 20;
        console.log('tick');
    })
    return <>
        <mesh position-x={-2}>
            <sphereGeometry />
            <meshBasicMaterial color="orange" />
        </mesh>
        <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
            <boxGeometry scale={[1, 2, 3]} />
            <meshBasicMaterial color="green" />
        </mesh>
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshBasicMaterial color="yellow" />
        </mesh>
    </>
}