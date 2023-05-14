import { render } from "@testing-library/react";
import mockAd from "contants/mockAd";
import ListingAdCardPriceInfo from "../ListingAdCardPriceInfo";

describe("ListingAdCardPriceInfo", () => {
  it("renders price info", () => {
    const { container } = render(
      <ListingAdCardPriceInfo
        psfMin={mockAd.psf_min}
        psfMax={mockAd.psf_max}
        subPriceLabel={mockAd.subprice_label}
      />
    );

    expect(container).toMatchSnapshot()
  });
});
