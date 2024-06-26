import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Badge from "../atoms/Badge";

describe("Badge component", () => {
  test("renders the badge when count is greater than 0", () => {
    render(<Badge count={5} />);
    const badgeElement = screen.getByText("5");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass("badge");
  });

  test("does not render the badge when count is 0", () => {
    render(<Badge count={0} />);
    const badgeElement = screen.queryByText("0");
    expect(badgeElement).toBeNull();
  });

  test("does not render the badge when count is less than 0", () => {
    render(<Badge count={-1} />);
    const badgeElement = screen.queryByText("-1");
    expect(badgeElement).toBeNull();
  });
});
