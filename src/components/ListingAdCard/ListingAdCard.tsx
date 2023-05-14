import { useState } from "react";
import styles from "./ListingAdCard.module.css";

import ListingAdCardMainInfo from "components/ListingAdCardMainInfo";
import ListingAdCardPriceInfo from "components/ListingAdCardPriceInfo";

import { ListingAdCardProps } from "./ListingAdCard.types";
import ListingAdCardAdditionalInfo from "components/ListingAdCardAdditionalInfo";
import ButtonLink from "components/ButtonLink";
import ListingAdCardDecription from "components/ListingAdCardDescription";

function ListingAdCard({ ad }: ListingAdCardProps) {
  const {
    pic,
    year,
    title,
    address,
    description,
    psf_min: psfMin,
    psf_max: psfMax,
    subprice_label: subPriceLabel,
    project_type: projectType,
    ownership_type: ownershipType,
    availabilities_label: availabilitiesLabel,
  } = ad;

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);

  const toggleDescriptionOpen = () => setIsDescriptionOpen((prev) => !prev);

  return (
    <div className={styles.listingCard}>
      <div className={styles.mainPicContainer}>
        <img
          className={styles.mainPic}
          alt={title}
          width="300"
          height="500"
          src={pic}
        />
      </div>
      <div className={styles.mainContentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.leftContent}>
            <ListingAdCardMainInfo title={title} address={address} />
            <ListingAdCardAdditionalInfo
              projectType={projectType}
              year={year}
              ownershipType={ownershipType}
              availabilitiesLabel={availabilitiesLabel}
            />
          </div>

          <div>
            <ListingAdCardPriceInfo
              psfMin={psfMin}
              psfMax={psfMax}
              subPriceLabel={subPriceLabel}
            />
          </div>
        </div>

        {isDescriptionOpen && (
          <ListingAdCardDecription description={description} />
        )}

        <div className={styles.listingCardFooter}>
          <ButtonLink onClick={toggleDescriptionOpen}>
            {isDescriptionOpen ? "Hide" : "See"} description
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default ListingAdCard;
