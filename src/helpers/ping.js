//Ping heroku server to avoid idling

const pingHeroku = () => {
	const interval = 2000;

	const handleInterval = () => {
		console.log("hello!");
	};

	const timer = setInterval(handleInterval, interval);
};


export default pingHeroku;
