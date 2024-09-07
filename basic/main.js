import * as THREE from 'three'

// create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0')

//ADD THE CAMAERA

const camera = new THREE.PerspectiveCamera(75,window.innerWidth /window.innerHeight, 0.1 ,1000);
camera.position.z = 5;

// create and add a cube object 
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive:'#468585'});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// add lightnoing 
const light = new THREE.DirectionalLight(0x9CDBA6,10);
light.position.set(1,1,1);

scene.add(light);

// set up the renderer
const renderer = new THREE.WebGLRenderer()