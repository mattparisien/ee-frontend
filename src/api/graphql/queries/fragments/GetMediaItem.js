
const GETMEDIAITEM = `
MediaItem {
	id
	Permalink
	Upload {
		data {
			attributes {
				url
				alternativeText
				caption
				provider_metadata
			}
		}
	}
	InstaUrl
	Options {
		Inset
		Linkable
		Format
		DisplayCaption
	}
}
`;

export default GETMEDIAITEM;