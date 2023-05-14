import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockAd from "contants/mockAd";
import ListingAdCard from "../ListingAdCard";

describe("ListingAdCard", () => {
  it("renders listing ad card", () => {
    render(<ListingAdCard ad={mockAd} />);

    expect(
      screen.getByRole("button", { name: "See description" })
    ).toBeInTheDocument();
  });

  it("description is hidden", () => {
    render(<ListingAdCard ad={mockAd} />);

    expect(screen.queryByTestId('description')).not.toBeInTheDocument()
  })

  it('show description when user click "See description"', async () => {
    render(<ListingAdCard ad={mockAd} />);

    const toggleButton = screen.getByRole("button", {
      name: "See description",
    });

    await userEvent.click(toggleButton);

    expect(screen.getByTestId('description')).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Hide description" })
    ).toBeInTheDocument();
  });
});
