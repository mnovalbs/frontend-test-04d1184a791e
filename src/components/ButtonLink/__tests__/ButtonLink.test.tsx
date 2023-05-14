import { render, screen } from "@testing-library/react";
import ButtonLink from "../ButtonLink";

describe("ButtonLink", () => {
  it("renders button", () => {
    render(<ButtonLink>My Button</ButtonLink>);

    expect(
      screen.getByRole("button", { name: "My Button" })
    ).toBeInTheDocument();
  });
});
