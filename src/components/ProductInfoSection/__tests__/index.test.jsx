import { fireEvent, render, screen } from "@testing-library/react";
import { ProductInfoSection } from "..";

describe("ProductInfoSection", () => {
    it("initial component should match snapshot", () => {
        const { asFragment } = render(<ProductInfoSection />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should render the bookmark button icon", () => {
        render(<ProductInfoSection />);
        const bookmarkBtnImg = screen.getByAltText(/bookmark icon/i);
        expect(bookmarkBtnImg).toBeVisible();
    });

    it("should change the bookmark text and button when bookmark button is clicked", () => {
        render(<ProductInfoSection />);

        expect(screen.getByText("Bookmark")).toBeVisible();
        expect(screen.queryByText("Bookmarked")).not.toBeInTheDocument();
        expect(screen.getByAltText("bookmark icon")).toBeVisible();
        expect(
          screen.queryByAltText("bookmark icon active")
        ).not.toBeInTheDocument();

        const bookmarkBtn = screen.getByText("Bookmark");
        fireEvent.click(bookmarkBtn);

        expect(screen.queryByText("Bookmark")).not.toBeInTheDocument();
        expect(screen.getByText("Bookmarked")).toBeVisible();
        expect(screen.queryByAltText("bookmark icon")).not.toBeInTheDocument();
        expect(screen.getByAltText("bookmark icon active")).toBeVisible();
    });
});
