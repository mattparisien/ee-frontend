import React from "react";
import MyImage from "./MyImage";
import MyVideo from "./Video";
import Frame from "../Frame/Frame";

function Media(props) {
	const classes = {
		landscape: "pt-[56.29%]",
		portrait: "pt-[125%]",
		square: "pt-[100%]",
	};

	console.log(props);

	const renderItem = resourceType => {
		switch (resourceType) {
			case "image":
				return (
					<MyImage
						src={props.url}
						alt={props.alt}
						width='100%'
						height='100%'
						layout='fill'
						objectFit={"cover"}
						grayscale={props.grayscale}
					/>
				);
			case "video":
				return (
					<MyVideo
						src={props.url}
						width='100%'
						height='100%'
						layout='fill'
						objectFit={"cover"}
					/>
				);
		}
	};

	return (
		<>
			<div
				className={`Media relative w-full h-full ${
					classes[props.aspect || "landscape"]
				}`}
			>
				<div className='Media_Visual w-full h-full absolute top-0 left-0'>
					{" "}
					{renderItem(props.resource_type)}
				</div>
			</div>
			{props.caption && (
				<div className='Media_Caption text-xs text-right mt-2 text-neutral-500'>
					{props.caption}
				</div>
			)}
		</>
	);
}

export default Media;
