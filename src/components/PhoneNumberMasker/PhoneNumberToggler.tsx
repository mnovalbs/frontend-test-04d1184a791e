import { useState } from "react";
import { maskPhoneNumber } from "utils/string";
import { PhoneNumberMaskerProps } from "./PhoneNumberMasker.types";

function PhoneNumberMasker({ phoneNumber }: PhoneNumberMaskerProps) {
  const [isNumberShow, setIsNumberShow] = useState(false);

  const toggleNumberShow = () => setIsNumberShow((prev) => !prev);
  const maskedPhoneNumber = maskPhoneNumber(phoneNumber);

  return (
    <button onClick={toggleNumberShow}>
      {isNumberShow ? phoneNumber : maskedPhoneNumber}
    </button>
  );
}

export default PhoneNumberMasker;
