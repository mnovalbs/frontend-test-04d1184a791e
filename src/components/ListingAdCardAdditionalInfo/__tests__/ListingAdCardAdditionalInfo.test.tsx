import { render } from "@testing-library/react";
import mockAd from "contants/mockAd";
import ListingAdCardAdditionalInfo from "../ListingAdCardAdditionalInfo";

describe("ListingAdCardAdditionalInfo", () => {
  it("renders ListingAdCardAdditionalInfo", () => {
    const { container } = render(
      <ListingAdCardAdditionalInfo
        projectType={mockAd.project_type}
        year={mockAd.year}
        ownershipType={mockAd.ownership_type}
        availabilitiesLabel={mockAd.availabilities_label}
      />
    );

    expect(container).toMatchSnapshot()
  });
});
