import { waitFor, render, screen } from "@testing-library/react";
import { debug } from "console";
import Footer from '.';

describe("Footer component", () => {
    it("renders correctly", async () => {
        const { getAllByText } = render(<Footer />);
        expect(getAllByText("Ariane")).toBeInTheDocument();
    });
});