import { ListingAdCardAdditionalInfoProps } from "./ListingAdCardAdditionalInfo.types";

function ListingAdCardAdditionalInfo({
  projectType,
  year,
  ownershipType,
  availabilitiesLabel,
}: ListingAdCardAdditionalInfoProps) {
  return (
    <div>
      <div>
        {projectType} · {year} · {ownershipType}
      </div>
      <div>{availabilitiesLabel}</div>
    </div>
  );
}

export default ListingAdCardAdditionalInfo;
