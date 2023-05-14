import PhoneNumberMasker from "components/PhoneNumberMasker";
import { PHONE_NUMBER_REGEX } from "contants/regex";
import { splitPhoneNumber } from "utils/string";

import { ListingAdCardDecriptionProps } from "./ListingAdCardDecription.types";
import styles from "./ListingAdCardDecription.module.css"
import { Fragment } from "react";

function ListingAdCardDecription({ description }: ListingAdCardDecriptionProps) {
  const splittedDescription = splitPhoneNumber(description);

  return (
    <div className={styles.description} data-testid="description">
      {splittedDescription.map((descriptionChunk, index) => {
        if (PHONE_NUMBER_REGEX.test(descriptionChunk)) {
          return <PhoneNumberMasker key={index} phoneNumber={descriptionChunk} />;
        }
        return <Fragment key={index}>{descriptionChunk}</Fragment>;
      })}
    </div>
  );
}

export default ListingAdCardDecription;
