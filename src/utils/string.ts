import { PHONE_NUMBER_REGEX } from "contants/regex";

export function splitPhoneNumber(str: string) {
  return str.split(PHONE_NUMBER_REGEX);
}

export function maskPhoneNumber(str: string, char: string = "X") {
  return str.replace(/\d{4}$/, char.repeat(4));
}
