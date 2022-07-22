import { useMediaQuery } from "@mui/material";
import React from "react";
import GalleryItem from "./GalleryItem";

function Gallery({ variant, cols, gap, items }) {
	const matches = useMediaQuery("(min-width: 769px)");

	const styles = {
		masonry: { display: "column", columns: matches ? cols : 1 },
		standard: {
			display: "grid",
			gridTemplateColumns: `repeat(${cols || 3}, 1fr)`,
			gap: gap || 10,
		},
	};

	return (
		<div className={`Gallery Gallery_${variant}`} style={styles[variant]}>
			{items.map(item => (
				<GalleryItem
					isMobile={!matches}
					gap={gap}
					key={item.id}
					image={{
						url: item.attributes.url,
						alt: item.attributes.alternativeText,
						caption: item.attributes.caption,
						width: item.attributes.width,
						height: item.attributes.height,
						cloudinaryId: item.attributes.provider_metadata.public_id,
					}}
				/>
			))}
		</div>
	);
}

export default Gallery;
