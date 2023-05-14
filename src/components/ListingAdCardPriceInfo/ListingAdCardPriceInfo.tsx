import { currencyFormatter } from "utils/formatter";
import styles from "./ListingAdCardPriceInfo.module.css";

import { ListingAdCardPriceInfoProps } from "./ListingAdCardPriceInfo.types";

function ListingAdCardPriceInfo({
  psfMin,
  psfMax,
  subPriceLabel,
}: ListingAdCardPriceInfoProps) {
  return (
    <div className={styles.priceInfo}>
      <div className={styles.priceRange}>
        {currencyFormatter(psfMin)} - {currencyFormatter(psfMax)} psf
      </div>
      <div className={styles.subPriceLabel}>{subPriceLabel}</div>
    </div>
  );
}

export default ListingAdCardPriceInfo;
