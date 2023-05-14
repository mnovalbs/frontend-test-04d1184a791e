import mockAd from "contants/mockAd";
import {
  maskPhoneNumber,
  splitPhoneNumber,
  createThumbnailUrls,
} from "../string";

describe("splitPhoneNumber", () => {
  it("returns array of string splitted by phone number format", () => {
    const result = splitPhoneNumber(
      "string with singapore phone number format: 1234 5678 and this is another example: 12345678"
    );
    expect(result[1]).toBe("1234 5678");
    expect(result[3]).toBe("12345678");
  });
});

describe("maskPhoneNumber", () => {
  it("replace last 4 chars with X", () => {
    expect(maskPhoneNumber("12345678")).toBe("1234XXXX");
  });
});

describe("createThumbnailUrls", () => {
  it("returns array of url", () => {
    const result = createThumbnailUrls(mockAd.pic);

    expect(result).toHaveLength(2);
    expect(result).toMatchInlineSnapshot(`
Array [
  "https://images.prismic.io/99-content/dc1594fb-f413-44ff-b8b5-c3ba6cd539cd_vbWkNuxt2hjgidVttoMRDX.jpg?mode=crop&auto=compress&w=544&q=35",
  "https://images.prismic.io/99-content/dc1594fb-f413-44ff-b8b5-c3ba6cd539cd_vbWkNuxt2hjgidVttoMRDX.jpg?mode=crop&auto=compress&w=1088&q=25",
]
`);
  });
});
