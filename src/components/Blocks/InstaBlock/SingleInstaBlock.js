import React from "react";
import InstaPost from "../../InstaPost/InstaPost";
// import Avatar from "../assets/avatar.png";

function SingleInstaBlock({ data }) {
	return <InstaPost {...data} />;
}

export default SingleInstaBlock;
