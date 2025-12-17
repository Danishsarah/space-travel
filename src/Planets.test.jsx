import React from "react";
import { render, screen } from "@testing-library/react";
import Planets from "./Planets";

describe("Planets", () => {
  it("renders Planets heading", () => {
    render(<Planets />);
    expect(screen.getByText(/planets/i)).toBeInTheDocument();
  });
});
