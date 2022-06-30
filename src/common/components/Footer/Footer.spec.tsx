import { render, screen } from "@testing-library/react";
import Footer from '.';

describe("Footer component", () => {
    it("renders correctly", async () => {
        render(<Footer />);

        expect(screen.getAllByText("Ariane")).toBeInTheDocument();
    });
});