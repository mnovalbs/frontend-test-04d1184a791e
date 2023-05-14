import { Ad } from "types/Ad";

export interface ListingAdCardPriceInfoProps {
  psfMin: Ad["psf_min"];
  psfMax: Ad["psf_max"];
  subPriceLabel: Ad["subprice_label"];
}
