import { render } from "@testing-library/react";
import { Header } from "..";

describe("Header", () => {
  it("initial component should match snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
