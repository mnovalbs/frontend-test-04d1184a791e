import { Ad } from "types/Ad";

export interface ListingAdCardAdditionalInfoProps {
  projectType: Ad["project_type"];
  year: Ad["year"];
  ownershipType: Ad["ownership_type"];
  availabilitiesLabel: Ad["availabilities_label"];
}
