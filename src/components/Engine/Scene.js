import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { StyledScene } from "./styles";
import useResize from "../../helpers/hooks/useResize";

function Scene() {
	const boxRef = useRef(null);
	const canvasRef = useRef(null);
	const [windowWidth] = useResize();

	useEffect(() => {
		let Engine = Matter.Engine,
			Render = Matter.Render,
			Runner = Matter.Runner,
			World = Matter.World,
			MouseConstraint = Matter.MouseConstraint,
			Mouse = Matter.Mouse,
			Bodies = Matter.Bodies,
			Body = Matter.Body,
			Composite = Matter.Composite;

		let engine = Engine.create(),
			world = engine.world;

		let render = Render.create({
			element: document.body,
			engine: engine,
			options: {
				width: windowWidth,
				height: 600,
				wireframes: false,
				showVelocity: true,
			},
		});

		Render.run(render);

		let runner = Runner.create();
		Runner.run(runner, engine);

		Composite.add(world, [
			// falling blocks
			Bodies.rectangle(200, 100, 60, 60, { frictionAir: 0.001 }),
			Bodies.rectangle(400, 100, 60, 60, { frictionAir: 0.05 }),
			Bodies.rectangle(600, 100, 60, 60, { frictionAir: 0.1 }),

			// walls
			Bodies.rectangle(400, 0, windowWidth, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, windowWidth, 50, { isStatic: true }),
			Bodies.rectangle(windowWidth - 200, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0 - 130, 300, 50, 600, { isStatic: true }),
		]);

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

		Composite.add(world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		// fit the render viewport to the scene
	
	
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
