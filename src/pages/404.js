import React from "react";
import Cta from "../components/Link/Cta";
import Container from "../components/Containers/ContainerFluid";

import { DrawnLogo } from "../components/Vector/Svg";

function Custom404() {
	return (
		<div className='Custom404  flex flex-col items-center justify-center my-[10rem]'>
			<Container maxWidth='small'>
				
				<div className='w-[100px] h-[100px] mx-auto mb-10'>
					<DrawnLogo width='200px' height='200px' />
				</div>

				<div className='text-4xl sm:text-4xl font-adieu text-center'>
					Whoops, looks like this page is gone.
				</div>

				<div className='mt-10 flex items-center justify-center'>
					<Cta href='/' classes='hidden'>
						go to website
					</Cta>
				</div>
			</Container>
		</div>
	);
}

export default Custom404;
