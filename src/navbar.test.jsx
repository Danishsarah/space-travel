import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./navbar";

describe("NavBar", () => {
  it("renders navigation links", () => {
    render(<NavBar onNavigate={() => {}} canGoBack={false} />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/spacecrafts/i)).toBeInTheDocument();
    expect(screen.getByText(/planets/i)).toBeInTheDocument();
  });
});
