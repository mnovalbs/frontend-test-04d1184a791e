import { render } from "@testing-library/react";
import mockAd from "contants/mockAd";
import ListingAdCardMainInfo from "../ListingAdCardMainInfo"

describe("ListingAdCardMainInfo", () => {
  it('renders main info', () => {
    const { container } = render(<ListingAdCardMainInfo address={mockAd.address} title={mockAd.title} />)

    expect(container).toMatchSnapshot()
  })
});