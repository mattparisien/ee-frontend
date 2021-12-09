
import { StyledFooter } from "./styles/StyledFooter.styled";
import Heading from "./Heading";

export default function Footer() {
	return (
		<StyledFooter className="-pd-md">
			
			<Heading black large type="h1">
				Let's talk!
			</Heading>
			<span className="footer-email">
				<a href="/" target="_blank">info@eyesandears.com</a>
		
			</span>
			
			
		</StyledFooter>
	);
}
