import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "../components";

describe("Input component", () => {
  const placeholder = "Enter a search term";
  const value = "";
  const setValue = jest.fn();
  const name = "search";
  const maxLength = "30";
  const type = "text";

  test("renders the input field with the icon", () => {
    const { getByAltText } = render(
      <Input
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        name={name}
        maxLength={maxLength}
        type={type}
      />
    );

    expect(getByAltText("Search Icon")).toBeInTheDocument();
  });

  test("focuses on the input field when icon is clicked", () => {
    const { getByAltText } = render(
      <Input
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        name={name}
        maxLength={maxLength}
        type={type}
      />
    );
    const icon = getByAltText("Search Icon");
    fireEvent.click(icon);
    const inputField = document.activeElement;
    expect(inputField).toBeInTheDocument();
  });

  test("blurs the input field when it loses focus", () => {
    const { getByAltText } = render(
      <Input
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        name={name}
        maxLength={maxLength}
        type={type}
      />
    );
    const icon = getByAltText("Search Icon");
    fireEvent.click(icon);
    const inputField = document.activeElement;
    fireEvent.blur(inputField);
    expect(inputField).not.toHaveFocus();
  });
});
