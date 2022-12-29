import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

test("should not allowed click button if disabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  // ngecek jika punya span disabled
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  // ngecek jika terdaoat text loading
  expect(getByText(/loading/i)).toBeInTheDocument();
  // ngecek jika terdapat span
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  // ngecek jika terdapat span
  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render <Link> tag", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  // ngecek jika terdapat span
  expect(container.querySelector("a")).toBeInTheDocument();
});
