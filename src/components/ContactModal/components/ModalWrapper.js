import React from "react";
import CloseButton from "./CloseButton";
import MarqueeHeading from "./MarqueeHeading";

function ModalWrapper({ ready, children }) {
	return (
		<div
			style={{ clipPath: `url(#circle-clip)` }}
			className={`ContactModal fixed top-0 left-0 w-screen h-screen z-[9999999] block px-5 sm:px-10 md:px-20 py-10 text-yellow-custom`}
		>
			<MarqueeHeading />
			<div className='ContactModal_Bg absolute top-0 left-0 w-full h-full bg-dark z-1'></div>
			<div className='ContactModal_Inner relative w-full h-full'>
				{children}

				<svg
					id='Layer_1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 114.71 114.71'
				>
					<defs>
						<clipPath
							id='circle-clip'
							className='ease-dropdown'
							style={{
								transform: `translate(-100%, -100%)scale(${ready ? 29 : 1})`,
								transformOrigin: "center",
								transitionDuration: "0.8s",
							}}
						>
							<circle class='cls-1' cx='57.35' cy='57.35' r='57.35' />
						</clipPath>
					</defs>
				</svg>
			</div>
			<CloseButton isReady={ready} />
		</div>
	);
}

export default ModalWrapper;
