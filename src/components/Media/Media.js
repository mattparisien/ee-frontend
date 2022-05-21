import React from "react";
import MyImage from "./MyImage";
import Video from "./Video";

function Media(props) {
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
					/>
				);
			case "video":
				return <MyVideo />;
		}
	};

	return (
		<div className={`Media relative pt-[56.29%] w-full h-full`}>
			<div className='w-full h-full absolute top-0 left-0'>
				{" "}
				{renderItem(props.resource_type)}
			</div>
		</div>
	);
}

export default Media;
