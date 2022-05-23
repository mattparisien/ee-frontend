import React from "react";
import LayoutLeft from "./LayoutLeft";
import LayoutRight from "./LayoutRight";

function TextWrapBlock({ data }) {
	return (
		data && (
			<div className='layout-wrapper'>
				<LayoutRight
					media={data.MediaItem.MediaUpload.Media.data[0].attributes}
					mediaRatio={"portrait"}
				/>
				<LayoutLeft text={data.Text} callToAction={data.CallToAction} />
			</div>
		)
	);
}

export default TextWrapBlock;
