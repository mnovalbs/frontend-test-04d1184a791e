import { render } from "@testing-library/react"
import mockAd from "contants/mockAd"
import ListingAdCardDescription from "../ListingAdCardDescription"

describe('ListingAdCardDescription', () => {
  it('renders description', () => {
    const { container } = render(<ListingAdCardDescription description={mockAd.description} />)

    expect(container).toMatchSnapshot()
  })
})