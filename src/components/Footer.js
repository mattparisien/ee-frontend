import { Ear } from "./Svg";

export default function Footer() {
	return (
		<footer className='-bg-dark'>
			<div className='top-paper'>
				<img src='/paper-texture-footer.png' alt='paper-texture'></img>
			</div>
			<div className='content -pd-md'>
				<div className='heading -xl'>
					We are eager to <span className="ear-footer">{<Ear />}</span> from you
				</div>
				<div className='contact-info'>
					<div className='socials'>
						<span className='-mini'>Socials</span>
						<a href="/">Instagram</a>
						<a href="/">Facebook</a>
						<a href="/">Twitter</a>
					</div>
					<div className='phone'>
						<span className='-mini'>Phone</span>
						<p>15144671771</p>
					</div>
					<div className='email'>
						<span className='-mini'>Say hi</span>
						<a href="/">info@eyesandears.com</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
