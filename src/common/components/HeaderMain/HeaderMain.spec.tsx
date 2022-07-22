import React from 'react';
import { render, screen } from "@testing-library/react";
import HeaderMain from ".";

jest.mock('next/router', () => {
  return {
    useRouter(){
      return {
        asPath: '/'
      }
    }
  }
})

describe("HeaderMain component", () => {
  it("renders correctly", () => {
    render(<HeaderMain />);
    expect(screen.getAllByText("Ariane")).toBeInTheDocument();
  });
});
