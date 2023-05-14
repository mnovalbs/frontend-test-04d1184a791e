import PhoneNumberMasker from "components/PhoneNumberMasker";
import { PHONE_NUMBER_REGEX } from "contants/regex";
import { splitPhoneNumber } from "utils/string";

import { ListingAdCardDecriptionProps } from "./ListingAdCardDecription.types";
import styles from "./ListingAdCardDecription.module.css"

function ListingAdCardDecription({ description }: ListingAdCardDecriptionProps) {
  const splittedDescription = splitPhoneNumber(description);

  return (
    <div className={styles.description}>
      {splittedDescription.map((descriptionChunk) => {
        if (PHONE_NUMBER_REGEX.test(descriptionChunk)) {
          return <PhoneNumberMasker phoneNumber={descriptionChunk} />;
        }
        return descriptionChunk;
      })}
    </div>
  );
}

export default ListingAdCardDecription;
