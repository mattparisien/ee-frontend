import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { StyledScene } from "./styles";

function Scene() {
	const boxRef = useRef(null);
	const canvasRef = useRef(null);

	useEffect(() => {
		let Engine = Matter.Engine;
		let Render = Matter.Render;
		let World = Matter.World;
		let Bodies = Matter.Bodies;
		let Composites = Matter.Composites;
		let Composite = Matter.Composite;
		let Mouse = Matter.Mouse;
		let Common = Matter.Common;
		let MouseConstraint = Matter.MouseConstraint;

		let engine = Engine.create({});

		let render = Render.create({
			element: boxRef.current,
			engine: engine,
			canvas: canvasRef.current,
			options: {
				width: 500,
				height: 500,
				background: "transparent",
				wireframes: false,
			},
		});

		Engine.run(engine);
		Render.run(render);

		Composite.add(engine.world, [
			Bodies.rectangle(400, 600, 1200, 50.5, {
				isStatic: true,
			}),
		]);

		//Add bodies
		const stack = Composites.stack(100, 0, 10, 8, 0, 0, function (x, y) {
			return Bodies.circle(
				x,
				y,
				Common.random(30, 100, { restitution: 0.6, friction: 0.1 })
			);
		});

		Composite.add(engine.world, [stack]);

		let mouse = Mouse.create(render.canvas),
			mouseConstraint = MouseConstraint.create(engine, {
				mouse: mouse,
				constraint: {
					stiffness: 0.2,
					render: {
						visible: false,
					},
				},
			});

		Composite.add(engine.world, mouseConstraint);

		render.mouse = mouse;

		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 },
		});

	
	}, []);

	return (
		<StyledScene
			ref={boxRef}
			style={{ width: "100%", height: "100%" }}
			id='scene'
		>
			<canvas ref={canvasRef}></canvas>
		</StyledScene>
	);
}

export default Scene;
