// const data = {
// 	id: 2,
// 	name: "section-work",
// 	children: {
// 		heading: null,
// 		paragraph: null,
// 		list: {
// 			children: {
// 				paragraph: {
// 					name: "paragraph-large",
// 					copy: "hi",
// 					children: {
// 						hello: "hi",
// 					},
// 				},
// 			},
// 			name: "linkable-list",
// 			copy: [
// 				"Project name 1",
// 				"Project name 2",
// 				"Project name 3",
// 				"Project name 4",
// 			],
// 		},
// 		images: null,
// 		buttons: {
// 			name: "button-primary",
// 			copy: "View all our projects",
// 		},
// 	},
// };


function filter(obj) {
	let arr = [];

	if (!obj["children"]) {
		return;
	}

	for (key in obj["children"]) {
		if (!Array.isArray(obj["children"][key]) && obj["children"][key] !== null) {
			filter(obj["children"][key]);
		} else {
		}
	}
}

console.log(filter(data));
