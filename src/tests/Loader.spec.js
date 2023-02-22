import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import { Loader } from "../components";

// Mock the useSelector hook to return a loading state of false
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Loader", () => {
  test("renders children when loading is false", () => {
    useSelector.mockReturnValue(false);
    const { getByText } = render(
      <Loader>
        <div>Content</div>
      </Loader>
    );
    expect(getByText("Content")).toBeInTheDocument();
  });

  test("renders loader when loading is true", () => {
    useSelector.mockReturnValue(true);
    const { container } = render(
      <Loader>
        <div>Content</div>
      </Loader>
    );
    expect(container.getElementsByClassName("loader").length).toBe(1);
  });
});
