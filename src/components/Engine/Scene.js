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

		let Common = Matter.Common;
		let MouseConstrainst = Matter.MouseConstraint;

		let engine = Engine.create({});

		let render = Render.create({
			element: boxRef.current,
			engine: engine,
			canvas: canvasRef.current,
			options: {
				width: 800,
				height: 800,
				background: "rgba(255, 0, 0, 0.5)",
				wireframes: false,
			},
		});

		Engine.run(engine);
		Render.run(render);

		Composite.add(engine.world, [
			Bodies.rectangle(400, 600, 1200, 50.5, {
				isStatic: true,
				render: { fillStyle: "#060a19" },
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
