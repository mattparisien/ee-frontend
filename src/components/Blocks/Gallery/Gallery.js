import React from "react";
import GalleryItem from "./GalleryItem";
import { useMediaQuery } from "@mui/material";

function Gallery({ variant, cols, gap, items }) {
	const matches = useMediaQuery("(min-width: 769px)");

	const styles = {
		masonry: { display: "column", columns: matches ? cols : 1 },
	};

	return (
		<div className={`Gallery Gallery_${variant}`} style={styles[variant]}>
			{items.map(item => (
				<GalleryItem
					gap={gap}
					key={item.id}
					image={{
						url: item.attributes.url,
						alt: item.attributes.alternativeText,
						caption: item.attributes.caption,
						width: item.attributes.width,
						height: item.attributes.height,
					}}
				/>
			))}
		</div>
	);
}

export default Gallery;
