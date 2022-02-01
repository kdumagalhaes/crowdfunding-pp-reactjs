import { render } from "@testing-library/react";
import { HomeRewardCard } from "..";

describe("HomeRewardCard", () => {
  it("initial component should match snapshot", () => {
    const { asFragment } = render(<HomeRewardCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
