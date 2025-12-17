import React from "react";
import { render, screen } from "@testing-library/react";
import Spacecraft from "./Spacecraft";

describe("Spacecraft", () => {
  it("renders Spacecrafts heading", () => {
    render(<Spacecraft />);
    expect(screen.getByText(/spacecrafts/i)).toBeInTheDocument();
  });
});
