
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_APIKEY);

export default (req, res) => {
	const body = JSON.parse(req.body);


	const message = `
    Name: ${body.name.value}\r\n
    Email: ${body.email.value}\r\n
    Company: ${body.company.value}\r\n
    Message: ${body.message.value}\r\n
  `;

	const data = {
		to: 'hello@matthewparisien.com',
		from: `hello@matthewparisien.com`,
		subject: `New web form message!`,
		text: message,
		html: message.replace(/\r\n/g, "<br>"),
	};

	mail.send(data);

	res.status(200).json({ status: "ok" });
};
