import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

function Box() {
	return (
		<mesh>
			<boxBufferGeometry attach='geometry' />
			<meshLambertMaterial attach='material' color='hotpink' />
		</mesh>
	);
}

function ImageMesh() {
	return (
		<div id='scene-container'>
			<Canvas>
				<OrbitControls />
				<ambientLight intensity={0.5} />
				<Box />
			</Canvas>
		</div>
	);
}

export default ImageMesh;
