import { useState } from "react";
import { maskPhoneNumber } from "utils/string";
import { PhoneNumberMaskerProps } from "./PhoneNumberMasker.types";
import styles from "./PhoneNumberMasker.module.css"

function PhoneNumberMasker({ phoneNumber }: PhoneNumberMaskerProps) {
  const [isNumberShow, setIsNumberShow] = useState(false);

  const toggleNumberShow = () => setIsNumberShow((prev) => !prev);
  const maskedPhoneNumber = maskPhoneNumber(phoneNumber);

  return (
    <span className={styles.phoneNumber} onClick={toggleNumberShow}>
      {isNumberShow ? phoneNumber : maskedPhoneNumber}
    </span>
  );
}

export default PhoneNumberMasker;
