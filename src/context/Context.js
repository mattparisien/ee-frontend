import React, { createContext } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export const DataContext = createContext();
export const SiteWideControls = createContext();
export const LoadingContext = createContext();
export const ColorContext = createContext();
export const CursorContext = createContext();

function Context({
	children,
	stateData,
	siteControls,
	cursor,
	changeCursor,
	scrollRef,
  location
}) {
	return (
		<LocomotiveScrollProvider
			onLocationChange={scroll => scroll.scrollTo(0, 0)}
			watch={[location.pathname]}
			lerp={1}
			options={{
				initPosition: {
					x: 0,
					y: 0,
				},

				smooth: true,
				getDirection: true,
				getSpeed: true,
			}}
			containerRef={scrollRef}
		>
			<SiteWideControls.Provider value={siteControls}>
				<DataContext.Provider value={stateData}>
					<ColorContext.Provider>
						<CursorContext.Provider valu={{ cursor, changeCursor }}>
							{children}
						</CursorContext.Provider>
					</ColorContext.Provider>
				</DataContext.Provider>
			</SiteWideControls.Provider>
		</LocomotiveScrollProvider>
	);
}

export default Context;
