import { describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe.todo("Footer component", () => {
  it("renders correctly", () => {
    render(<Footer />);
    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByTestId("technologies")).toBeInTheDocument();
    expect(screen.getByTestId("host")).toBeInTheDocument();
  });
});
