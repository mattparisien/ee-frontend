import imagesArr from "../tempImages/imageExports";
import SliderImage from "./SliderImage";

export default function SliderItem() {
	return (
		<div className='slider-item'>
			<SliderImage imageUrl={imagesArr[0]}/>
		</div>
	);
}
