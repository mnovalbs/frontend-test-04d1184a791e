const CURRENCY = "USD";
const DEFAULT_CURRENCY_OPTIONS = {
  currency: CURRENCY,
  maximumFractionDigits: 0,
};

export function currencyFormatter(
  num: number,
  options?: Intl.NumberFormatOptions
) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    ...DEFAULT_CURRENCY_OPTIONS,
    ...options,
  });
  return formatter.format(num);
}
