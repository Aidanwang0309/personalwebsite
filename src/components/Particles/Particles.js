
import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import { GlitchPass } from './Glitchpass'
import { WaterPass } from './Waterpass'


extend({ EffectComposer, ShaderPass, RenderPass, WaterPass, UnrealBloomPass, FilmPass, GlitchPass })

function Swarm({ count, mouse }) {
    const mesh = useRef()
    const light = useRef()
    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width

    const dummy = useMemo(() => new THREE.Object3D(), [])
    // Generate some random positions, speed factors and timings


    // const audioListener = useMemo(() => new THREE.AudioListener(), [])
    // const sound = useMemo(() => new THREE.Audio(audioListener), [audioListener]);
    // const audioLoader = useMemo(() => new THREE.AudioLoader(), [])
    // const fftSize = 128;



    // audioLoader.load('./bg.ogg', function (buffer) {
    //     sound.setBuffer(buffer);
    //     sound.setLoop(true);
    //     sound.setVolume(0.5);
    // sound.play();
    // });

    // const analyser = useMemo(() => new THREE.AudioAnalyser(sound, fftSize), [sound, fftSize]);
    // const data = 

    // analyser.getFrequencyData();
    // console.log(analyser, data)

    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])
    // The innards of this hook will run every frame
    useFrame(state => {
        // Makes the light follow the mouse
        light.current.position.set(mouse.current[0] / aspect, -mouse.current[1] / aspect, 0)
        // Run through the randomized data to calculate some movement

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle
            // There is no sense or reason to any of this, just messing around with trigonometric functions
            t = particle.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)
            particle.mx += (mouse.current[0] - particle.mx) * 0.01
            particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
            // Update the dummy object
            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )
            // dummy.scale.set(s * (analyser.getAverageFrequency() - 30) / 25, s * (analyser.getAverageFrequency() - 30) / 25, s * (analyser.getAverageFrequency() - 30) / 25)
            dummy.rotation.set(s * 5, s * 5, s * 5)
            dummy.updateMatrix()
            // And apply the matrix to the instanced item
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })
    return (
        <>
            <pointLight ref={light} distance={50} intensity={20} color="white">
                <mesh scale={[0.1, 0.1, 0.1]}>
                    <dodecahedronBufferGeometry attach="geometry" args={[5, 0]} />
                    <meshBasicMaterial attach="material" color="lightblue" transparent />
                </mesh>
            </pointLight>
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <dodecahedronBufferGeometry attach="geometry" args={[1, 0]} />
                <meshStandardMaterial attach="material" color="#020000" />
            </instancedMesh>
        </>
    )
}



function Effect({ down }) {
    const composer = useRef()
    const { scene, gl, size, camera } = useThree()
    const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size])
    useEffect(() => void composer.current.setSize(size.width, size.height), [size])
    useFrame(() => composer.current.render(), 1)
    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" scene={scene} camera={camera} />
            <waterPass attachArray="passes" factor={2} />
            <unrealBloomPass attachArray="passes" args={[aspect, 2, 1, 0]} />
            <glitchPass attachArray="passes" factor={down ? 1 : 0} />
        </effectComposer>
    )
}


// function Box(props) {
//     // This reference will give us direct access to the mesh
//     const mesh = useRef()

//     // Set up state for the hovered and active state
//     const [hovered, setHover] = useState(false)
//     const [active, setActive] = useState(false)

//     // Rotate mesh every frame, this is outside of React without overhead
//     useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

//     return (
//         <mesh
//             {...props}
//             ref={mesh}
//             scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
//             onClick={e => setActive(!active)}
//             onPointerOver={e => setHover(true)}
//             onPointerOut={e => setHover(false)}>
//             <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//             <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
//         </mesh>
//     )
// }



const Particles = () => {
    const [down, set] = useState(false)
    const mouse = useRef([300, -200])
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
    return (
        // <div style={{ 'zIndex': '99' }}>
            <Canvas
                camera={{ fov: 100, position: [0, 0, 30] }}
                onMouseMove={onMouseMove}
            // onMouseUp={() => set(false)} 
            // onMouseDown={() => set(true)}
            >
                <pointLight distance={25} intensity={40} color="teal" />
                <spotLight intensity={8} position={[0, 0, 60]} penumbra={3} color="blue" />
                <mesh>
                    <planeBufferGeometry attach="geometry" args={[100, 100]} />
                    <meshStandardMaterial attach="material" color="#00ffff" depthTest={false} />
                </mesh>
                <Swarm mouse={mouse} count={100} />
                {/* <Box position={[3, 3, 20]} /> */}
                <Effect down={down} />
            </Canvas>
        // </div>
    )
}

export default Particles; 