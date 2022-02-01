import { render } from "@testing-library/react";
import { ProductAboutSection } from "..";

describe("ProductAboutSection", () => {
  it("initial component should match snapshot", () => {
    const { asFragment } = render(<ProductAboutSection />);
    expect(asFragment()).toMatchSnapshot();
  });
});
