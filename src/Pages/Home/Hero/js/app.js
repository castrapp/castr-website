// import * as THREE from "three";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
// /* eslint-disable import/no-webpack-loader-syntax */
// import vertex from '!!raw-loader!./shader/vertex.glsl';
// import fragment from '!!raw-loader!./shader/fragment.glsl';
// /* eslint-enable import/no-webpack-loader-syntax */


// // var colors = require('nice-color-palettes');

// // import gsap from "gsap";


// // let ind = Math.floor(Math.random() * colors.length)
// // // ind = 19;
// // console.log(ind)
// // let pallete = colors[ind];


// // console.log('colors are: ', colors)
// // console.log('pallette is: ', pallete)
// let newPallete = ['#a7c5bd', '#333333', '#eb7b59', '#cf4647', '#524656']
// let pallete83 = ['#a7c5bd', '#e5ddcb', '#eb7b59', '#cf4647', '#524656']
// let pallete84 = ['#1324F5', '#000000', '#FF00A7', '#EB1E20', '#000000']

// let pallete = pallete84.map((color) => new THREE.Color(color))



// export default class Sketch {
// 	constructor(canvas) {
// 		this.scene = new THREE.Scene();

// 		this.canvas = canvas;
// 		this.width = canvas.offsetWidth;
// 		this.height = canvas.offsetHeight;
// 		this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
// 		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// 		this.renderer.setSize(this.width, this.height);
		
// 		this.renderer.physicallyCorrectLights = true;
// 		this.renderer.outputEncoding = THREE.sRGBEncoding;

// 		// this.canvas.appendChild(this.renderer.domElement);

// 		// var frustumSize = 10;
// 		// var aspect = window.innerWidth / window.innerHeight;
// 		// this.camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -1000, 1000 );
// 		this.camera = new THREE.PerspectiveCamera(
// 			70,
// 			this.width / this.height,
// 			0.001,
// 			1000
// 		);
		
// 		// Set the initial camera position
// 		this.camera.position.set(0.0002293715413487227, 0.009497897208904172, 0.02388205001053332);
// 		// this.camera.position.set(0, 0.009497897208904172, 0.05);

// 		// Set the exact coordinates the camera should look at
// 		this.camera.lookAt(-0.008924118444488625, -0.36953302562053325, -0.9291747430304609);


// 		// this.camera.lookAt(0, 0, 0);  // Look at the origin
// 		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
// 		this.time = 0;

// 		// Listen for changes in the camera (OrbitControls)
// 		this.controls.addEventListener('change', () => {
// 			// Log the camera's position
// 			console.log(`Camera Position: X=${this.camera.position.x}, Y=${this.camera.position.y}, Z=${this.camera.position.z}`);

// 			// Create a vector for the camera's "look at" direction
// 			const lookAtVector = new THREE.Vector3();
// 			this.camera.getWorldDirection(lookAtVector); // This gives you the direction the camera is facing
// 			console.log(`Camera is looking towards direction: X=${lookAtVector.x}, Y=${lookAtVector.y}, Z=${lookAtVector.z}`);
// 		});


// 		// Add an AxesHelper to the scene (length of 5 units)
// 		// this.scene.add(new THREE.AxesHelper(5));

// 		this.dracoLoader = new DRACOLoader();
// 		this.dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/'); // use a full url path
// 		this.gltf = new GLTFLoader();
// 		this.gltf.setDRACOLoader(this.dracoLoader);

// 		this.isPlaying = true;
		
// 		this.addObjects();
// 		this.resize();
// 		this.render();
// 		// this.setupResize();
// 	}


// 	setupResize() {
// 		window.addEventListener("resize", this.resize.bind(this));
// 	}

// 	resize() {
// 		this.width = this.canvas.offsetWidth;
// 		this.height = this.canvas.offsetHeight;
// 		this.renderer.setSize(this.width, this.height);
// 		this.camera.aspect = this.width / this.height;
	
// 		this.camera.updateProjectionMatrix();
// 	}

// 	addObjects() {
// 		this.material = new THREE.ShaderMaterial({
// 			extensions: {
// 				derivatives: "#extension GL_OES_standard_derivatives : enable"
// 			},
// 			side: THREE.DoubleSide,
// 			uniforms: {
// 				time: { value: 0 },
// 				uColor: { value: pallete },
// 				resolution: { value: new THREE.Vector4() },
// 			},
// 			vertexShader: vertex,
// 			fragmentShader: fragment
// 		});

// 		// Create a plane and set its position and rotation
// 		this.geometry = new THREE.PlaneGeometry(1.5, 1.5, 300, 300);
// 		this.plane = new THREE.Mesh(this.geometry, this.material);

// 		this.scene.add(this.plane);
// 	}


// 	stop() {
// 		this.isPlaying = false;
// 	}

// 	play() {
// 		if(!this.isPlaying){
// 			this.isPlaying = true;
// 			this.render()
// 		}
// 	}

// 	render() {
// 		if (!this.isPlaying) return;
// 		this.time += 0.0001;
// 		this.material.uniforms.time.value = this.time;
// 		requestAnimationFrame(this.render.bind(this));
// 		this.renderer.render(this.scene, this.camera);
// 	}
// }


// // export function createSketch() {
// // 	new Sketch({
// // 		dom: document.getElementById("canvas")
// // 	});
// // }

