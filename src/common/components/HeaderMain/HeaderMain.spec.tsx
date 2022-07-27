import React from 'react';
import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import HeaderMain from ".";

vi.mock('next/router', () => {
  return {
    useRouter(){
      return {
        asPath: '/'
      }
    }
  }
})

describe("HeaderMain component", () => {
  it.todo("renders correctly", () => {
    render(<HeaderMain />);
    expect(screen.getAllByText("Ariane")).toBeInTheDocument();
  });
});
