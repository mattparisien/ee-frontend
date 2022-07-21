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
				<ContactForm />
			</div>
		</ModalWrapper>
	);
}

export default ContactModal;
