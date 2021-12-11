import { StyledFooter } from "./styles/StyledFooter.styled";
import Container from "./Container";
import Heading from "./Heading";

export default function Footer(props) {
	return (
		<StyledFooter className='-pd-md'>
			<Container addToRefs={props.addToRefs}>
				<Heading black large type='h1'>
					Let's talk!
				</Heading>
				<span className='footer-email'>
					<a href='/' target='_blank'>
						info@eyesandears.com
					</a>
				</span>
			</Container>
		</StyledFooter>
	);
}
