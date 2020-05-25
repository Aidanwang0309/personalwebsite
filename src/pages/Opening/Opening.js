import React, { Component } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass
} from 'postprocessing';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { device } from 'shared/theme';
import css from "./styles.module.scss"


class Opening extends Component {
  state = {
    isLoading: true,
    height: 250
  };

  componentDidMount() {
    this.sceneSetup();
    this.createParticles();
    this.createPlanet();
    this.createPlanetOutline();
    this.createLight();
    this.createEffect();
    this.start();
    document.addEventListener('mousemove', this.onDocumentMouseMove, false);
    window.addEventListener('resize', this.onWindowResize, false);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    window.removeEventListener('resize', this.onWindowResize);
    this.el.removeChild(this.renderer.domElement);
  }

  sceneSetup = () => {
    this.mouseX = -10000;
    this.mouseY = 1000;
    this.width = this.el.clientWidth * 0.8;
    this.height = this.el.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      105,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    this.camera.position.z = 400;
    this.camera.setViewOffset(
      this.width * 3,
      800 * 2,
      this.width * 1.2,
      800 * 0.5,
      this.width,
      800
    );
    this.renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1
    );
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.autoClear = false;
    this.renderer.setClearColor(0x000000, 0.0);
    this.el.appendChild(this.renderer.domElement);

  };

  // createAudioListener = () => {

  // }

  createParticles = () => {
    this.particle = new THREE.Object3D();
    let geometry = new THREE.TetrahedronGeometry(2, 0);
    let material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shading: THREE.FlatShading
    });
    for (var i = 0; i < 1000; i++) {
      let mesh = new THREE.Mesh(geometry, material);
      mesh.position
        .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
        .normalize();
      mesh.position.multiplyScalar(90 + Math.random() * 700);
      mesh.rotation.set(
        Math.random() * 2,
        Math.random() * 2,
        Math.random() * 2
      );
      this.particle.add(mesh);
    }
    this.scene.add(this.particle);
  };

  createPlanet = () => {
    // this.listener = new THREE.AudioListener();
    // this.camera.add(this.listener);

    // this.sound = new THREE.PositionalAudio(this.listener);
    // this.audioLoader = new THREE.AudioLoader();
    // this.audioLoader.load("./bg.ogg", function (buffer) {
    //   this.sound.setBuffer(buffer);
    //   this.sound.setRefDistance(20);
    //   this.sound.play();
    // });

    this.circle = new THREE.Object3D();
    let geom = new THREE.IcosahedronGeometry(7, 1);
    let mat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shading: THREE.FlatShading
    });
    this.planet = new THREE.Mesh(geom, mat);
    this.planet.scale.x = this.planet.scale.y = this.planet.scale.z = 16;
    this.circle.add(this.planet);
    this.scene.add(this.circle);
    // this.createAudioListener();


    // this.circle.add(this.sound)
  };

  createPlanetOutline = () => {
    this.skelet = new THREE.Object3D();
    let geom2 = new THREE.IcosahedronGeometry(15, 1);
    let mat2 = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
      side: THREE.DoubleSide
    });
    this.planet2 = new THREE.Mesh(geom2, mat2);
    this.planet2.scale.x = this.planet2.scale.y = this.planet2.scale.z = 10;
    this.skelet.add(this.planet2);
    this.scene.add(this.skelet);
  };

  createLight = () => {
    let ambientLight = new THREE.AmbientLight(0x999999);
    this.scene.add(ambientLight);

    let lights = [];
    lights[0] = new THREE.DirectionalLight(0xaeb2d3, 1);
    lights[0].position.set(5, 0, 0);
    lights[1] = new THREE.DirectionalLight(0x11e8bb, 1);
    lights[1].position.set(2, 5, 1);
    lights[2] = new THREE.DirectionalLight(0x8200c9, 1);
    lights[2].position.set(-2, -5, 1);
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
  };

  createEffect = () => {
    //COMPOSER
    this.composer = new EffectComposer(this.renderer);

    //PASSES
    const bloomEffect = new BloomEffect();
    bloomEffect.blendMode.opacity.value = 5.0;
    bloomEffect.setResolutionScale(0.5);
    const effectPass = new EffectPass(this.camera, bloomEffect);
    effectPass.renderToScreen = true;

    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(effectPass);
  };

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  animate = () => {
    this.particle.rotation.x += 0.0;
    this.particle.rotation.y -= 0.006;
    this.circle.rotation.x -= 0.004;
    this.circle.rotation.y -= 0.006;
    this.skelet.rotation.x -= 0.003;
    this.skelet.rotation.y += 0.005;
    this.renderer.clear();

    this.camera.position.x = (this.mouseX - this.camera.position.y / 2) * 0.01;
    this.camera.position.y = (this.mouseY - this.camera.position.x / 2) * 0.1;
    this.camera.position.z = (this.mouseX - this.camera.position.z / 2) * 0.06;
    this.camera.lookAt(this.scene.position);

    this.composer.render(this.scene, this.camera);
    this.frameId = window.requestAnimationFrame(this.animate);
    this.finishLoading();
  };

  onDocumentMouseMove = event => {
    this.mouseX = (event.clientX / 3 - this.width) * 10;
    this.mouseY = (event.clientY / 3 - this.height) * 10;
  };

  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  finishLoading = () => {
    this.setState({ isLoading: false });
  };

  render() {
    let loadingAnimation = this.state.isLoading ? (
      <div className="loading" />
    ) : null;

    return (
      <ProjectContainer
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.01 } } }}
      >
        {loadingAnimation}
        <div className={css.hero}>
          <div
            className={css['hero-info']}
            ref={ref => {
              this.el = ref;
            }}
          >
            {/* <Container>
              <NavLink to="/icode">ENTER</NavLink>
            </Container> */}
            <div className={css['hero-info-content']}>
              <IntroContainer>
                <h2>
                  HI, I'm Shuai Wang. I'm a
                </h2>
              </IntroContainer>
              <IntroContainer>
                <NavLink to="/icode">Developer</NavLink>
                <span> <i></i> </span>
              </IntroContainer>
              <IntroContainer>
                <NavLink to="/imusic">DJ</NavLink>
                <span> <i></i> </span>
              </IntroContainer>
              <IntroContainer>
                <NavLink to="/imusic">Music Producer</NavLink>
                <span> <i></i> </span>
              </IntroContainer>
              <IntroContainer>
                <NavLink to="/idesign">UI/UX Designer</NavLink>
                <span> <i></i> </span>
              </IntroContainer>
            </div>
          </div>
        </div>
      </ProjectContainer>
    );
  }
}

