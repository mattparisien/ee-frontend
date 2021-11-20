import SliderImage from "./SliderImage";
import imagesArr from "../tempImages/imageExports";
import Slider from "./Slider";

export default function SliderItem() {
	return (
		<div className='slider-item'>
			<SliderImage imageUrl={imagesArr[0]}/>
		</div>
	);
}
