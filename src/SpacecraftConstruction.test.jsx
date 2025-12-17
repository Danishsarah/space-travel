import React from "react";
import { render, screen } from "@testing-library/react";
import SpacecraftConstruction from "./SpacecraftConstruction";

describe("SpacecraftConstruction", () => {
  it("renders construction form", () => {
    render(<SpacecraftConstruction onConstruct={() => {}} planets={[]} />);
    expect(screen.getAllByText(/construct/i).length).toBeGreaterThan(0);
  });
});
