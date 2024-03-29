import React from "react";
import { render, screen } from "@testing-library/react";
import { SuccessMessage } from "courses/Quiz/src/Common/SuccessMessage/SuccessMessage";

test("Should render correct text and image", () => {
  render(<SuccessMessage message="test" />);

  expect(screen.getByText("test")).toBeInTheDocument();
  expect(screen.getByAltText("tick")).toBeInTheDocument();
});