const ProjectContainer = styled(motion.div)`

`;


const IntroContainer = styled(motion.div)`
  margin-bottom:1rem;
  padding: 15px 25px;
  border-radius: 5px;
  background: #202020;
  box-shadow: -5px -5px 15px #333333,
              5px 5px 15px #0d0d0d;
  cursor:pointer;

  h2{
    font-size:1rem; 
    color:#d0d0d0;
  }

  :hover {
    a{
      transform:translateX(20px)
      -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
      -moz-animation: neon2 1.5s ease-in-out infinite alternate;
      animation: neon2 1.5s ease-in-out infinite alternate;
    }

  }
  @keyframes neon2 {
      from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
          0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
      }
      to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
          0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
      }
    }

  @media ${device.mobileS} {
    margin-bottom:2rem;

    h2{
      font-size:1.5rem; 
    }
  }
`

// const Container = styled(motion.div)`
//   position: absolute;
//   right: 20%;
//   bottom: 20%;
//   padding: 15px 25px;
//   border-radius: 5px;
//   background: #202020;
//   box-shadow: -5px -5px 15px #333333,
//               5px 5px 15px #0d0d0d;




// `;

const NavLink = styled(Link)`
  height: 100%;
  width: 100%;
  text-decoration: none;
  font-size: 2rem;
  color: #d0d0d0;
  font-weight: 500;
  transition:all ease-in-out 0.3s;

`;

export default Opening;


