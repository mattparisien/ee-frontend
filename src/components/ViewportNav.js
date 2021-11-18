import classNames from "classnames";
import { ExitNav, Arrow } from "./Svg";

export default function ViewportNav(props) {
	return (
		<div className='viewport-nav -fixed'>
			<button className='viewport-nav__exit-btn -fixed-right' type='button' onClick={props.onClick}>
				{ExitNav()}
			</button>
			<div className='viewport-nav__inner'>
				<div className='nav-links right-col'>
					<ul>
						<li className='viewport-nav__list-item'>
							<a href='/'>Home</a>
						</li>
						<li className='viewport-nav__list-item'>
							<a href='/'>Agency</a>
						</li>
						<li className='viewport-nav__list-item'>
							<a href='/'>Projects</a>
						</li>
						<li className='viewport-nav__list-item'>
							<a href='/'>
								Lets' Talk{" "}
								<div className='arrow-container'>
									<span>{<Arrow />}</span> <span>{<Arrow secondArrow/>}</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<div className='left-col -flex -flex-col -flex-bet'>
					<span className='info-top'>Eyes & Ears</span>
					<span className='info-bottom'>© 2021</span>
				</div>
			</div>
		</div>
	);
}
