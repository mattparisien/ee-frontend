export default function determineHeaderColor(section) {
	if (section.classList.contains("-bg-red")) {
		return "light";
	} else if (section.classList.contains("-bg-light")) {
		return "dark";
	} else if (section.classList.contains("-bg-yellow")) {
		return "dark";
	}
}
