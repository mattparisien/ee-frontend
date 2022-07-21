import { isResSent } from "next/dist/shared/lib/utils";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../lib/context";
import ModalWrapper from "./components/ModalWrapper";
import ContactForm from "./components/ContactForm";
import Heading from "../Heading/Heading";

function ContactModal({ isActive }) {
	const { appState } = useContext(GlobalContext);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		if (appState.modalActive) {
			setTimeout(() => {
				setReady(true);
			}, 40);
		} else {
			setReady(false);
		}
	}, [appState.modalActive]);

	return (
		<ModalWrapper ready={ready}>
			<div className='sticky z-50 h-full w-full text-light'>
				<div className='flex flex-col md:flex-row items-start justify-between mt-40'>
					<p className='flex-1 text-2xl mr-10 mb-5 md:mb-0'>
						Let's unlock together the next level of possibilities! Reach out.
					</p>
					<ContactForm />
				</div>
			</div>
		</ModalWrapper>
	);
}

export default ContactModal;
