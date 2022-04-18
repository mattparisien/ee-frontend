import React, { createContext } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ApolloProvider } from "@apollo/client";
import { client } from "../api/graphql/index";

export const DataContext = createContext();
export const SearchContext = createContext();
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
	location,
	search,
	setSearch,
}) {
	return (
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
			<ApolloProvider client={client}>
				<SiteWideControls.Provider value={siteControls}>
					<DataContext.Provider value={stateData}>
						<SearchContext.Provider value={{ search, setSearch }}>
							<ColorContext.Provider>
								<CursorContext.Provider valu={{ cursor, changeCursor }}>
									{children}
								</CursorContext.Provider>
							</ColorContext.Provider>
						</SearchContext.Provider>
					</DataContext.Provider>
				</SiteWideControls.Provider>
			</ApolloProvider>
		</LocomotiveScrollProvider>
	);
}

export default Context;
