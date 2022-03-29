import { useEffect, useContext, useState, useRef } from "react";
import { DataContext } from "../../App";
import * as THREE from "three";

function FlowyImage({ container, imageSrc }) {
	// const { posts } = useContext(DataContext);

	const textures = useRef([]);
	textures.current = [];

	useEffect(() => {
		//Load image textures for mesh
		const urls = [];

		if (imageSrc && container) {
			const texture = new THREE.TextureLoader().load(imageSrc);
			textures.current.push(texture);

			class Webgl {
				constructor() {
					this.container = container;
					this.scene = new THREE.Scene();
					this.perspective = 1000; // Camera perspective
					this.sizes = new THREE.Vector2(0, 0); //Mesh sizes
					this.offset = new THREE.Vector2(0, 0); //Mesh position
					this.uniforms = {
						uTexture: { value: textures.current[0] },
						uAlpha: { value: 0.0 },
						uOffset: { value: new THREE.Vector2(0.0, 0.0) },
					};

					this.addEventListeners(container);
					this.setupCamera();
				}

				get viewport() {
					let width = window.innerWidth;
					let height = window.innerHeight;
					let aspect = width / height;

					return { width, height, aspect };
				}

				addEventListeners(element) {
					element.addEventListener("mouseenter", () => {
						this.hovered = true;
					});

					element.addEventListener("mouseleave", () => {
						this.hovered = false;
					});
				}

				setupCamera() {
					let fov =
						180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective)) / Math.PI;
				}
			}
		}
	}, [imageSrc]);

	return <div>FlowyImage</div>;
}

export default FlowyImage;
