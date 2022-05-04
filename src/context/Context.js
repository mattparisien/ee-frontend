import React, { createContext } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ParallaxProvider } from "react-scroll-parallax";

export const DataContext = createContext();
export const SearchContext = createContext();
export const SiteWideControls = createContext();
export const GlobalContext = createContext();
export const ColorContext = createContext();
export const CursorContext = createContext();

function Context({
	children,
	stateData,
	siteControls,
	cursor,
	toggleCursorState,
	scrollRef,
	location,
	currentColor,
	setCurrentColor,
	setLoading,
	error,
	setError,
}) {
	return (
		<GlobalContext.Provider value={{ setLoading, error, setError }}>
			<ParallaxProvider>
				<LocomotiveScrollProvider
					onLocationChange={scroll => scroll.scrollTo(0, 0)}
					watch={[location.pathname]}
					lerp={2}
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
							<SearchContext.Provider>
								<ColorContext.Provider
									value={{ currentColor, setCurrentColor }}
								>
									<CursorContext.Provider value={{ cursor, toggleCursorState }}>
										{children}
									</CursorContext.Provider>
								</ColorContext.Provider>
							</SearchContext.Provider>
						</DataContext.Provider>
					</SiteWideControls.Provider>
				</LocomotiveScrollProvider>
			</ParallaxProvider>
		</GlobalContext.Provider>
	);
}

export default Context;
