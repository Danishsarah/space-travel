import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders without crashing and shows navigation", () => {
    render(<App />);
    expect(screen.getAllByText(/space travel/i).length).toBeGreaterThan(0);
  });
});
