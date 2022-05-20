function detectTouchDevice() {
	if (window !== "undefined") {
		return (
			"ontouchstart" in window ||
			navigator.maxTouchPoints > 0 ||
			navigator.msMaxTouchPoints > 0
		);
	}
}

export default detectTouchDevice;
