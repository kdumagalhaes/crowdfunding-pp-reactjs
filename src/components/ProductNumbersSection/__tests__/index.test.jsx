import { render } from "@testing-library/react";
import { ProductNumbersSection } from "..";

describe("ProductNumbersSection", () => {
  it("initial component should match snapshot", () => {
    const { asFragment } = render(<ProductNumbersSection />);
    expect(asFragment()).toMatchSnapshot();
  });
});
