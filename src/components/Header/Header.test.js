import {
	fireEvent,
	render
} from "@testing-library/react";
import Header from "./Header";
import ResponsiveAppBar from "./ResponsiveAppBar";

test("menu button should initial container a burger icon", () => {
	const { queryByTestId } = render(<Header />);
	const button = queryByTestId("menuBtn");
	expect(queryByTestId("close")).not.toBeInTheDocument();
	expect(queryByTestId("burger")).toBeInTheDocument();
});

test("menu button is clickable", () => {
	const mock = jest.fn();
	const { queryByTestId } = render(<Header toggleMenu={mock} />);
	fireEvent.click(queryByTestId("menuBtn"));

	
});

test("menu button toggles icons when clicked", async () => {
	const mock = jest.fn();
	const { queryByTestId } = render(<Header toggleMenu={mock} />);
	fireEvent.click(queryByTestId("menuBtn"), mock);
  expect(mock).toHaveBeenCalledTimes(1)
});

test("menu button toggles icons when clicked", async () => {
	const mock = jest.fn();
	const { queryByTestId } = render(<Header toggleMenu={mock} />);
	fireEvent.click(queryByTestId("menuBtn"), mock);
  expect(mock).toHaveBeenCalledTimes(1)
});

test("nav list should not be visible on mobile", () => {

  const {queryByTestId} = render(<ResponsiveAppBar/>)

  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 200
  });

  window.dispatchEvent(new Event("resize"));
  expect(window.innerWidth).toBe(200);
  expect(queryByTestId("navDesktop")).not.toBeInTheDocument();
})