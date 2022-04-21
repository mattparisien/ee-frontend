import { Box } from "@mui/material";
import React from "react";
import Markdown from "../../../../Markdown/Markdown";
import Media from "../../../../Media/Media";
import useLayout from "../../helpers/hooks/useLayout";
import useMedia from "../../helpers/hooks/useMedia";
import SplitBlock from "./SplitBlock";
import Cta from "../../../../Link/Cta";
import Container from "../../../../Containers/ContainerFluid";

function SplitTextMediaBlock({ data }) {
	const media = useMedia(data && data.data.right.media);
	const specs = useLayout(data && data.data.layout);

	return (
		<SplitBlock>
			<Box
				className='left'
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<Container>
					<Markdown
						variantMap={{
							p: "body2",
						}}
					>
						{data && data.data.left.text}
					</Markdown>
					{data.data.left.cta && (
						<Cta
							children={data.data.left.cta.ButtonText}
							target={data.data.left.cta.OpenNewTab ? "_blank" : "_self"}
							href={data.data.left.cta.URL}
						/>
					)}
				</Container>
			</Box>
			<Box className='right'>
				<Media
					variant={media && media.type}
					src={media && media.data.url}
					alt={media && media.data.alt}
					aspectRatio={1}
				/>
			</Box>
		</SplitBlock>
	);
}

export default SplitTextMediaBlock;
