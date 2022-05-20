import React from "react";

function CarouselItemInfo({ title, subtitle }) {
	return <div className='CarouselItemInfo mt-2'>
    <p className="text-xl font-semibold">{title}</p>
    <p className="text-xl font-semibold">{subtitle}</p>
  </div>;
}

export default CarouselItemInfo;
