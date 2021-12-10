export default function rgb2hex(rgb) {
	const hex = `#${rgb
		.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
		.slice(1)
		.map(n => parseInt(n, 10).toString(16).padStart(2, "0"))
		.join("")}`;

	return hex;
}
