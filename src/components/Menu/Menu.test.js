import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import ResponsiveAppBar from "../Header/ResponsiveAppBar";

it("renders without crashing", () => {
	render(<ResponsiveAppBar />);

	fireEvent.click(screen.queryByTestId("burger"));

	expect(screen.queryByTestId("menu")).toBeInTheDocument();
});

