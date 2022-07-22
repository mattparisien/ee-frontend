import React from "react";
import Container from "../../Containers/ContainerFluid";
import Cta from "../../Link/Cta";
import { DrawnLogo } from "../../Vector/Svg";

function MaintenancePage() {
	return (
		<div className='MaintenancePage'>
			<Container maxWidth='medium'>
				<div className='w-full h-full flex flex-col items-center justify-center'>
					<div className='text-center text-5xl md:text-7xl lg:text-6xl font-walsheim font-bold tracking-tight'>
						We'll be back soon!
					</div>
					<div className='text-2xl text-center mt-10 font-walsheim font-medium w-full md:w-2/3'>
						We are working hard on improving some new features and will be back
						shortly.
					</div>
					<div className='mt-10 flex items-center justify-center'>
						<Cta href='mailto:sammy@eyesandearsagency.com'>CONTACT US</Cta>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default MaintenancePage;
