
"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    ContactShadows,
    Environment,
    OrbitControls,
    useGLTF,
} from "@react-three/drei";

function RoverModel() {
    const { scene } = useGLTF("/models/curiosity-rover.glb");

    return (
        <primitive
            object={scene}
            scale={1}
            position={[0, -0.8, 0]}
        />
    );
}

export default function RoverViewer() {
    return (
        <div className="relative h-[340px] w-full sm:h-[450px] lg:h-[560px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-3xl sm:h-96 sm:w-96" />

            <Canvas
                camera={{ position: [4, 2.5, 5], fov: 42 }}
                dpr={[1, 1.75]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={1.5} />
                <directionalLight
                    position={[5, 8, 5]}
                    intensity={3}
                />

                <Suspense fallback={null}>
                    <RoverModel />
                    <Environment preset="city" />
                    <ContactShadows
                        position={[0, -0.8, 0]}
                        opacity={0.45}
                        scale={8}
                        blur={2.5}
                    />
                </Suspense>

                <OrbitControls
                    enablePan={false}
                    minDistance={2}
                    maxDistance={10}
                    minPolarAngle={0.4}
                    maxPolarAngle={Math.PI / 2}
                    autoRotate
                    autoRotateSpeed={0.65}
                />
            </Canvas>

            <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur">
                <span className="mr-2 text-orange-400">✳</span>
                DRAG TO EXPLORE THE ROVER
            </div>
        </div>
    );
}
