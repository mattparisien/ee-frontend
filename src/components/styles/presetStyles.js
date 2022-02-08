import { device, deviceSize } from "./device";

export const RESPONSIVECONTAINERGUTTER = (padding, direction) => {
	return `

@media ${device.mobileS} {
  padding${direction && `-${direction}`}: ${padding === "small" && "2rem"};
}

@media ${device.mobileM} {
  padding${direction && `-${direction}`}: ${padding === "small" && "2rem"};
}

@media ${device.mobileL} {
  padding${direction && `-${direction}`}: ${padding === "small" && "2rem"};
}

@media (min-width: 680px) {
  padding: ${padding === "small" && "3rem"};
}

@media ${device.tablet} {
  padding${direction && `-${direction}`}: ${padding === "small" && "3rem"};
  padding${direction && `-${direction}`}: ${padding === "regular" && "5rem"};
}

@media ${device.laptop} {
  padding${direction && `-${direction}`}: ${padding === "small" && "5rem"};
  padding${direction && `-${direction}`}: ${padding === "regular" && "7rem"};
}

@media ${device.laptopL} {
  padding${direction && `-${direction}`}: ${padding === "small" && "5rem"};
  padding${direction && `-${direction}`}: ${padding === "regular" && "0 15rem"};
}

@media ${device.desktop} {
  padding${direction && `-${direction}`}: ${padding === "small" && "5rem"};
  padding${direction && `-${direction}`}: ${
		padding === "regular" && " 0 14rem"
	};
}

@media (min-width: 2500px) {
  padding${direction && `-${direction}`}: ${padding === "small" && "5rem"};
  padding${direction && `-${direction}`}: ${padding === "regular" && "0 14rem"};
} ;


`;
};
