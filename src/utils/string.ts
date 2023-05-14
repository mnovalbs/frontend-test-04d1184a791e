import { PHONE_NUMBER_REGEX } from "contants/regex";

export function splitPhoneNumber(str: string) {
  return str.split(PHONE_NUMBER_REGEX);
}

export function maskPhoneNumber(str: string, char: string = "X") {
  return str.replace(/\d{4}$/, char.repeat(4));
}

export function createThumbnailUrls(imageUrl: string, defaultSize?: number) {
  if (!defaultSize) return [];

  const imageSizes = [
    { w: defaultSize, q: 35 },
    { w: defaultSize * 2, q: 25 },
  ];
  const url = new URL(imageUrl);

  return imageSizes.map((size) => {
    url.searchParams.set("q", size.q.toString());
    url.searchParams.set("w", size.w.toString());
    url.searchParams.set("auto", "compress");
    url.searchParams.set("mode", "crop");

    return url.toString();
  });
}
