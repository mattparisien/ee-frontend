import axios from "axios";

export async function getFooter(setState) {
	try {
		const config = {
			params: {
				fields: "Heading, Email",
			},
		};

		const footerText = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/footer`,
			config
		);

		setState(prev => ({
			...prev,
			footer: { ...footerText.data.data.attributes },
		}));
    
	} catch (err) {
		console.log(err);
	}
}


