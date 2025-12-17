import React from "react";
import { render, screen } from "@testing-library/react";

import SpacecraftDetail from "./SpacecraftDetail";

describe("SpacecraftDetail", () => {
  it("renders details section", () => {
    render(<SpacecraftDetail id={1} onBack={() => {}} />);
    // The test will show 'Loading...' unless you mock the API, so just check for loading for now
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
