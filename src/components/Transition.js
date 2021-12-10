import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../data/lottie/lottie_transition.json";

function TransitionMask() {
	return (
		<div className='transition-mask'>
			<svg viewBox='0 0 2285.54 1491.69'>
				<defs>
					<mask id='mask-trans' maskContentUnits='objectBoundingBox'>
						<path
							class='clip-me-path'
							id='clip-me-path'
							d='M4628-4876.25c-414.48-274.36-717.19-441.06-768.87-381.31-78.16,90.37,463.13,646.38,396.93,715.73-73.26,76.77-803.91-533.41-847-484.44-43.93,49.93,680.77,724.29,637.6,775.11-57.48,67.67-1402.15-1057.54-1490.85-962.64C2512-5167,2775-4824.32,3540.29-4004.25'
							transform='translate(-2416.66 5404.17)'
						/>
					</mask>
				</defs>
			</svg>
		</div>
	);
}

export default TransitionMask;
