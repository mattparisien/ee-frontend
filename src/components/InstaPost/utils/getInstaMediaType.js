import axios from "axios";

const getInstaMediaType = url => {
	axios
		.get("https://www.instagram.com/tv/CcD_SFlOLuO/?__a=1")
		.then(res => console.log(res));
};

export default getInstaMediaType;
