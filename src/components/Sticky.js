import React, { useRef, useEffect } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//Sticky section
function Sticky({ themes, visionCopy }) {
	const stickyWrapper = useRef(null);
  const revealer = useRef(null);
	const timeline = useRef(gsap.timeline());

	useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
		timeline.current.to(revealer.current, {
      scrollTrigger: {
        trigger: stickyWrapper.current,
        pin: true,
        pinSpacing: true,
        start: 'top top',
        end: '+=1000',
        scrub: 1,
      },
      opacity: 0,
      duration: 10
    })  

    
	}, []);

	return (
		<div ref={stickyWrapper} className="sticky-container">
			<Container
				flex
				column
				alignCenter
				justifyCenter
				sectionTheme={themes.revealer}
				paddingSmall
				isAbove
        ref={revealer}
			>
				<div>
					<Heading black xl>
						GOOD
					</Heading>
				</div>
				<div>
					<span style={{ textTransform: "uppercase", fontSize: "1.3rem" }}>
						scroll here
					</span>
				</div>
			</Container>
			<Container sectionTheme={themes.revealed} isBelow>
				<div>
					<Paragraph large>{visionCopy}</Paragraph>
				</div>
			</Container>
		</div>
	);
}

export default Sticky;
