import React from "react";
import useMediaRatio from "../../../helpers/hooks/useMediaRatio";
import LayoutLeft from "./LayoutLeft";
import LayoutRight from "./LayoutRight";

function TextWrapBlock({ data }) {
	const ratio = useMediaRatio(
		data && data.media.items[0].width,
		data && data.media.items[0].height
	);

	return (
		data && (
			<div className='layout-wrapper'>
				<LayoutRight
					media={data.media.items}
					mediaRatio={ratio}
					mediaOptions={data.media.options}
				/>
				<LayoutLeft text={data.text} callToAction={data.callToAction} />
			</div>
		)
	);
}

export default TextWrapBlock;
