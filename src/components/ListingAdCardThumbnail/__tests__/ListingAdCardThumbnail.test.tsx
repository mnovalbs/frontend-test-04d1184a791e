import { render } from "@testing-library/react"
import mockAd from "contants/mockAd"
import ListingAdCardThumbnail from "../ListingAdCardThumbnail"

describe("ListingAdCardThumbnail", () => {
  it('renders thumbnail', () => {
    const { container } = render(<ListingAdCardThumbnail alt={mockAd.title} src={mockAd.pic} />)

    expect(container).toMatchSnapshot()
  })
})